var moment = require('moment');

const timeStampsPlugin = (schema) => {
    schema.add({
        created_at: Number,
        updated_at: Number,
    });
    schema.pre('save', (next) => {
        const currentMilliSeconds = moment.now();
        this.updated_at = currentMilliSeconds;

        if(!this.created_at) {
            this.created_at = currentMilliSeconds;
        }
        next();
    });
};

module.exports = timeStampsPlugin;

