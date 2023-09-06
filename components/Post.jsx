import { db } from "@/firebase";
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import Moment from "react-moment";

const Post = ({ id, username, userImg, img, caption }) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timesTamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [id]);

  /* sendComment */
  const sendComment = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "posts", id, "comments"), {
      comment,
      username: session?.user.name.split(" ").join("").toLocaleLowerCase(),
      userImg: session?.user.image,
      timesTamp: serverTimestamp(),
    });

    setComment("");
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", id, "likes"),
      (snapshot) => setLikes(snapshot.doc)
    );
    return unsubscribe;
  }, [id]);

  useEffect(() => {
    if (likes && session?.user?.email) {
      const hasLikedPost = likes.findIndex(
        (like) => like.id === session.user.email
      );

      setHasLiked(hasLikedPost !== -1);
    }
  }, [likes, session?.user.email]);

  /* likePostHandler */
  const likePostHandler = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session?.user.email));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session?.user.email), {
        username: session?.user.name.split(" ").join("").toLocaleLowerCase(),
      });
    }
  };

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
      {session && (
        <div className="flex justify-between items-center px-4 pt-4">
          <div className="flex gap-4">
            {hasLiked ? (
              <HeartIconSolid
                onClick={likePostHandler}
                className="post_btn text-rose-500"
              />
            ) : (
              <HeartIcon onClick={likePostHandler} className="post_btn" />
            )}
            <ChatIcon className="post_btn" />
          </div>
          <BookmarkIcon className="post_btn" />
        </div>
      )}
      {/* POST COMMENTS */}
      <p className="p-5 truncate">
        <span className="font-semibold mr-2">{username}</span>
        {caption}
      </p>

      {comments.length > 0 && (
        <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
          {comments.map((comment) => (
            <div className="flex items-center gap-2 mb-2" key={comment.id}>
              <picture>
                <img
                  src={comment.data().userImg}
                  alt="user-image"
                  className="h-7 rounded-full object-cover"
                />
              </picture>
              <p className="font-semibold">{comment.data().username}</p>
              <p className="flex-1 truncate">{comment.data().comment}</p>
              <Moment fromNow>{comment.data().timesTamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}

      {/* POST INPUT BOX */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            type="text"
            placeholder="Enter your comment..."
            className="border-none flex-1 focus:ring-0 placeholder:text-gray-400"
          />
          <button
            onClick={sendComment}
            disabled={!comment.trim()}
            type="submit"
            className="text-blue-400 font-semibold tracking-wide disabled:text-blue-200"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
