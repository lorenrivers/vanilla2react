//event listener
<button>Click me</button>;

const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("Button clicked!");
});

//displaying data
<div id="app"></div>;
const app = document.querySelector("#app");
app.innerHTML = "<h1>Hello World!</h1>";

//conditional rendering
<div id="app"></div>;

const app = document.querySelector("#app");

const isLoggedIn = false;

if (isLoggedIn) {
  app.innerHTML = "<h1>Welcome back</h1>";
} else {
  app.innerHTML = "<h1>Please log in</h1>";
}

//fetching data
<div id="app"></div>;
const app = document.querySelector("#app");

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return posts;
}

async function main() {
  const posts = await getPosts();
  app.innerHTML = `<ul>
    ${posts.map((post) => `<li>${post.title}</li>`).join("")}
    </ul>
    `;
}

main();
