// API FUNCTIONS
// using https://jsonplaceholder.typicode.com/ to get json data.
const URLJSON = "https://jsonplaceholder.typicode.com/posts";

// function using axios package
function getPostsAxios(url, postid) {
  axios
    .get(`${url}/${postid}`)
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

// function using native vanilla javascript method called fetch()
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
function getPostsFetch(url, postid) {
  fetch(`${url}/${postid}`)
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

// DOM
const searchBoxId = document.getElementById("search-box");
const btnSearchId = document.getElementById("btn-search");

// Get ALL posts
btnSearchId.addEventListener("click", () => {
  // getPostsAxios(URLJSON, searchBoxId.value);
  getPostsFetch(URLJSON, searchBoxId.value);
});
