export default async function handler(req, res) {
  const method = req.method;
  switch (method) {
    case 'GET':
      const email = req.query.email;
      res.status(200).json({ email });
      break;
    default:
      res.setHeader('Allow', method);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
