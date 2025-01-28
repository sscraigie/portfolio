import React from "react";
export function Hero() {
  return (
<>
  <div className="relative left-0 top-0 mx-auto w-full h-screen max-w-7xl px-4  py-20 md:py-40">
      <h1 className="text-2xl font-bold dark:text-white md:text-7xl">
        Blog  
      </h1>
      <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
  A place to talk about software engineer, covering coding techniques, problem-solving approaches, and industry trends.
      </p>
    </div>
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
      <div className="flex col-2 justify-between">
        <ThreeDCard  
          title="Understanding OpenAPI: A Key Tool for API Development"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGd9WZDSg2SSHB8Hkjcoi2HCGdnTiab_Tj8Q&s"
        />
      </div>
    </main>
  );
}
