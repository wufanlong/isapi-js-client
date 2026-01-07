import request from '../utils/request.js';

const contentMgmt = {
    securityCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/capabilities`, options.axiosOptions);
    }
}

export default contentMgmt;