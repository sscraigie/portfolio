import React from "react";

function Hero() {
  return (
    <>
      <video autoPlay loop muted className="filter brightness-50 absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0">
        <source src="/reading.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative flex items-center  mx-auto w-full h-[50vh] max-w-7xl px-10">
        <div className="">
          <h1 className="z-10 text-6xl font-bold dark:text-white md:text-7xl">
            Blog
          </h1>
          <p className="mt-8 z-10 mx-auto max-w-2xl text-xl dark:text-neutral-200 md:text-3xl">
            A place to talk about software engineer, covering coding techniques, problem-solving approaches, and industry trends.
          </p>
        </div>
      </div>
      <div className="h-[50vh]"></div>
    </>
  )
}

// export default function SpotlightPreview() {
//   return (
//     <div className="bg-grid-white/[0.02] bg-blue[0.96] relative flex h-full w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center">
//       <div className=" relative z-10  mx-auto w-full max-w-7xl  p-4 pt-20 md:pt-0">
//         <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
//           {/* Spotlight <br /> is the new trend. */}
//           Page Coming <br />
//           Soon
//         </h1>
//         <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300"></p>
//       </div>
//     </div>
//   );
// }

import Container from "./_components/container";
import { HeroPost } from "./_components/hero-post";
import { Intro } from "./_components/intro";
import { MoreStories } from "./_components/more-stories";
import { getAllPosts } from "./_lib/api";
import { ThreeDCard } from "./_components/3d-card";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      {/*
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}  
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
      */}
      <Hero />
      <div className="p-2 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        {/*
        <ThreeDCard  
          title="Understanding OpenAPI: A Key Tool for API Development"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGd9WZDSg2SSHB8Hkjcoi2HCGdnTiab_Tj8Q&s"
        />
        <ThreeDCard  
          title="Understanding OpenAPI: A Key Tool for API Development"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGd9WZDSg2SSHB8Hkjcoi2HCGdnTiab_Tj8Q&s"
        />
        <ThreeDCard  
          title="Understanding OpenAPI: A Key Tool for API Development"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGd9WZDSg2SSHB8Hkjcoi2HCGdnTiab_Tj8Q&s"
        />
       */}
        {allPosts.map((post) =>
          <ThreeDCard
            key={post.slug}
            title={post.title}
            image={post.coverImage}
            date={post.date}
            path={`/blog/post/${post.slug}`}
          />
        )}
      </div>
    </main>
  );
}
