const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 1200
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MM/DD/YYYY [at] mm:hh')
    }
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);