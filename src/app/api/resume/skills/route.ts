import { NextRequest, NextResponse } from "next/server";
import { skills } from "@/lib/resume-data";
import { createJsonApiResponse } from "@/lib/jsonapi-helpers";

/**
 * GET /api/resume/skills - Get all skills
 */
export async function GET(req: NextRequest) {
  const baseUrl = `${req.nextUrl.protocol}//${req.nextUrl.host}/api/resume/skills`;
  
  const response = createJsonApiResponse("skills", skills, baseUrl);

  return NextResponse.json(response, {
    headers: {
      "Content-Type": "application/vnd.api+json",
    },
  });
}
