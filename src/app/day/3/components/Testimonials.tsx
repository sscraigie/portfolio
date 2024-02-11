import React from "react";
import Image from "next/image";

const testimonies = [
  {
    image: "person1.png",
    name: "James Hsu",
    title: "UI Designer, Disney",
    testimony:
      '"Daily UI is awesome because it gives me an opportunity to flex my creative muscle without a whole lot of limitation."',
  },
  //     "It gave me an opportunity to improve my time management while honing in on my interface motion design craft."
  // Derek Torsani
  // Senior Designer, Oracle
  {
    image: "person2.jpg",
    name: "Derek Torsani",
    title: "Senior Designer, Oracle",
    testimony:
      '"It gave me an opportunity to improve my time management while honing in on my interface motion design craft."',
  },

  {
    image: "person3.jpg",
    name: "Kelsea Everett",
    title: "Design Manager, Netflix",
    testimony:
      '"Love using the Daily UI challenge to experiment. The prompts are great to test out interactions, play with visual styles, etc."',
  },

  {
    image: "person4.jpg",
    name: "Francesco Paradiso",
    title: "Freelance Designer",
    testimony:
      '"I was able to practice, research, discover, improve, experiment, play and, of course, work hard. Thank you Daily UI"',
  },
];

export const Testimonial = ({
  image,
  name,
  title,
  testimony,
}: {
  image: string;
  name: string;
  title: string;
  testimony: string;
}) => {
  return (
    <div className="flex flex-col items-center p-5 text-center  ">
      <Image
        className="rounded-full grayscale"
        src={`/d3/people/${image}`}
        alt="hero"
        width={150}
        height={150}
        layout="intrinsic"
      />
      <p className="text-blue-300">{testimony}</p>
      <b className="text-blue-600">{name}</b>
      <p className="text-blue-600">{title}</p>
    </div>
  );
};

export const Testimonials = () => (
  <div className="flex flex-col justify-around p-10 md:flex-row">
    {testimonies.map((testimony) => (
      <Testimonial key={testimony.name} {...testimony} />
    ))}
  </div>
);

export default Testimonials;
