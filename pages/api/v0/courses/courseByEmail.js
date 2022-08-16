import User from "../../../../models/User";
import { dbConnection } from "../../../../utils/connectDatabase";

dbConnection();

export default async function handler(req, res) {
  const method = req.method.toUpperCase();
  switch (method) {
    case "POST":
      const { email } = req.body;

      const user = await User.findOne({ Email: email });

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      res
        .status(200)
        .json({ Course: user.Courses, Bootcamp: user.Bootcamp || [] });

      break;
    default:
      res.setHeader("Allow", "POST");
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
