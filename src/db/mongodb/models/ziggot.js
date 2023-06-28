'use strict';

module.exports = (db, Mongoose) => {
  //define schema
  const Ziggot = new Mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
  }, {
    collection: 'ziggot',
    timestamps: true,
  });
  
  //define model
  const Model = db.model("Ziggot", Ziggot);
  
  return Model
}