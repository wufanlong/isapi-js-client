import request from '../utils/request.js';

const system = {
    network: {
        interfaces(options) {
            return request.get(`http://${options.ip}/ISAPI/System/Network/interfaces`, options.axiosOptions);
        }
    },
    deviceInfo(options) {
        return request.get(`http://${options.ip}/ISAPI/System/deviceInfo`, options.axiosOptions);
    }
}

export default system;