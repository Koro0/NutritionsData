const Product = require('../models/Product_models');
const fs = require('fs');

exports.createProduct = (req, res, next) => {
  const prodOjt = JSON.parse(req.body.sauce);
  const product = new Product({
    ...prodOjt,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${
      req.file.filename
    }`,
  });
  product
    .save()
    .then(() => res.status(200).json({ message: 'Product enregistrée !' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneProduct = (req, res, next) => {
  Product.findOne;
};

exports.getAllProducts = (req, res, next) => {
  Product.find()
    .then((products) => res.status(200).json(products))
    .catch((err) => res.status({ error: err }));
};
