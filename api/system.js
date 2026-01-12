import request from '../utils/request.js';

const system = {
    network: {
        getInterfaces(options) {
            return request.get(`http://${options.ip}/ISAPI/System/Network/interfaces`, options.axiosOptions);
        }
    },
    getDeviceInfo(options) {
        return request.get(`http://${options.ip}/ISAPI/System/deviceInfo`, options.axiosOptions);
    }
}

export default system;