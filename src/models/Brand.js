import mongoose, { Schema } from 'mongoose';

const brandSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: Object,
      required: true,
      default: {
        url: 'https://www.cricdiction.com/wp-content/uploads/2019/12/placeholder.png',
      },
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'product',
      },
    ],
  },
  { timestamps: true }
);

const Brand = mongoose.models.brand || mongoose.model('brand', brandSchema);

export default Brand;
