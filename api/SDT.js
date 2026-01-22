import request from '../utils/request.js';

const SDT = {
    getManagementCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/SDT/Management/capabilities?format=json`, options.axiosOptions);
    },
    postManagementEventSearch(options) {
        return request.post(`http://${options.ip}/ISAPI/SDT/Management/EventSearch?format=json`, options.axiosData, options.axiosOptions);
    },
    getManagementEventSearchCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/SDT/Management/EventSearch/capabilities?format=json`, options.axiosOptions);
    },
    putManagementIntelligentSearchExportStop(options) {
        return request.put(`http://${options.ip}/ISAPI/SDT/Management/IntelligentSearch/export/stop?format=json`, options.axiosData, options.axiosOptions);
    },
    postManagementIntelligentSearchExport(options) {
        return request.post(`http://${options.ip}/ISAPI/SDT/Management/IntelligentSearch/export?format=json`, options.axiosData, options.axiosOptions);
    },
    getManagementIntelligentSearchExportProgressByTaskID(options) {
        return request.get(`http://${options.ip}/ISAPI/SDT/Management/IntelligentSearch/export/progress?format=json&taskID=${options.axiosPathVal[0]}`, options.axiosOptions);
    },
    getManagementIntelligentSearchCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/SDT/Management/IntelligentSearch/capabilities?format=json`, options.axiosOptions);
    },
    postManagementIntelligentSearch(options) {
        return request.post(`http://${options.ip}/ISAPI/SDT/Management/IntelligentSearch?format=json`, options.axiosData, options.axiosOptions);
    }
}

export default SDT;