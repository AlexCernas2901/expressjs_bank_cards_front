import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    cvv: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          return /^\d{3}$/.test(value);
        },
        message: 'CVV must have exactly 3 digits'
      }
    },
    expiry: {
      type: Date,
      required: true
    },
    number: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: function (value) {
          return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(value);
        },
        message: 'Number must have the format 1111-2222-3333-4444'
      }
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model('Card', cardSchema);
