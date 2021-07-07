import Product from '@models/Product';
import connectDB from '@utils/connectDB';

const handler = async (req, res) => {
  const { id } = req.query;
  if (req.method === 'PUT') {
    try {
      // Connect MongoDB
      await connectDB();

      const updated = await Product.findByIdAndUpdate(id, req.body);

      if (updated) {
        return res
          .status(200)
          .json({ message: 'Product updated successfully' });
      } else {
        return res.status(400).json({ error: 'Something went wrong' });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
