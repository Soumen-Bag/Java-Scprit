// Web storage API - allows us to store & read data in browser
// Web storage API - localStorage, sessionStorage

// localStorage - store, read, update and remove data
// no expiry date: data never gets lost even if you close the browser

// localStorage store data as key value pair - string

//seItem(key,value)
localStorage.setItem("name","Soumen Bag");
localStorage.setItem("password","01234");

//getItem(key)
const userName=localStorage.getItem("name");
const userPassword=localStorage.getItem("password");
console.log(userName);
console.log(userPassword);