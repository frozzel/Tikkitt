const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const projectSchema = new Schema({
  projectText: {
    type: String,
    required: 'You need to leave a description!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  projectAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  projectName: {
    type: String,
    required: false,
    trim: true,
  },
  teamMember: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  tikkits: [
    {
      tikkitText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      tikkitAuthor: {
        type: String,
        required: true,
      },
      reviewedBy: {
        type: String,
        required: false,
      },
      completeReview: {
        type: Boolean,
        default: false,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      }, 
    },
  ],
});

const Project = model('Project', projectSchema);

module.exports = Project;
