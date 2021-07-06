import { generateActivationToken } from '@utils/generateToken';
import { sendActivationEmail } from '@utils/mailer';

export default async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const activationToken = generateActivationToken({ name, email, password });
    const url = `${process.env.NEXT_PUBLIC_CLIENT_URL}/user/active/${activationToken}`;
    await sendActivationEmail(name, email, url);
    res.json({ message: `Account activation email has sent to ${email}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
