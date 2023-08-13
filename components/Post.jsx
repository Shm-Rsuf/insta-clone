import { DotsHorizontalIcon } from "@heroicons/react/solid";

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
    </div>
  );
};

export default Post;
