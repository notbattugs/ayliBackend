import ExtraService from "../model/ExtraService.js";
export const createExtraService = async (req, res) => {
  try {
    const extraservice = await ExtraService.create(req.body);
    res.status(200).send({
      success: true,
      data: extraservice,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
