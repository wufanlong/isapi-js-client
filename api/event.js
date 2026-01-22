import { de } from 'element-plus/es/locales.mjs';
import request from '../utils/request.js';

const event = {
    getCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/capabilities`, options.axiosOptions);
    },
    getChannelsCapabilitiesByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/channels/${options.axiosPathVal[0]}/capabilities`, options.axiosOptions);
    },
    getIOTChannelsCapabilitiesByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/IOT/channels/${options.axiosPathVal[0]}/capabilities?format=json`, options.axiosOptions);
    },
    getNotificationAlertStream(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/notification/alertStream`, options.axiosOptions);
    },
    getNotificationHttpHosts(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/notification/httpHosts`, options.axiosOptions);
    },
    putNotificationHttpHosts(options) {
        return request.put(`http://${options.ip}/ISAPI/Event/notification/httpHosts`, options.axiosData, options.axiosOptions);
    },
    postNotificationHttpHosts(options) {
        return request.post(`http://${options.ip}/ISAPI/Event/notification/httpHosts`, options.axiosData, options.axiosOptions);
    },
    deleteNotificationHttpHosts(options) {
        return request.delete(`http://${options.ip}/ISAPI/Event/notification/httpHosts`, options.axiosOptions);
    },
    postNotificationHttpHostsTestByID(options) {
        return request.post(`http://${options.ip}/ISAPI/Event/notification/httpHosts/${options.axiosPathVal[0]}/test`, options.axiosOptions);
    },
    getNotificationHttpHostsCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/notification/httpHosts/capabilities`, options.axiosOptions);
    },
    postNotificationSubscribeEvent(options) {
        return request.post(`http://${options.ip}/ISAPI/Event/notification/subscribeEvent`, options.axiosData, options.axiosOptions);
    },
    getNotificationSubscribeEventByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/notification/subscribeEvent/${options.axiosPathVal[0]}`, options.axiosOptions);
    },
    putNotificationSubscribeEventByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Event/notification/subscribeEvent/${options.axiosPathVal[0]}`, options.axiosData, options.axiosOptions);
    },
    getNotificationSubscribeEventCap(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/notification/subscribeEventCap`, options.axiosOptions);
    },
    putNotificationUnSubscribeEvent(options) {
        return request.put(`http://${options.ip}/ISAPI/Event/notification/unSubscribeEvent`, options.axiosData, options.axiosOptions);
    },
    getSchedulesByEventTypeAndID(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/schedules/${options.axiosPathVal[0]}/${options.axiosPathVal[1]}`, options.axiosOptions);
    },
    putSchedulesByEventTypeAndID(options) {
        return request.put(`http://${options.ip}/ISAPI/Event/schedules/${options.axiosPathVal[0]}/${options.axiosPathVal[1]}`, options.axiosData, options.axiosOptions);
    },
    getTriggersHdBadBlock(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/triggers/hdBadBlock`, options.axiosOptions);
    },
    putTriggersHdBadBlock(options) {
        return request.put(`http://${options.ip}/ISAPI/Event/triggers/hdBadBlock`, options.axiosData, options.axiosOptions);
    },
    getTriggersHdImpact(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/triggers/hdImpact`, options.axiosOptions);
    },
    putTriggersHdImpact(options) {
        return request.put(`http://${options.ip}/ISAPI/Event/triggers/hdImpact`, options.axiosData, options.axiosOptions);
    },
    getTriggersHighHDTemperature(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/triggers/highHDTemperature`, options.axiosOptions);
    },
    putTriggersHighHDTemperature(options) {
        return request.put(`http://${options.ip}/ISAPI/Event/triggers/highHDTemperature`, options.axiosData, options.axiosOptions);
    },
    getTriggersLowHDTemperature(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/triggers/lowHDTemperature`, options.axiosOptions);
    },
    putTriggersLowHDTemperature(options) {
        return request.put(`http://${options.ip}/ISAPI/Event/triggers/lowHDTemperature`, options.axiosData, options.axiosOptions);
    },
    getTriggersSevereHDFailure(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/triggers/severeHDFailure`, options.axiosOptions);
    },
    putTriggersSevereHDFailure(options) {
        return request.put(`http://${options.ip}/ISAPI/Event/triggers/severeHDFailure`, options.axiosData, options.axiosOptions);
    },
    getTriggersByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/triggers/${options.axiosPathVal[0]}`, options.axiosOptions);
    },
    putTriggersByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Event/triggers/${options.axiosPathVal[0]}`, options.axiosData, options.axiosOptions);
    },
    deleteTriggersByID(options) {
        return request.delete(`http://${options.ip}/ISAPI/Event/triggers/${options.axiosPathVal[0]}`, options.axiosOptions);
    },
    getTriggersNotificationsByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/triggers/${options.axiosPathVal[0]}/notifications`, options.axiosOptions);
    },
    putTriggersNotificationsByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Event/triggers/${options.axiosPathVal[0]}/notifications`, options.axiosData, options.axiosOptions);
    },
    deleteTriggersNotificationsByID(options) {
        return request.delete(`http://${options.ip}/ISAPI/Event/triggers/${options.axiosPathVal[0]}/notifications`, options.axiosOptions);
    },
    getTriggersCapIOT(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/triggersCap/IOT`, options.axiosOptions);
    },
    getTriggersNotificationsAudioAlarm(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/triggers/notifications/AudioAlarm?format=json`, options.axiosOptions);
    },
    putTriggersNotificationsAudioAlarm(options) {
        return request.put(`http://${options.ip}/ISAPI/Event/triggers/notifications/AudioAlarm?format=json`, options.axiosData, options.axiosOptions);
    },
    getTriggersNotificationsAudioAlarmCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/triggers/notifications/AudioAlarm/capabilities?format=json`, options.axiosOptions);
    },
    getTriggersNotificationsWhiteLightAlarm(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/triggers/notifications/whiteLightAlarm?format=json`, options.axiosOptions);
    },
    putTriggersNotificationsWhiteLightAlarm(options) {
        return request.put(`http://${options.ip}/ISAPI/Event/triggers/notifications/whiteLightAlarm?format=json`, options.axiosData, options.axiosOptions);
    },
    getTriggersNotificationsWhiteLightAlarmCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/triggers/notifications/whiteLightAlarm/capabilities?format=json`, options.axiosOptions);
    },
    getTriggersCap(options) {
        return request.get(`http://${options.ip}/ISAPI/Event/triggersCap`, options.axiosOptions);
    },
    // 15.3.26 http://ipAddress:portNo/url
}

export default event;