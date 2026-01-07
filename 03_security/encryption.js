import request from '../utils/request.js';

const encryption = {
    securityCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/capabilities`, options.axiosOptions);
    }
}

export default encryption;