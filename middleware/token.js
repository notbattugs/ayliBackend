import jwt from "jsonwebtoken";

export const checkToken = (req, res, next) => {
  const token = req.body.token;
  jwt.verify(token, "secret", (err, result) => {
    if (err) {
      console.log("aldaa");
      res.status(400).send({
        data: err,
      });
    } else {
      return next();
    }
  });
};
