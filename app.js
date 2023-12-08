const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

router.get((req, res, next) => {
  res.status(201);
  next();
});

router.get((req, res, next) => {
  res.json({ Message: 'Votre requete a bien été recu !' });
  next();
});

router.get((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});
router.get((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});

module.exports = router;
