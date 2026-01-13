import request from '../utils/request.js';

const contentMgmt = {
    getCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/capabilities`, options.axiosOptions);
    },
    getDownload(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/download`, options.axiosOptions);
    },
}

export default contentMgmt;