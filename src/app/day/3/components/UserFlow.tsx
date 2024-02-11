import React from "react";

// 📮
// Get Challenges
// You'll get a unique User Interface
// design challenge for 100 days
// (sent Monday - Friday)

// 📣
// Share Your Work
// Interpret and then create your own design to share on Dribbble or Twitter with #dailyui

// 🎉
// Earn Rewards
// Randomly earn rewards such as premium design resources, product discount codes, and more!

const steps = [
  {
    emoji: "📮",
    title: "Get Challenges",
    description:
      "You'll get a unique User Interface design challenge for 100 days (sent Monday - Friday)",
  },
  {
    emoji: "📣",
    title: "Share Your Work",
    description:
      "Interpret and then create your own design to share on Dribbble or Twitter with #dailyui",
  },
  {
    emoji: "🎉",
    title: "Earn Rewards",
    description:
      "Randomly earn rewards such as premium design resources, product discount codes, and more!",
  },
];

const Step = ({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) => (
  <div className="flex-center max-w-10 flex flex-col p-5 text-center">
    <h1>{emoji}</h1>
    <h1 className="text-blue-600">{title}</h1>
    <p className="text-blue-300">{description}</p>
  </div>
);

export const UserFlow = () => (
  <div className="max-w-5 flex flex-col p-5 md:flex-row">
    {steps.map((step) => (
      <Step key={step.emoji} {...step} />
    ))}
  </div>
);

export default UserFlow;
