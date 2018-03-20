import getProjection from "../utility/projections";

const session = ({ sessions }, args, { mongo: { Sessions } }, fieldASTs) => {
  const projection = getProjection(fieldASTs);
  return new Promise((resolve, reject) => {
    Sessions.find({ _id: { $in: sessions } })
      .select(projection)
      .exec()
      .then(r => resolve(r))
      .catch(err => reject(err));
  });
};

module.exports = {
  session
};
