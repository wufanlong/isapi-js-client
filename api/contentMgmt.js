import request from '../utils/request.js';

const contentMgmt = {
    getCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/capabilities`, options.axiosOptions);
    },
    getDownload(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/download`, options.axiosOptions);
    },
    getDownloadCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/download/capabilities`, options.axiosOptions);
    },
    getDownloadToUSBProgress(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/download/toUSB/${options.axiosPathVal[0]}/progress?format=json`, options.axiosOptions);
    },
    getDownloadToUSBCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/download/toUSB/capabilities?format=json`, options.axiosOptions);
    },
    postDownloadToUSB(options) {
        return request.post(`http://${options.ip}/ISAPI/ContentMgmt/download/toUSB`, options.axiosData, options.axiosOptions);
    },
    getInputProxyChannels(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/InputProxy/channels`, options.axiosOptions);
    },
    putInputProxyChannels(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/InputProxy/channels`, options.axiosData, options.axiosOptions);
    },
    postInputProxyChannels(options) {
        return request.post(`http://${options.ip}/ISAPI/ContentMgmt/InputProxy/channels`, options.axiosData, options.axiosOptions);
    },
    getInputProxyChannelsByID(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/InputProxy/channels/${options.axiosPathVal[0]}`, options.axiosOptions);
    },
    putInputProxyChannelsByID(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/InputProxy/channels/${options.axiosPathVal[0]}`, options.axiosData, options.axiosOptions);
    },
    deleteInputProxyChannelsByID(options) {
        return request.delete(`http://${options.ip}/ISAPI/ContentMgmt/InputProxy/channels/${options.axiosPathVal[0]}`, options.axiosOptions);
    },
    getInputProxyChannelsCapabilitiesByID(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/InputProxy/channels/${options.axiosPathVal[0]}/capabilities`, options.axiosOptions);
    },
    getInputProxyChannelsChanCtrlByID(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/InputProxy/channels/${options.axiosPathVal[0]}/chanCtrl`, options.axiosOptions);
    },
    putInputProxyChannelsChanCtrlByID(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/InputProxy/channels/${options.axiosPathVal[0]}/chanCtrl`, options.axiosData, options.axiosOptions);
    },
    postInputProxyChannelsPortMapParamByID(options) {
        return request.post(`http://${options.ip}/ISAPI/ContentMgmt/InputProxy/channels/${options.axiosPathVal[0]}/portMapParam`, options.axiosData, options.axiosOptions);
    },
    getInputProxyChannelsRebootByID(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/InputProxy/channels/${options.axiosPathVal[0]}/reboot`, options.axiosOptions);
    },
    getInputProxyChannelsStatusByID(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/InputProxy/channels/${options.axiosPathVal[0]}/status`, options.axiosOptions);
    },
    putInputProxyChannelsActivate(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/InputProxy/channels/activate`, options.axiosData, options.axiosOptions);
    },
    getInputProxyChannelsActivateCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/InputProxy/channels/activate/capabilities`, options.axiosOptions);
    },
    getInputProxyChannelsCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/InputProxy/channels/capabilities`, options.axiosOptions);
    },
    getInputProxyChannelsStatus(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/InputProxy/channels/status`, options.axiosOptions);
    },
    getInputProxySearch(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/InputProxy/search`, options.axiosOptions);
    },
    postInputProxySourceCapability(options) {
        return request.post(`http://${options.ip}/ISAPI/ContentMgmt/InputProxy/sourceCapability`, options.axiosData, options.axiosOptions);
    },
    getIOProxyInputs(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/IOProxy/inputs`, options.axiosOptions);
    },
    putIOProxyInputs(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/IOProxy/inputs`, options.axiosData, options.axiosOptions);
    },
    postIOProxyInputs(options) {
        return request.post(`http://${options.ip}/ISAPI/ContentMgmt/IOProxy/inputs`, options.axiosData, options.axiosOptions);
    },
    getIOProxyInputsByID(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/IOProxy/inputs/${options.axiosPathVal[0]}`, options.axiosOptions);
    },
    putIOProxyInputsByID(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/IOProxy/inputs/${options.axiosPathVal[0]}`, options.axiosData, options.axiosOptions);
    },
    deleteIOProxyInputsByID(options) {
        return request.delete(`http://${options.ip}/ISAPI/ContentMgmt/IOProxy/inputs/${options.axiosPathVal[0]}`, options.axiosOptions);
    },
    getIOProxyInputsStatusByID(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/IOProxy/inputs/${options.axiosPathVal[0]}/status`, options.axiosOptions);
    },
    getIOProxyOutputs(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/IOProxy/outputs`, options.axiosOptions);
    },
    putIOProxyOutputs(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/IOProxy/outputs`, options.axiosData, options.axiosOptions);
    },
    postIOProxyOutputs(options) {
        return request.post(`http://${options.ip}/ISAPI/ContentMgmt/IOProxy/outputs`, options.axiosData, options.axiosOptions);
    },
    getIOProxyOutputsByID(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/IOProxy/outputs/${options.axiosPathVal[0]}`, options.axiosOptions);
    },
    putIOProxyOutputsByID(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/IOProxy/outputs/${options.axiosPathVal[0]}`, options.axiosData, options.axiosOptions);
    },
    deleteIOProxyOutputsByID(options) {
        return request.delete(`http://${options.ip}/ISAPI/ContentMgmt/IOProxy/outputs/${options.axiosPathVal[0]}`, options.axiosOptions);
    },
    getIOProxyOutputsStatusByID(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/IOProxy/outputs/${options.axiosPathVal[0]}/status`, options.axiosOptions);
    },
    putIOProxyOutputsTriggerByID(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/IOProxy/outputs/${options.axiosPathVal[0]}/trigger`, options.axiosData, options.axiosOptions);
    },
    getLogConfig(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/logConfig`, options.axiosOptions);
    },
    putLogConfig(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/logConfig`, options.axiosData,options.axiosOptions);
    },
    getLogConfigCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/logConfig/capabilities`, options.axiosOptions);
    },
    postLogSearch(options) {
        return request.post(`http://${options.ip}/ISAPI/ContentMgmt/logSearch`, options.axiosData, options.axiosOptions);
    },
    postLogSearchDataPackage(options) {
        return request.post(`http://${options.ip}/ISAPI/ContentMgmt/logSearch/dataPackage`, options.axiosData, options.axiosOptions);
    },
    putRecordControlManualRefreshChannelsByID(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/record/control/manualRefresh/channels/${options.axiosPathVal[0]}`, options.axiosData, options.axiosOptions);
    },
    postRecordControlManualStartTracksByID(options) {
        return request.post(`http://${options.ip}/ISAPI/ContentMgmt/record/control/manual/start/tracks/${options.axiosPathVal[0]}`, options.axiosData, options.axiosOptions);
    },
    postRecordControlManualStopTracksByID(options) {
        return request.post(`http://${options.ip}/ISAPI/ContentMgmt/record/control/manual/stop/tracks/${options.axiosPathVal[0]}`, options.axiosData, options.axiosOptions);
    },
    getRecordProfile(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/record/profile`, options.axiosOptions);
    },
    putRecordStorageMounts(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/record/storageMounts`, options.axiosData, options.axiosOptions);
    },
    getRecordTracks(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/record/tracks`, options.axiosData, options.axiosOptions);
    },
    putRecordTracks(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/record/tracks`, options.axiosData, options.axiosOptions);
    },
    postRecordTracks(options) {
        return request.post(`http://${options.ip}/ISAPI/ContentMgmt/record/tracks`, options.axiosData, options.axiosOptions);
    },
    getRecordTracksByID(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/record/tracks/${options.axiosPathVal[0]}`, options.axiosOptions);
    },
    putRecordTracksByID(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/record/tracks/${options.axiosPathVal[0]}`, options.axiosData, options.axiosOptions);
    },
    deleteRecordTracksByID(options) {
        return request.delete(`http://${options.ip}/ISAPI/ContentMgmt/record/tracks/${options.axiosPathVal[0]}`, options.axiosOptions);
    },
    getRecordTracksCapabilitiesByID(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/record/tracks/${options.axiosPathVal[0]}/capabilities`, options.axiosOptions);
    },
    postRecordTracksDailyDistributionByID(options) {
        return request.post(`http://${options.ip}/ISAPI/ContentMgmt/record/tracks/${options.axiosPathVal[0]}/dailyDistribution`, options.axiosData, options.axiosOptions);
    },
    getSearch(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/search`, options.axiosOptions);
    },
    postSearch(options) {
        return request.post(`http://${options.ip}/ISAPI/ContentMgmt/search`, options.axiosData, options.axiosOptions);
    },
    getSearchProfile(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/search/profile`, options.axiosOptions);
    },
    postSecurityLogSearch(options) {
        return request.post(`http://${options.ip}/ISAPI/ContentMgmt/security/logSearch`, options.axiosData, options.axiosOptions);
    },
    postSmartSearch(options) {
        return request.post(`http://${options.ip}/ISAPI/ContentMgmt/SmartSearch`, options.axiosData, options.axiosOptions);
    },
    getSmartSearchCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/SmartSearch/capabilities`, options.axiosOptions);
    },
    getStorageExtraInfo(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/Storage/ExtraInfo`, options.axiosOptions);
    },
    putStorageExtraInfo(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/Storage/ExtraInfo`, options.axiosData, options.axiosOptions);
    },
    getStorageExtraInfoCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/Storage/ExtraInfo/capabilities`, options.axiosOptions);
    },
    getStorageHdd(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/Storage/hdd`, options.axiosOptions);
    },
    getStorageHddByID(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/Storage/hdd/${options.axiosPathVal[0]}`, options.axiosOptions);
    },
    putStorageHddBadSectorsTestPauseByID(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/Storage/hdd/${options.axiosPathVal[0]}/BadSectorsTest/pause`, options.axiosData, options.axiosOptions);
    },
    putStorageHddBadSectorsTestResumeByID(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/Storage/hdd/${options.axiosPathVal[0]}/BadSectorsTest/resume`, options.axiosData, options.axiosOptions);
    },
    putStorageHddBadSectorsTestStartByID(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/Storage/hdd/${options.axiosPathVal[0]}/BadSectorsTest/start`, options.axiosData, options.axiosOptions);
    },
    getStorageHddBadSectorsTestStatusByID(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/Storage/hdd/${options.axiosPathVal[0]}/BadSectorsTest/status`, options.axiosOptions);
    },
    putStorageHddBadSectorsTestStopByID(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/Storage/hdd/${options.axiosPathVal[0]}/BadSectorsTest/stop`, options.axiosData, options.axiosOptions);
    },
    putStorageHddEncryptFormatByID(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/Storage/hdd/${options.axiosPathVal[0]}/EncryptFormat?format=json`, options.axiosData, options.axiosOptions);
    },
    putStorageHddEncryptVerfyByID(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/Storage/hdd/${options.axiosPathVal[0]}/EncryptVerfy?format=json`, options.axiosData, options.axiosOptions);
    },
    getStorageHddFormatStatusByID(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/Storage/hdd/${options.axiosPathVal[0]}/formatStatus`, options.axiosOptions);
    },
    putStorageHddFormatByID(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/Storage/hdd/${options.axiosPathVal[0]}/format`, options.axiosData, options.axiosOptions);
    },
    getStorageHddSMARTTestConfig(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/Storage/hdd/SMARTTest/config`, options.axiosOptions);
    },
    putStorageHddSMARTTestConfig(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/Storage/hdd/SMARTTest/config`, options.axiosData, options.axiosOptions);
    },
    putStorageHddSMARTTestStartByID(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/Storage/hdd/${options.axiosPathVal[0]}/SMARTTest/start`, options.axiosData, options.axiosOptions);
    },
    getStorageHddSMARTTestStatusByID(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/Storage/hdd/${options.axiosPathVal[0]}/SMARTTest/status`, options.axiosOptions);
    },
    getStorageHddCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/Storage/hdd/capabilities`, options.axiosOptions);
    },
    putStorageHddFormat(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/Storage/hdd/format`, options.axiosData, options.axiosOptions);
    },
    putStorageHddSpecifyHddFormat(options) {
        return request.put(`http://${options.ip}/ISAPI/ContentMgmt/Storage/hdd/specifyHddFormat?format=json`, options.axiosData, options.axiosOptions);
    },
    getStorageQuota(options) {
        return request.get(`http://${options.ip}/ISAPI/ContentMgmt/Storage/quota`, options.axiosOptions);
    }
}
    
export default contentMgmt;