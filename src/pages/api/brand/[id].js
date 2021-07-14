import Brand from '@models/Brand';
import connectDB from '@utils/connectDB';

export default async (req, res) => {
  const { id } = req.query;

  try {
    // Connect MongoDB
    await connectDB();

    const brand = await Brand.findById(id).populate('product');
    // If brand is not found
    if (!brand) {
      return res.status(404).json({ error: 'Product not found' });
    }

    return res.status(200).json({ brand });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
