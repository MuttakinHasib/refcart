import { withAdmin } from '@middleware/withAdmin';
import { withProtect } from '@middleware/withProtect';

const handler = async (req, res) => {
  const {
    title,
    image,
    description,
    brand,
    category,
    warranty,
    size,
    color,
    price,
    countInStock,
  } = req.body;

  try {
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export default withProtect(withAdmin(handler));
