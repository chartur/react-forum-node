import express from "express";
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    gago: 'gago'
  })
});

export default router;

