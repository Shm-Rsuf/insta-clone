const Post = ({ post }) => {
  const { id, username, userImg, img, caption } = post;
  return (
    <div>
      <p>{caption}</p>
    </div>
  );
};

export default Post;
