import request from '../utils/request.js';

const system = {
    putActivate(options) {
        return request.put(`http://${options.ip}/ISAPI/System/activate`, options.axiosData, options.axiosOptions)
    },
    getNetworkInterfaces(options) {
        return request.get(`http://${options.ip}/ISAPI/System/Network/interfaces`, options.axiosOptions);
    },
    getNetworkInterfacesByID(options) {
        return request.get(`http://${options.ip}/ISAPI/System/Network/interfaces/${options.axiosPathVar[0]}`, options.axiosOptions);
    },
    putNetworkInterfacesByID(options) {
        return request.put(`http://${options.ip}/ISAPI/System/Network/interfaces/${options.axiosPathVar[0]}`, options.axiosData, options.axiosOptions);
    },
    getDeviceInfo(options) {
        return request.get(`http://${options.ip}/ISAPI/System/deviceInfo`, options.axiosOptions);
    },
    putDeviceInfo(options) {
        return request.put(`http://${options.ip}/ISAPI/System/deviceInfo`, options.axiosData, options.axiosOptions);
    },
    getVideoInputsChannelsOverlaysByID(options) {
        return request.get(`http://${options.ip}/ISAPI/System/Video/inputs/channels/${options.axiosPathVar[0]}/overlays`, options.axiosOptions)
    },
    putVideoInputsChannelsOverlaysByID(options) {
        return request.put(`http://${options.ip}/ISAPI/System/Video/inputs/channels/${options.axiosPathVar[0]}/overlays`, options.axiosData, options.axiosOptions)
    },
    getVideoInputsChannelsOverlaysChannelNameOverlayByID(options) {
        return request.get(`http://${options.ip}/ISAPI/System/Video/inputs/channels/${options.axiosPathVar[0]}/overlays/channelNameOverlay`, options.axiosOptions)
    },
    putVideoInputsChannelsOverlaysChannelNameOverlayByID(options) {
        return request.put(`http://${options.ip}/ISAPI/System/Video/inputs/channels/${options.axiosPathVar[0]}/overlays/channelNameOverlay`, options.axiosData, options.axiosOptions)
    },
    getTime(options) {
        return request.get(`http://${options.ip}/ISAPI/System/time`, options.axiosOptions)
    },
    putTime(options) {
        return request.put(`http://${options.ip}/ISAPI/System/time`, options.axiosData, options.axiosOptions)
    },
    getVideoInputsChannelsByID(options) {
        return request.get(`http://${options.ip}/ISAPI/System/Video/inputs/channels/${options.axiosPathVar[0]}`, options.axiosOptions)
    },
    putVideoInputsChannelsByID(options) {
        return request.put(`http://${options.ip}/ISAPI/System/Video/inputs/channels/${options.axiosPathVar[0]}`, options.axiosData, options.axiosOptions)
    },
    putReboot(options) {
        return request.put(`http://${options.ip}/ISAPI/System/reboot`, options.axiosData, options.axiosOptions)
    },
    putFactoryReset(options) {
        return request.put(`http://${options.ip}/ISAPI/System/factoryReset?mode=${options.axiosPathVar[0]}`, options.axiosData, options.axiosOptions)
    },
}

export default system;