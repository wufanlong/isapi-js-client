import net from "net";
function request(url, data, options) {
    const u = new URL(url);
    const ip = u.hostname;                     // 192.168.1.64
    const port = u.port ? Number(u.port) : 80; // 默认 80
    const path = u.pathname + u.search;        // /ISAPI/Security/challenge
    const body = typeof data === 'string' ? data : '';
    const timeout = options.timeout ?? 5000;
  return new Promise((resolve, reject) => {
    const socket = new net.Socket();
    let chunks = [];

    socket.setTimeout(timeout);

    socket.connect(port, ip, () => {
      const req =
        `POST ${path} HTTP/1.1\r\n` +
        `Host: ${ip}\r\n` +
        `Content-Type: application/xml\r\n` +
        `Content-Length: ${Buffer.byteLength(body)}\r\n` +
        `Connection: close\r\n` +
        `\r\n` +
        body;

      socket.write(req);
    });

    socket.on("data", (chunk) => {
      chunks.push(chunk);
    });

    socket.on("timeout", () => {
      socket.destroy();
      reject(new Error("Socket timeout"));
    });

    socket.on("error", (err) => {
      resolve({
        error: err.message,
        raw: Buffer.concat(chunks),
      });
    });

    socket.on("close", () => {
      const rawBuffer = Buffer.concat(chunks);
      const rawText = rawBuffer.toString("binary");

      const [headerPart, ...bodyParts] = rawText.split("\r\n\r\n");
      const bodyText = bodyParts.join("\r\n\r\n");

      const headerLines = headerPart.split("\r\n");
      const statusLine = headerLines.shift();

      const headers = {};
      headerLines.forEach((line) => {
        const idx = line.indexOf(":");
        if (idx > 0) {
          const key = line.slice(0, idx).trim().toLowerCase();
          const val = line.slice(idx + 1).trim();
          headers[key] = val;
        }
      });


      const { status, statusText } = parseStatusLine(statusLine);
      const obj = {
        status,
        statusText,
        headers,
        body: bodyText,
        raw: rawText,
      }
      if (status !== 200) {
        reject(toAxiosResponse(obj))
      } else {
        resolve(toAxiosResponse(obj));
      }
    });
  });
}

function toAxiosResponse(rawResult, config = {}) {
  if (rawResult.status !== 200) {
    return {
      name: 'AxiosError',
      message: 'Request failed with status code ' + rawResult.status,
      code: 'ERR_BAD_REQUEST',
      request: {
        raw: rawResult.raw
      },
      response: {
        status: rawResult.status,
        statusText: rawResult.statusText,
        headers: rawResult.headers,
        data: rawResult.body
      }
    }
  }

  return {
    data: rawResult.body,
    status: rawRequest.status,
    statusText: rawRequest.statusText,
    headers: rawResult.headers,
    config,
    // request: {
    //   raw: JSON.stringify(rawResult.raw).replaceAll("\n", "").replaceAll("\r", "").replaceAll("+", "")
    // },
    request: {
      raw: rawResult.raw
    }
  };
}
function parseStatusLine(line) {
  // HTTP/1.1 401 Unauthorized
  const [, statusCode, ...statusTextArr] = line.split(' ');
  return {
    status: Number(statusCode),
    statusText: statusTextArr.join(' ')
  };
}
const rawRequest = {
    get(url, options) {
        return request(url, null, options)
    },
    post(url, data, options) {
        return request(url, data, options)
    },
    put(url, data, options) {
        return request(url, data, options)
    },
    delete(url, options) {
        return request(url, null, options)
    }
}

export default rawRequest
