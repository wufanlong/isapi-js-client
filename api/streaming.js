import request from '../utils/request.js';

const streaming = {
    securityCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/capabilities`, options.axiosOptions);
    }
}

export default streaming;