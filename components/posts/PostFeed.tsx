import React from "react";
import usePosts from "../../hooks/usePosts";
import PostItem from "./PostItem";

interface PostFeedProps {
  userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);

  return (
    <div>
      <>
        {posts?.map((post: Record<string, any>) => (
          <PostItem userId={userId} key={post.id} data={post} />
        ))}
      </>
    </div>
  );
};

export default PostFeed;
