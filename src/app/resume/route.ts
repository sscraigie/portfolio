import { NextRequest, NextResponse } from "next/server";
import {
  profile,
  experiences,
  education,
  skills,
  projects,
  certifications,
} from "@/lib/resume-data";
import { createCompoundJsonApiResponse } from "@/lib/jsonapi-helpers";

/**
 * Resume API endpoint following JSON:API standard
 * GET /resume - Returns complete resume data
 */
export async function GET(req: NextRequest) {
  const baseUrl = `${req.nextUrl.protocol}//${req.nextUrl.host}/resume`;

  // Create a compound document with all resume resources
  const response = createCompoundJsonApiResponse(
    {
      profile: [profile],
      experiences,
      education,
      skills,
      projects,
      certifications,
    },
    baseUrl,
  );

  return NextResponse.json(response, {
    headers: {
      "Content-Type": "application/vnd.api+json",
    },
  });
}
