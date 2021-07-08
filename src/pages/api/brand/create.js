import Brand from '@models/Brand';
import connectDB from '@utils/connectDB';

const handler = async (req, res) => {
  try {
    // Connect MongoDB
    await connectDB();

    const brand = await Brand.create(req.body);

    if (brand) {
      return res
        .status(201)
        .json({ message: 'Added new brand successfully', brand });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export default handler;
