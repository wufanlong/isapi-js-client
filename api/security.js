import request from '../utils/request.js';

const security = {
    getUserCheck(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/userCheck`, options.axiosOptions);
    },
    getSecurityCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/capabilities`, options.axiosOptions);
    },
    postChallenge(options) {
        return request.post(`http://${options.ip}/ISAPI/Security/challenge`, options.axiosData, options.axiosOptions)
    }
}

export default security;