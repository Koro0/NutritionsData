const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  productSerie: { type: String, required: true },
  caloris: { type: Number, required: true },
  glucides: { type: Number, required: true },
  sucres: { type: Number, required: true },
  matieresGrasses: { type: Number, required: true },
  acideGrasSaturer: { type: Number, required: true },
  fibre: { type: Number, required: true },
  proteines: { type: Number, required: true },
  sel: { type: Number, required: true },
});

module.exports = mongoose.model('Product', productSchemas);
