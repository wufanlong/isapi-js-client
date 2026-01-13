import request from "../utils/request.js";

const AUXInfo = {
  attributes: {
    getChannels(options) {
      return request.get(
        `http://${options.ip}/ISAPI/attributes/Channels`,
        options.axiosOptions
      );
    },
    getChannel(options) {
        return request.get(
            `http://${options.ip}/ISAPI/attributes/Channels/${options.axiosPathVal}`,
            options.axiosOptions
        );
    }
  },
};

export default AUXInfo;
