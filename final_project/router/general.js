const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/allbooks',function (req, res) {
  // try{ 
  //   const allbooks=books
  //   res.status(200).json({ message: "All Books List retrieved", allbooks });
  // }catch(error){
  //   res.status(500).json({ message: error.message });
  // }
  res.send(JSON.stringify(books,null,4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
//   try{ 
//  let index=req.params.isbn;
//  console.log(index);
//     const bookDetails=books[index];
//     console.log(bookDetails);
//     if(index){
//       res.status(200).json({ message: "According to ISBN Book List retrieved", bookDetails });
//     }else{
//       res.status(404).json({ message: "According to ISBN Book NOT Found" });
//     }
//     }
    
//   catch(error){
//     res.status(500).json({ message: error.message });
//   }
const isbn=req.params.isbn;
res.send(books[isbn])
  
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  const author=req.params.author;
  res.send(books[author])
  // return res.status(300).json({message: "based on author"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
const title=req.params.title;
res.send(books[title])
  
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
