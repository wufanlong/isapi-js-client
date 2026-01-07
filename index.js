import AUXInfo from './api/AUXInfo.js'
import ContentMgmt from './api/ContentMgmt.js'
import event from './api/event.js'
import image from './api/image.js'
import PTZCtrl from './api/PTZCtrl.js'
import SDT from './api/SDT.js'
import security from './api/security.js'
import smart from './api/smart.js'
import streaming from './api/streaming.js'
import system from './api/system.js'
import thermal from './api/thermal.js'


const isapiClient = {
    AUXInfo,
    ContentMgmt,
    event,
    image,
    PTZCtrl,
    SDT,
    security,
    smart,
    streaming,
    system,
    thermal
}

export default isapiClient;