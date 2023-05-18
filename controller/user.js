import User from "../model/User.js";
import jwt from "jsonwebtoken";

export const getAllUser = async (req, res) => {
  try {
    const user = await User.find({}).populate("service").populate("order");
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate("service").populate("order");
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const signin = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    const token = jwt.sign({ ...user }, "secret", { expiresIn: "1d" });
    const passCheck = await user.comparePassword(req.body.password);
    if (!user) {
      res.status(400).send({
        error: "iim hereglegch baihgyu",
      });
    }
    if (!passCheck) {
      return res.status(400).send({
        error: "buruu",
      });
    } else {
      res.status(200).send({
        success: true,
        data: user,
        token: token,
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
