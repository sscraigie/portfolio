import React from "react";
import {
  IconBrandFacebookFilled,
  IconBrandGithubFilled,
  IconBrandTwitterFilled,
  IconBrandInstagram,
} from "@tabler/icons-react";

export const FooterRow = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="sm:w-1/5">
      <h1 className=" text-3xl font-bold text-blue-600 hover:text-red-300">
        {title}
      </h1>
      <p className="text-blue-300">{description}</p>
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col justify-around sm:flex-row">
        <FooterRow
          title="About Us"
          description="Answers to common questions about Daily UI, how it works, and more."
        />
        <FooterRow
          title="Sponsorship"
          description="Learn how we can help your brand reach a niche designer audience."
        />
        <FooterRow
          title="Be Featured"
          description="Have a design you'd like to share with the world? Share and we might feature it."
        />
        <FooterRow title="Follow Along">
          <div className="flex justify-between">
            <IconBrandFacebookFilled
              size={30}
              className="text-blue-600 hover:text-red-300"
            />
            <IconBrandTwitterFilled
              size={30}
              className="text-blue-600 hover:text-red-300"
            />
            <IconBrandGithubFilled
              size={30}
              className="text-blue-600 hover:text-red-300"
            />
            <IconBrandInstagram
              size={30}
              className="text-blue-600 hover:text-red-300"
            />
          </div>
        </FooterRow>
      </div>
      <div className="text- flex justify-between p-5 text-xs text-gray-300">
        <p>
          © 2023 Daily Dev. All Rights Reserved. Sponsored by
          <b> Spencer Craigie</b>
        </p>
        <p>
          <a className="underline">Terms of Service</a> and{" "}
          <a className="underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
