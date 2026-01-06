import request from '../utils/request.js';

const encryption = {
    securityCapabilities(ip,options) {
        return request.get(`http://${ip}/ISAPI/Security/capabilities`, options);
    }
}

export default encryption;