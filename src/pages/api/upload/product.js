import { uploader } from '@utils/uploader';

const handler = async (req, res) => {
  const file = req.files;
  console.log(req);

  try {
    return res.status(201).json({ req });
    const result = await uploader(file, 'refcart');
    if (result) {
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export default handler;
