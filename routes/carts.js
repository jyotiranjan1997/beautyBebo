const express = require("express");
const {
  addToCart,
  updateCart,
  deleteFromCart,
  getUserCart,
} = require("../controllers/cartController");
const {
  CartMiddleWare,
} = require("../middlewares/verifyToken");

const cartRoutes = express.Router();

/* ADD TO CART */
cartRoutes.post("/add", CartMiddleWare, addToCart);

/* UPDATE */
cartRoutes.patch("/:id", CartMiddleWare, updateCart);

/* DELETE */
cartRoutes.delete("/:id", CartMiddleWare, deleteFromCart);

/* GET USER CART BY USERID */
cartRoutes.get("/", CartMiddleWare, getUserCart);

module.exports = cartRoutes;
