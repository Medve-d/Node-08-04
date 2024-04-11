import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  const header = req.header("Authorization");
  console.log(header)
  // token bearer
  const array = header.split(" ");
  if (array.length !== 2) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = array[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  let decodedToken;
  // faire des try catch pour gerer les erreurs
  decodedToken = jwt.verify(token, process.env.JWT_SECRET);

  req.user = decodedToken;
  next();
}
