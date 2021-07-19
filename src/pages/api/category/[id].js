import Category from '@models/Category';
import connectDB from '@utils/connectDB';

export default async (req, res) => {
  const { id } = req.query;

  try {
    // Connect MongoDB
    await connectDB();

    const category = await Category.findById(id);
    // If category is not found
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    return res.status(200).json({ category });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
