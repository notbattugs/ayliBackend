import Service from "../model/Service.js";

export const getAllService = async (req, res) => {
  try {
    const service = await Service.find({})
      .populate("order")
      .populate("extraService");
    res.status(200).send({
      success: true,
      data: service,
    });
  } catch (error) {
    res.status(400).send({
      data: err,
    });
  }
};

export const createServices = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(200).send({
      success: true,
      data: service,
    });
  } catch (error) {
    res.status(400).send({
      data: err,
    });
  }
};
export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      data: service,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const getService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findById(id)
      .populate("order")
      .populate("extraService");
    res.status(200).send({
      success: true,
      data: service,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
