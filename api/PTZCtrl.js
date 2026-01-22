import request from '../utils/request.js';

const PTZCtrl = {
    getChannelsByID(options) {
        return request.get(`http://${options.ip}/ISAPI/PTZCtrl/channels/${options.axiosPathVal[0]}`, options.axiosOptions);
    },
    putChannelsByID(options) {
        return request.put(`http://${options.ip}/ISAPI/PTZCtrl/channels/${options.axiosPathVal[0]}`, options.axiosData, options.axiosOptions);
    },
    getChannelsAuxcontrolsByID(options) {
        return request.get(`http://${options.ip}/ISAPI/PTZCtrl/channels/${options.axiosPathVal[0]}/auxcontrols`, options.axiosOptions);
    },
    putChannelsAuxcontrolsByID(options) {
        return request.put(`http://${options.ip}/ISAPI/PTZCtrl/channels/${options.axiosPathVal[0]}/auxcontrols`, options.axiosData, options.axiosOptions);
    },
    
}

export default PTZCtrl;