export const checkAdminRole = async (req, res, next) => {
  const role = req.body.role;
  if (role === "admin") {
    next();
  } else {
    console.log("aldaa");
  }
};
export const checkOwnerRole = async (req, res, next) => {
  const role = req.body.role;
  if (role === "owner") {
    next();
  } else {
    console.log("aldaa");
  }
};
