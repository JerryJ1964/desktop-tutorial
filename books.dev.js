"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _getBooks = _interopRequireDefault(require("../services/books/getBooks.js"));

var _createBook = _interopRequireDefault(require("../services/books/createBook.js"));

var _getBookById = _interopRequireDefault(require("../services/books/getBookById.js"));

var _updateBookById = _interopRequireDefault(require("../services/books/updateBookById.js"));

var _deleteBook = _interopRequireDefault(require("../services/books/deleteBook.js"));

var _advancedAuth = _interopRequireDefault(require("../middleware/advancedAuth.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', function (req, res) {
  try {
    var _req$query = req.query,
        genre = _req$query.genre,
        available = _req$query.available;
    var books = (0, _getBooks["default"])(genre, available);
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while getting list of books!');
  }
});
router.post('/', _advancedAuth["default"], function (req, res) {
  // try {
  var _req$body = req.body,
      title = _req$body.title,
      author = _req$body.author,
      isbn = _req$body.isbn,
      pages = _req$body.pages,
      available = _req$body.available,
      genre = _req$body.genre;
  var newBook = (0, _createBook["default"])(title, author, isbn, pages, available, genre);
  res.status(201).json(newBook); // } catch (error) {
  //   console.error(error);
  //   res.status(500).send('Something went wrong while creating new book!');
  // }
}); 
router.post('/', authMiddleware, (req, res) => {
try {
const { title, author, isbn, pages, available, genre } = req.body;
const newBook = createBook(title, author, isbn, pages, available, genre);
res.status(201).json(newBook);
} catch (error) {
console.error(error);
res.status(500).send('Something went wrong while creating new book!');
}
});

router.get('/:id', function (req, res) {
  try {
    var id = req.params.id;
    var book = (0, _getBookById["default"])(id);

    if (!book) {
      res.status(404).send("Book with id ".concat(id, " was not found!"));
    } else {
      res.status(200).json(book);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while getting book by id!');
  }
});
router.put('/:id', _advancedAuth["default"], function (req, res) {
  try {
    var id = req.params.id;
    var _req$body2 = req.body,
        title = _req$body2.title,
        author = _req$body2.author,
        isbn = _req$body2.isbn,
        pages = _req$body2.pages,
        available = _req$body2.available,
        genre = _req$body2.genre;
    var updatedBook = (0, _updateBookById["default"])(id, title, author, isbn, pages, available, genre);
    res.status(200).json(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while updating book by id!');
  }
});
router["delete"]('/:id', _advancedAuth["default"], function (req, res) {
  try {
    var id = req.params.id;
    var deletedBookId = (0, _deleteBook["default"])(id);

    if (!deletedBookId) {
      res.status(404).send("Book with id ".concat(id, " was not found!"));
    } else {
      res.status(200).json({
        message: "Book with id ".concat(deletedBookId, " was deleted!")
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong while deleting book by id!');
  }
});
var _default = router;
exports["default"] = _default;