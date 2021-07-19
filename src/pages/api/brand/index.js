import Brand from '@models/Brand';
import connectDB from '@utils/connectDB';

const handler = async (_req, res) => {
  try {
    // Connect MongoDB
    await connectDB();

    const brands = await Brand.find({});
    return res.status(200).json({ brands });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export default handler;
