import request from '../utils/request.js';

const encryption = {
    securityCapabilities(ip) {
        return request.get(`http://${ip}/ISAPI/Security/capabilities`);
    }
}

export default encryption;