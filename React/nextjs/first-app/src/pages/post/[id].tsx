import React from "react";

function Post(props: { post: { name: string } }) {
  return <div>{props.post.name}</div>;
}

export default Post;

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "post-1" } }, { params: { id: "post-2" } }],
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  console.log(context);
  return {
    // Passed to the page component as props
    props: { post: { name: "Post 1" } },
  };
}
