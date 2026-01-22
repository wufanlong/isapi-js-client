import request from '../utils/request.js';

const image = {
    getChannels(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels`, options.axiosOptions);
    },
    putChannels(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels`, options.axiosData, options.axiosOptions);
    },
    getChannelsByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}`, options.axiosOptions);
    },
    putChannelsByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}`, options.axiosData, options.axiosOptions);
    },
    getChannelsBLCByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/BLC`, options.axiosOptions);
    },
    putChannelsBLCByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/BLC`, options.axiosData, options.axiosOptions);
    },
    getChannelsCapabilitiesByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/capabilities`, options.axiosOptions);
    },
    getChannelsCapturemodeByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/capturemode`, options.axiosOptions);
    },
    putChannelsCapturemodeByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/capturemode`, options.axiosData, options.axiosOptions);
    },
    getChannelsColorByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/color`, options.axiosOptions);
    },
    putChannelsColorByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/color`, options.axiosData, options.axiosOptions);
    },
    getChannelsColorCapabilitiesByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/color/capabilities`, options.axiosOptions);
    },
    getChannelsCorridorByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/corridor`, options.axiosOptions);
    },
    putChannelsCorridorByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/corridor`, options.axiosData, options.axiosOptions);
    },
    getChannelsDehazeByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/dehaze`, options.axiosOptions);
    },
    putChannelsDehazeByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/dehaze`, options.axiosData, options.axiosOptions);
    },
    getChannelsEPTZByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/EPTZ`, options.axiosOptions);
    },
    putChannelsEPTZByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/EPTZ`, options.axiosData, options.axiosOptions);
    },
    getChannelsEPTZModeCapabilitiesByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/EPTZ/mode/capabilities?format=json`, options.axiosOptions);
    },
    getChannelsEPTZModeByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/EPTZ/mode?format=json`, options.axiosOptions);
    },
    putChannelsEPTZModeByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/EPTZ/mode`, options.axiosData, options.axiosOptions);
    },
    getChannelsExposureByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/exposure`, options.axiosOptions);
    },
    putChannelsExposureByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/exposure`, options.axiosData, options.axiosOptions);
    },
    getChannelsFocusConfigurationByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/focusConfiguration`, options.axiosOptions);
    },
    putChannelsFocusConfigurationByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/focusConfiguration`, options.axiosData, options.axiosOptions);
    },
    getChannelsFocusConfigurationCapabilitiesByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/focusConfiguration/capabilities`, options.axiosOptions);
    },
    getChannelsGainByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/gain`, options.axiosOptions);
    },
    putChannelsGainByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/gain`, options.axiosData, options.axiosOptions);
    },
    getChannelsImageCapByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/imageCap`, options.axiosOptions);
    },
    getChannelsImageFlipByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/imageFlip`, options.axiosOptions);
    },
    putChannelsImageFlipByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/imageFlip`, options.axiosData, options.axiosOptions);
    },
    getChannelsImageModeByIDAndImageModeID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/imageMode/${options.axiosPathVal[1]}`, options.axiosOptions);
    },
    getChannelsImageModesByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/imageModes`, options.axiosOptions);
    },
    getChannelsIrcutFilterByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/IrcutFilter`, options.axiosOptions);
    },
    putChannelsIrcutFilterByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/IrcutFilter`, options.axiosData, options.axiosOptions);
    },
    getChannelsISPModeByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/ISPMode`, options.axiosOptions);
    },
    putChannelsISPModeByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/ISPMode`, options.axiosData, options.axiosOptions);
    },
    getChannelsLensDistortionCorrectionByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/lensDistortionCorrection`, options.axiosOptions);
    },
    putChannelsLensDistortionCorrectionByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/lensDistortionCorrection`, options.axiosData, options.axiosOptions);
    },
    getChannelsLensDistortionCorrectionCapabilitiesByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/lensDistortionCorrection/capabilities`, options.axiosOptions);
    },
    getChannelsNoiseReduceByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/noiseReduce`, options.axiosOptions);
    },
    putChannelsNoiseReduceByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/noiseReduce`, options.axiosData, options.axiosOptions);
    },
    getChannelsPalettesByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/palettes`, options.axiosOptions);
    },
    putChannelsPalettesByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/palettes`, options.axiosData, options.axiosOptions);
    },
    getChannelsPowerLineFrequencyByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/powerLineFrequency`, options.axiosOptions);
    },
    putChannelsPowerLineFrequencyByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/powerLineFrequency`, options.axiosData, options.axiosOptions);
    },
    putChannelsRegionalFocusByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/regionalFocus`, options.axiosData, options.axiosOptions);
    },
    putChannelsResetByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/reset`, options.axiosData, options.axiosOptions);
    },
    putChannelsRestoreByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/restore`, options.axiosData, options.axiosOptions);
    },
    getChannelsSharpnessByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/sharpness`, options.axiosOptions);
    },
    putChannelsSharpnessByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/sharpness`, options.axiosData, options.axiosOptions);
    },
    getChannelsShutterByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/shutter`, options.axiosOptions);
    },
    putChannelsShutterByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/shutter`, options.axiosData, options.axiosOptions);
    },
    getChannelsSupplementLightByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/SupplementLight`, options.axiosOptions);
    },
    putChannelsSupplementLightByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/SupplementLight`, options.axiosData, options.axiosOptions);
    },
    getChannelsSupplementLightCapabilitiesByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/SupplementLight/capabilities`, options.axiosOptions);
    },
    getChannelsTargetEnhancementByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/targetEnhancement`, options.axiosOptions);
    },
    putChannelsTargetEnhancementByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/targetEnhancement`, options.axiosData, options.axiosOptions);
    },
    getChannelsTargetEnhancementCapabilitiesByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/targetEnhancement/capabilities`, options.axiosOptions);
    },
    getChannelsTempRangeByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/tempRange`, options.axiosOptions);
    },
    putChannelsTempRangeByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/tempRange`, options.axiosData, options.axiosOptions);
    },
    getChannelsTempRangeCapabilitiesByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/tempRange/capabilities`, options.axiosOptions);
    },
    getChannelsWDRByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/WDR`, options.axiosOptions);
    },
    putChannelsWDRByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/WDR`, options.axiosData, options.axiosOptions);
    },
    getChannelsWhiteBalanceByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/whiteBalance`, options.axiosOptions);
    },
    putChannelsWhiteBalanceByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Image/channels/${options.axiosPathVal[0]}/whiteBalance`, options.axiosData, options.axiosOptions);
    }
};

export default image;