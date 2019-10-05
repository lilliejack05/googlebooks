const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches /api/book
router.route("/")
  get(booksController.findAll)
  post(booksController.create);

// Matches  /api/books/:id
router.route("/:id")
  get(booksController.findById)
  put(booksController.update)
  delete(booksController.remove);

module.exports = router;