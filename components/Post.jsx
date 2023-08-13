import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
} from "@heroicons/react/solid";

const Post = ({ post }) => {
  const { id, username, userImg, img, caption } = post;
  return (
    <div className="bg-white my-8 border rounded-md">
      {/* POST HEADER */}
      <div className="flex items-center p-5">
        <picture>
          <img
            src={userImg}
            alt={username}
            className="w-12 h-12 rounded-full object-cover p-1 border mr-2"
          />
        </picture>
        <h3 className="font-semibold flex-1">{username}</h3>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* POST IMAGE */}
      <picture>
        <img src={img} alt={username} className="object-cover w-full" />
      </picture>
      {/* POST BUTTONS */}
      <div className="flex justify-between items-center px-4 pt-4">
        <div className="flex gap-4">
          <HeartIcon className="post_btn" />
          <ChatIcon className="post_btn" />
        </div>
        <BookmarkIcon className="post_btn" />
      </div>
    </div>
  );
};

export default Post;
