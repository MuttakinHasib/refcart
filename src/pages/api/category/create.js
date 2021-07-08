import Category from '@models/Category';
import connectDB from '@utils/connectDB';

const handler = async (req, res) => {
  try {
    // Connect MongoDB
    await connectDB();

    const category = await Category.create(req.body);

    if (category) {
      return res
        .status(201)
        .json({ message: 'Added new category successfully', category });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export default handler;
