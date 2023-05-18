import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Hereglegchiin neree oruulna uu"],
      minlength: [6, "heterhii bogino baina"],
      maxlength: [20, "heterhii urt baina"],
    },
    profileImage: {
      type: String,
    },
    mobileNumber: {
      type: Number,
      required: [true, "Utasnii dugaaraa oruulna uu"],
      length: 8,
    },
    email: {
      type: String,
      required: [true, "Email ee oruulna uu"],
    },
    password: {
      type: String,
      required: [true, "Nuuts ugee oruulna uu"],
      minlength: [6, "heterhii bogino baina"],
      maxlength: [20, "heterhii urt baina"],
    },
    role: {
      type: String,
      enum: ["customer", "admin", "owner"],
      default: "customer",
      required: [true, "please specify user role"],
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.virtual("service", {
  ref: "Service",
  localField: "_id",
  foreignField: "owner_id",
});
UserSchema.virtual("order", {
  ref: "Order",
  localField: "_id",
  foreignField: "user_id",
});

UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", UserSchema);
export default User;
