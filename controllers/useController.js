const model = require("./../models/model");

exports.NavData = (req, res) => {
  model.navigation.find((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
};
