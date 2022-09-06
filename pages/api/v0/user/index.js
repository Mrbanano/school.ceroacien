import User from "../../../../models/User";
import { dbConnection } from "../../../../utils/connectDatabase";

dbConnection();

export default async function handler(req, res) {
  const method = req.method;
  switch (method) {
    case "POST":
      const { user } = req.body;
      try {
        const Founduser = await User.findOne({ Email: user.email });

        if (Founduser && Founduser.Rol !== "out") {
          return res.status(200).json({
            message: "Auth",
            user: Founduser,
          });
        }

        if (Founduser && Founduser.Rol === "out") {
          return res.status(200).json({
            message: "NoAuth",
            Error: 1,
          });
        }

        if (!Founduser) {
          const newUser = await new User({
            Email: user.email,
            Name: user.name,
            Picture: user.image,
            Rol: "out",
          }).save();

          return res.status(200).json({
            message: "NoAuth",
            Error: 1,
          });
        }
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
