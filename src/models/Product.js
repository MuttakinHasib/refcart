import { generate } from 'shortid';
import mongoose, { Schema } from 'mongoose';

const reviewSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user',
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
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
    title: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
      default: {
        secure_url:
          'https://res.cloudinary.com/muttakinhasib/image/upload/v1618421868/products/woocommerce-placeholder-600x600_rnyd9c.png',
      },
    },
    meta_description: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    materials: {
      type: String,
    },
    weight: {
      type: String,
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: 'brand',
    },
    warranty: {
      type: String,
      required: true,
      default: 'No warranty available',
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'category',
    },
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
    discount: {
      type: Number,
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
  mongoose.models.product || mongoose.model('product', productSchema);

export default Product;
