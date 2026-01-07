import request from '../utils/request.js';

const security = {
    securityCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/capabilities`, options.axiosOptions);
    }
}

export default security;