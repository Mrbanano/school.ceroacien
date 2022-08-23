import User from "../../../../models/User";
import { dbConnection } from "../../../../utils/connectDatabase";

dbConnection();

export default async function handler(req, res) {
  const method = req.method;
  switch (method) {
    case "POST":
      const { user } = req.body;
      try {
        const Founduser = await User.findOne({ Email: user.Email });
        if (Founduser) {
          console.log("user already exist");
          return res.status(200).json({
            message: "User already exists",
          });
        }
        const newUser = await new User({
          Email: user.email,
          Name: user.name,
          Picture: user.image,
          Courses: ["prod_MGtPRT6Ot4HsJT"],
        }).save();
        console.log("new user created");
        return res.status(200).json({
          message: "User created successfully",
          user: newUser,
        });
      } catch (error) {
        res.status(500).json({
          status: "error",
          message: error.message,
        });
      }
      break;
    default:
      res.setHeader("Allow", method);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
