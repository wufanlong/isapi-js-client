import request from '../utils/request.js';

const AUXInfo = {
    securityCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/capabilities`, options.axiosOptions);
    }
}

export default AUXInfo;