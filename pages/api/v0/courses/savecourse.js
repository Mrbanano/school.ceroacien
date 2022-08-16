import User from "../../../../models/User";
import { dbConnection } from "../../../../utils/connectDatabase";

dbConnection();

export default async function handler(req, res) {
  const method = req.method.toUpperCase();
  switch (method) {
    case "POST":
      const { email, course } = req.body;

      const user = await User.findOne({ Email: email });

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      if (user.Courses.includes(course)) {
        return res.status(409).json({
          message: "User already enrolled in this course",
        });
      }

      const addCourse = await User.findOneAndUpdate(
        { Email: email },
        { $push: { Courses: course } },
        {
          new: true,
        }
      );

      res.status(200).json({ addCourse });
      break;
    default:
      res.setHeader("Allow", "POST");
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
