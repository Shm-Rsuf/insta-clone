import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      id: "1",
      username: "shm usuf",
      userImg: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
      img: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=903&q=80",
      caption: "nice picture",
    },
    {
      id: "2",
      username: "sabiha",
      userImg: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
      img: "https://images.unsplash.com/photo-1505635725851-c2cfe9e29112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
      caption: "nice picture",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
