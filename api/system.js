import request from '../utils/request.js';

const system = {
    deviceInfo(options) {
        return request.get(`http://${options.ip}/ISAPI/System/deviceInfo`, options.axiosOptions);
    }
}

export default system;