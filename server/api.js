const express = require('express');
const router = express.Router();

const { connect } = require('./db');

router.get('/markers', async (req, res) => {
  const db = await connect();
  const markers = await db.collection('markers').find().toArray();
  res.json(markers);
});

module.exports = router;