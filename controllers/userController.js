import user from "../models/UserModel.js"



export const updateuser = async(req, res, next) => {
    try {
        const updateduser = await user.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updateduser);
      } catch (err) {
        next(err)
      }
}

export const deleteuser = async(req, res, next) => {
    try {
        await user.findByIdAndDelete(req.params.id);
        res.status(200).json("user has been deleted");
      } catch (err) {
        next(err)
      }
}

export const getuser = async(req, res, next) => {
    try {
        const user = await user.findById(req.params.id);
        res.status(200).json(user);
      } catch (err) {
        next(err)
      }
}

export const getusers = async(req, res, next) => {
    try {
        const users = await user.find();
        res.status(200).json(users);
      } catch (err) {
        next(err)
      }
}
