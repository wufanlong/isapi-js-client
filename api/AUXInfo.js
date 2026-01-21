import request from "../utils/request.js";

const AUXInfo = {
  attributes: {
    getChannels(options) {
      return request.get(
        `http://${options.ip}/ISAPI/attributes/Channels`,
        options.axiosOptions
      );
    },
    getChannelsByID(options) {
        return request.get(
            `http://${options.ip}/ISAPI/attributes/Channels/${options.axiosPathVal[0]}`,
            options.axiosOptions
        );
    }
  },
};

export default AUXInfo;
