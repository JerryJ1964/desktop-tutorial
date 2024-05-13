import express from 'express'
import getBooks from '../services/books/getBooks.js'
import createBook from '../services/books/createBook.js'
import getBookById from '../services/books/getBookById.js'
import updateBookById from '../services/books/updateBookById.js'
import deleteBook from '../services/books/deleteBook.js'
import notFoundErrorHandler from '../middleware/notFoundErrorHandler.js'
import authMiddleware from '../middleware/auth.js';

const router = express.Router()

router.get(
  '/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params
      const book = await getBookById(id)

      res.status(200).json(book)
    } catch (error) {
      next(error)
    }
  },
  notFoundErrorHandler
)

router.get('/', async (req, res) => {
  const { genre, available } = req.query
  const books = await getBooks(genre, available)
  res.status(200).json(books)
})

//router.get('/', (req, res) => {
//try {
//const { genre, available } = req.query
//const books = getBooks(genre, available)
//res.status(200).json(books)
//} catch (error) {
//console.error(error)
//res.status(500).send('Something went wrong while getting list of books!')
//}
//})authMiddleware,

router.post('/', authMiddleware,
  async (req, res) => {
    const { title, author, isbn, pages, available, genre } = req.body
    const newBook = await createBook(title, author, isbn, pages, available, genre)
    res.status(201).json(newBook)
  })
//old code
//router.post('/', (req, res) => {
//try {
//const { title, author, isbn, pages, available, genre } = req.body
//const newBook = createBook(title, author, isbn, pages, available, genre)
//res.status(201).json(newBook)
//} catch (error) {
//console.error(error)
//res.status(500).send('Something went wrong while creating new book!')
//}
//})
//authMiddleware,
router.get('/:id', authMiddleware,
  async (req, res, next) => {
    //try {
    const { id } = req.params
    const book = await getBookById(id)

    res.status(200).json(book)
    //} catch (error) {
    //next(error)
    //}
  },
  notFoundErrorHandler
)

//router.get('/:id', (req, res) => {
//try {
//const { id } = req.params
//const book = getBookById(id)

//if (!book) {
//res.status(404).send(`Book with id ${id} was not found!`)
//} else {
//res.status(200).json(book)
//}
//} catch (error) {
//console.error(error)
//res.status(500).send('Something went wrong while getting book by id!')
//}
//})

router.put('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params
      const { title, author, isbn, pages, available, genre } = req.body
      const updatedBook = await updateBookById(
        id,
        title,
        author,
        isbn,
        pages,
        available,
        genre
      )
      res.status(200).json(updatedBook)
    } catch (error) {
      next(error)
    }
  },
  notFoundErrorHandler
)


router.delete(
  '/:id',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { id } = req.params
      const deletedBookId = await deleteBook(id)


      res.status(200).json({
        message: `Book with id ${deletedBookId} was deleted!`
      })
    } catch (error) {
      next(error)
    }
  },
  notFoundErrorHandler
)

//router.delete('/:id', (req, res) => {
//try {
//const { id } = req.params
//const deletedBookId = deleteBook(id)

//if (!deletedBookId) {
//res.status(404).send(`Book with id ${id} was not found!`)
//} else {
//res.status(200).json({
//message: `Book with id ${deletedBookId} was deleted!`
//})
//}
//} catch (error) {
//console.error(error)
//res.status(500).send('Something went wrong while deleting book by id!')
//}
//})

export default router
