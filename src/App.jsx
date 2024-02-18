import { useEffect } from "react";

export default function app() {
  // function handleClick() {
  //   alert("Button clicked!");
  // }

  // const isLoggedIn = true;
  // if (isLoggedIn) {
  //   return <h1>Welcome Back</h1>;
  // } else {
  //   return <h1>Please log in</h1>;
  // }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.json();

      setPosts(posts);
    }

    getPosts();
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

// return (
//   <div>
//     <button onClick={handleClick}>Click me</button>;<h1>Hello World</h1>

//   </div>
// );
// }
