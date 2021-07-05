import { withAdmin } from '@middleware/withAdmin';
import { withProtect } from '@middleware/withProtect';
import Product from '@models/Product';
import connectDB from '@utils/connectDB';

const handler = async (req, res) => {
  const {
    title,
    images,
    description,
    meta_description,
    brand,
    category,
    warranty,
    sizes,
    colors,
    price,
    countInStock,
  } = req.body;

  try {
    // Connect MongoDB
    await connectDB();

    const product = new Product({
      user: req.user._id,
      title,
      images,
      description,
      meta_description,
      brand,
      category,
      warranty: warranty || undefined,
      sizes,
      colors,
      price,
      countInStock,
    });

    // Save product into database

    const createdProduct = await product.save();
    
    if (createdProduct) {
      return res.status(201).json({ message: 'Product created successfully' });
    } else {
      return res.status(400).json({ error: 'Product creation failed' });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export default withProtect(withAdmin(handler));
