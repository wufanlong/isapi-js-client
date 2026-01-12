import request from '../utils/request.js';

const security = {
    getUserCheck(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/userCheck`, options.axiosOptions);
    },
    getSecurityCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/capabilities`, options.axiosOptions);
    }
}

export default security;