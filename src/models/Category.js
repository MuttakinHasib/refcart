import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
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
    images: {
      type: Array,
      required: true,
      default: {
        url: 'https://www.cricdiction.com/wp-content/uploads/2019/12/placeholder.png',
      },
    },
    // products: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Product',
    //   },
    // ],
  },
  { timestamps: true }
);

const Category =
  mongoose.models.category || mongoose.model('category', categorySchema);

export default Category;
