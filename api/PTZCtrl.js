import request from '../utils/request.js';

const PTZCtrl = {
    securityCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/capabilities`, options.axiosOptions);
    }
}

export default PTZCtrl;