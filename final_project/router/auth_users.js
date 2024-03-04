const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];
console.log(users);

const isValid = (username)=>{ //returns boolean
  //write code to check is the username is valid
      const userMatches = users.filter((user) => user.username === username);
      return userMatches.length > 0;
  }
  

  const authenticatedUser = (username,password)=>{ //returns boolean
    //write code to check if username and password match the one we have in records.
      const matchingUsers = users.filter((user) => user.username === username && user.password === password);
      return matchingUsers.length > 0;
    }

//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
