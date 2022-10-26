const DB_URL = 'mongodb://localhost:27017/utms'
const ALLOWED_VALUES_FOR_PRIORITY = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
}
const ALLOWED_VALUES_FOR_CATEGORY = {
    PRODUCT: 'PRODUCT',
    SUBSCRIPTION: 'SUBSCRIPTION',
}

const ALLOWED_VALUES_FOR_SUBCATEGORY = {
    ENQUIRY: 'ENQUIRY',
    ISSUE: 'ISSUE',
    DEMO: 'DEMO',
    RENEWAL: 'RENEWAL',
    CANCEL: 'CANCEL',
};

const ALLOWED_VALUES_FOR_VENDOR = {
    TRAYA: 'TRAYA',
};

const ALLOWED_SOURCES = {
    IVR: 'IVR',
    CRM_ROLE: 'CRM_ROLE', // update it with desired values upon requirement
};

const ALLOWED_STATUS_VALUES = {
    OPEN: 'OPEN',
    RESOLVED: 'RESOLVED',
    CLOSED: 'CLOSED',
};

module.exports = {
    ALLOWED_SOURCES,
    ALLOWED_STATUS_VALUES,
    ALLOWED_VALUES_FOR_CATEGORY,
    ALLOWED_VALUES_FOR_PRIORITY,
    ALLOWED_VALUES_FOR_SUBCATEGORY,
    ALLOWED_VALUES_FOR_VENDOR,
    DB_URL,
};