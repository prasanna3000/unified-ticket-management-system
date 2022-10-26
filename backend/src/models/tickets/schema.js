var mongoose = require('mongoose');
var timeStampsPlugin = require('../../utils/database/timeStampsPlugin');
const {
    ALLOWED_VALUES_FOR_PRIORITY,
    ALLOWED_VALUES_FOR_CATEGORY,
    ALLOWED_VALUES_FOR_SUBCATEGORY,
    ALLOWED_VALUES_FOR_VENDOR,
    ALLOWED_SOURCES,
    ALLOWED_STATUS_VALUES,
} = require('../../config/database/values');

const sourceMetaData = {
    title: String,
    description: String,
    order_id: String,
};

const userObject = {
    id: String,
    email: String,
    name: String,
};

const comment = {
    id: String,
    type: String,
    description: String,
    created_at: Number,
    author: userObject,
}

const historyObject = {
    id: String,
    event: String,
    author: userObject,
    created_at: Number,
};

const schema = mongoose.Schema({
    id: {
        type: String,
        require: true,
        index: true,
    },
    case_id: {
        type: String,
        require: true,
    },
    priority: {
        type: String,
        default: Object.keys(ALLOWED_VALUES_FOR_PRIORITY)[2],
        enum: ALLOWED_VALUES_FOR_PRIORITY,
    },
    category: {
        type: String,
        enum: Object.keys(ALLOWED_VALUES_FOR_CATEGORY),
    },
    sub_category: {
        type: String,
        enum: Object.keys(ALLOWED_VALUES_FOR_SUBCATEGORY),
    },
    source: {
        type: String,
        enum: Object.keys(ALLOWED_SOURCES),
    },
    source_meta: sourceMetaData,
    provider: {
        type: String,
        enum: Object.keys(ALLOWED_VALUES_FOR_VENDOR),
    },
    provider_meta: {
        id: String,
    },
    comments: [comment],
    status: {
        type: String,
        enum: Object.keys(ALLOWED_STATUS_VALUES),
        default: Object.keys(ALLOWED_STATUS_VALUES)[0],
    },
    author: userObject,
    acl: [userObject],
    history: [historyObject],
}, {
    strict: true,
});

schema.plugin(timeStampsPlugin, {});

module.exports = schema;