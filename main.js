// API FUNCTIONS
const URLJSON = "https://jsonplaceholder.typicode.com/posts";

function getPosts(url, postid) {
  axios
    .get(`${url}/${postid}`)
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

// DOM
const searchBoxId = document.getElementById("search-box");
const btnSearchId = document.getElementById("btn-search");

// Get ALL posts
btnSearchId.addEventListener("click", () => {
  getPosts(URLJSON, searchBoxId.value);
});
