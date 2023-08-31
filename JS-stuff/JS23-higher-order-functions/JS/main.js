// Higher Order Functions

// A Higher order function is a function that does at least ONE of the following:
// ** Takes one or more functions as an argument (parameters)
// ** Returns a function as the result

import { posts } from "./posts.js";

// using forEach()

posts.forEach((post)=>{
  console.log(post)
})
console.clear()

// using filter()
const filteredPosts = posts.filter((post)=>{
  return post.userId === 1
})
console.log(filteredPosts)

// using map()
// we can then map over each post (because this is still an array)
const mappedPosts = filteredPosts.map((post)=>{
  return post.id * 10
})
console.log(mappedPosts)

// using reduce()
const reducedPostsValue = mappedPosts.reduce((accumulator, currentValue)=>{
  return accumulator + currentValue
})
console.log(reducedPostsValue)