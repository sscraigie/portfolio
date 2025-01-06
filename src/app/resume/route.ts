import { NextRequest, NextResponse } from "next/server";

const resume = {
  experience: [
    {
      title: "Software Engineer",
      company: "Lightcast",
      location: "Moscow, Idaho",
      startDate: "2022-07",
      endDate: null,
      description: "",
      highlights: [],
    },
    {
      title: "API Solutions Architect",
      company: "Lightcast",
      location: "Moscow, Idaho",
      startDate: "2021-11",
      endDate: "2022-07",
      description: "",
      highlights: [],
    },
    {
      title: "Technical Assistant",
      company: "Washington State University",
      location: "Pullman, Washington",
      startDate: "2019-09",
      endDate: "2020-04",
      description:
        "Work with the Psychology Department to ensure all technology is in working order and develop resources for experiments.",
      highlights: [
        "Saved the department over $14,000 in computer upgrades in the first semester of implementation from developing a TPM alternative.",
      ],
    },
    {
      title: "Network Administrator",
      company: "Rodeo Internet",
      location: "Clarkston, Washington",
      startDate: "2018-05",
      endDate: "2018-08",
      description:
        "Managed the ISP network for the Lewiston Clarkston valley and developed customer accounts. ",
      highlights: [
        "Took on a local network installation project that brought in over $12,000 in revenue.",
      ],
    },
  ],
  education: {},
  projects: {},
  certifications: {},
};

export async function GET(req: Request) {
  return NextResponse.json(resume);
}
export async function POST(req: Request) {
  const json = await req.json();
  return NextResponse.json(json);
}
