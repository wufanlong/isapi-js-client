import request from '../utils/request.js';
import rawRequest from '../utils/rawRequest.js';

const security = {
    getAdminAccesses(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/adminAccesses`, options.axiosOptions);
    },
    putAdminAccesses(options) {
        return request.put(`http://${options.ip}/ISAPI/Security/adminAccesses`, options.axiosData, options.axiosOptions)
    },
    getAdminAccessesByID(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/adminAccesses/${options.axiosPathVal[0]}`, options.axiosOptions);
    },
    putAdminAccessesByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Security/adminAccesses/${options.axiosPathVal[0]}`, options.axiosData, options.axiosOptions)
    },
    getAdminAccessesCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/adminAccesses/capabilities`, options.axiosOptions);
    },
    getAdvanced(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/advanced?format=json`, options.axiosOptions); 
    },
    putAdvanced(options) {
        return request.put(`http://${options.ip}/ISAPI/Security/advanced?format=json`, options.axiosData, options.axiosOptions); 
    },
    getCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/capabilities`, options.axiosOptions);
    },
    getCertificateSelectByFunctinName(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/certificate/select/${options.axiosPathVal[0]}?format=json`, options.axiosOptions); 
    },
    putCertificateSelectByFunctinName(options) {
        return request.put(`http://${options.ip}/ISAPI/Security/certificate/select/${options.axiosPathVal[0]}?format=json`, options.axiosData, options.axiosOptions); 
    },
    getCertificateSelectCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/certificate/select/capabilities?format=json`, options.axiosOptions); 
    },
    postChallenge(options) {
        return rawRequest.post(`http://${options.ip}/ISAPI/Security/challenge`, options.axiosData, options.axiosOptions)
    },
    getCommuModeCapablities(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/CommuMode/capabilities?format=json`, options.axiosOptions); 
    },
    getCommuMode(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/CommuMode?format=json`, options.axiosOptions); 
    },
    putCommuMode(options) {
        return request.put(`http://${options.ip}/ISAPI/Security/CommuMode?format=json`, options.axiosData, options.axiosOptions); 
    },
    putDeviceCertificate(options) {
        return request.put(`http://${options.ip}/ISAPI/Security/deviceCertificate`, options.axiosData, options.axiosOptions); 
    },
    getDeviceCertificateCapabilities(options) {
        return request.put(`http://${options.ip}/ISAPI/Security/deviceCertificate/capabilities?format=json`, options.axiosData, options.axiosOptions); 
    },
    getDeviceCertificateCertificateRevocationCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/deviceCertificate/certificateRevocation/capabilities?format=json`, options.axiosOptions); 
    },
    getDeviceCertificateCertificateRevocation(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/deviceCertificate/certificateRevocation?format=json`, options.axiosOptions); 
    },
    putDeviceCertificateCertificateRevocation(options) {
        return request.put(`http://${options.ip}/ISAPI/Security/deviceCertificate/certificateRevocation?format=json`, options.axiosData, options.axiosOptions); 
    },
    getDeviceCertificateCertificatesByCustomID(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/deviceCertificate/certificates/${options.axiosPathVal[0]}?format=json`, options.axiosOptions); 
    },
    deleteDeviceCertificateCertificatesByCustomID(options) {
        return request.delete(`http://${options.ip}/ISAPI/Security/deviceCertificate/certificates/${options.axiosPathVal[0]}?format=json`, options.axiosOptions); 
    },
    deleteDeviceCertificateCertificatesByID(options) {
        return request.delete(`http://${options.ip}/ISAPI/Security/deviceCertificate/certificates/${options.axiosPathVal[0]}?format=json`, options.axiosOptions); 
    },
    putDeviceCertificateCertificatesRecreateByID(options) {
        return request.put(`http://${options.ip}/ISAPI/Security/deviceCertificate/certificates/${options.axiosPathVal[0]}/recreate?format=json`, options.axiosData, options.axiosOptions); 
    },
    getUserCheck(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/userCheck`, options.axiosOptions);
    },
    getCapabilities(options) {
        return request.get(`http://${options.ip}/ISAPI/Security/capabilities`, options.axiosOptions);
    },

}

export default security;