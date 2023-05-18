import Order from "../model/Order.js";
export const createOrder = async (req, res) => {
  try {
    const orderAdd = await Order.create(req.body);
    res.status(200).send({
      success: true,
      data: orderAdd,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const getOrders = async (req, res) => {
  try {
    const orderAdd = await Order.find({});
    res.status(200).send({
      success: true,
      data: orderAdd,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const uptadeOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({
      success: true,
      data: order,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
