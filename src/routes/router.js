const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const bookController = require("../controllers/bookController");
const reviewController = require("../controllers/reviewController");
const { authentication, authorization, reviewAuth } = require("../middleware/middleware");

router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);
router.post("/books", bookController.createBook);
router.get("/books",  bookController.getBooks);
router.get("/books/:bookId",  bookController.getBooksByParams);
router.put("/books/:bookId",  bookController.updateBooks);
router.delete("/books/:bookId",  bookController.deleteBookPathParam);
router.post("/books/:bookId/review", reviewController.createReview);
router.put("/books/:bookId/review/:reviewId",reviewAuth, reviewController.updateReview);
router.delete("/books/:bookId/review/:reviewId", reviewAuth, reviewController.deleteReview);


router.all("/*", function (req, res) {
  return res
    .status(400)
    .send({ status: false, message: "invlalid http request" });
});

module.exports = router;
