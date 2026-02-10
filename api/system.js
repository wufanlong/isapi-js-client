import request from '../utils/request.js';

const system = {
    putActivate(options) {
        return request.put(`http://${options.ip}/ISAPI/System/activate`, options.axiosData, options.axiosOptions)
    },
    network: {
        getInterfaces(options) {
            return request.get(`http://${options.ip}/ISAPI/System/Network/interfaces`, options.axiosOptions);
        }
    },
    getDeviceInfo(options) {
        return request.get(`http://${options.ip}/ISAPI/System/deviceInfo`, options.axiosOptions);
    },
    putDeviceInfo(options) {
        return request.put(`http://${options.ip}/ISAPI/System/deviceInfo`, options.axiosData, options.axiosOptions);
    },
    getVideoInputsChannelsOverlaysByID(options) {
        return request.get(`http://${options.ip}/ISAPI/System/Video/inputs/channels/${options.axiosPathVal[0]}/overlays`, options.axiosOptions)
    },
    putVideoInputsChannelsOverlaysByID(options) {
        return request.put(`http://${options.ip}/ISAPI/System/Video/inputs/channels/${options.axiosPathVal[0]}/overlays`, options.axiosData, options.axiosOptions)
    },
    getVideoInputsChannelsOverlaysChannelNameOverlayByID(options) {
        return request.get(`http://${options.ip}/ISAPI/System/Video/inputs/channels/${options.axiosPathVal[0]}/overlays/channelNameOverlay`, options.axiosOptions)
    },
    putVideoInputsChannelsOverlaysChannelNameOverlayByID(options) {
        return request.put(`http://${options.ip}/ISAPI/System/Video/inputs/channels/${options.axiosPathVal[0]}/overlays/channelNameOverlay`, options.axiosData, options.axiosOptions)
    },
    getVideoInputsChannelsByID(options) {
        return request.get(`http://${options.ip}/ISAPI/System/Video/inputs/channels/${options.axiosPathVal[0]}`, options.axiosOptions)
    },
    putVideoInputsChannelsByID(options) {
        return request.put(`http://${options.ip}/ISAPI/System/Video/inputs/channels/${options.axiosPathVal[0]}`, options.axiosData, options.axiosOptions)
    },
    putReboot(options) {
        return request.put(`http://${options.ip}/ISAPI/System/reboot`, options.axiosData, options.axiosOptions)
    },
    putFactoryReset(options) {
        return request.put(`http://${options.ip}/ISAPI/System/factoryReset?mode=${options.axiosPathVal[0]}`, options.axiosData, options.axiosOptions)
    },
}

export default system;