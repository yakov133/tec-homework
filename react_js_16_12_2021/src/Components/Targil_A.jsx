import { useState, useEffect } from "react";

const Targil_A = () => {
  const [posts, setposts] = useState([]);
  const URL = "https://www.reddit.com/r/reactjs.json";
  
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setposts(data.data.children))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {posts.map((post, i) => (
        <p key={i}>{post.data.title}</p>
      ))}
    </div>
  );
};
export default Targil_A;
