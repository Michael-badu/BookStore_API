const express = require("express")
const bookRouter = express.Router()
const {AddBookValidationMw, UpdateBookValidationMw} = require("../validators/books.validator")
const bookController = require ("../controllers/book.controller")

bookRouter.get("/", bookController.getAllBooks)

bookRouter.get("/:id", bookController.getBookByID)

bookRouter.post("/", AddBookValidationMw, bookController.addBook)

bookRouter.put("/:id", UpdateBookValidationMw, bookController.updateBookByID)

bookRouter.delete("/:id", bookController.deleteBookByID)

module.exports = bookRouter

/*
All the above can be more refined as below

const bookRouter = require('express').Router() -- combines line 1 & 2 into one line of code

const {AddBookValidationMw, UpdateBookValidationMw} = require("../validators/books.validator")
const bookController = require ("../controllers/book.controller")

bookRouter.route("/")
    .get(bookController.getAllBooks)
    .post(AddBookValidationMw, bookController.addBook)

bookRouter.route("/:id")
    .get(bookController.getBookByID)
    .put(UpdateBookValidationMw, bookController.updateBookByID)
    .delete(bookController.deleteBookByID)

module.exports = bookRouter
*/