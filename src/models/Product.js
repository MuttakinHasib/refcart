import { generate } from 'shortid';
import mongoose, { Schema } from 'mongoose';

const reviewSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
      default:
        'https://res.cloudinary.com/muttakinhasib/image/upload/v1611336104/avatar/user_qcrqny.svg',
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const productSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
      default: {
        url: 'https://res.cloudinary.com/muttakinhasib/image/upload/v1618421868/products/woocommerce-placeholder-600x600_rnyd9c.png',
      },
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
    // brand: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Brand',
    //   default: null,
    // },
    warranty: {
      type: String,
      required: true,
      default: 'No warranty available',
    },
    // category: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Category',
    //     default: null,
    //   },
    // ],
    category: { type: Array },
    sku: {
      type: String,
      default: generate(),
    },
    sizes: {
      type: Array,
    },
    colors: {
      type: Array,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [reviewSchema],
    numReviews: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
