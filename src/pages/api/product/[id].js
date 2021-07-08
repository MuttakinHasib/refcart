import Product from '@models/Product';
import connectDB from '@utils/connectDB';

export default async (req, res) => {
  const { id } = req.query;

  try {
    // Connect MongoDB
    await connectDB();

    const product = await Product.findById(id)
      .populate('brand')
      .populate('category');
    // If product is not found
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    return res.status(200).json({ product });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
