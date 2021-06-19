export default async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  res.json({ body: req.body });
};
