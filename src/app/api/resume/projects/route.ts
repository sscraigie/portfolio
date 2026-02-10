import { NextRequest, NextResponse } from "next/server";
import { projects } from "@/lib/resume-data";
import { createJsonApiResponse } from "@/lib/jsonapi-helpers";

/**
 * GET /api/resume/projects - Get all projects
 */
export async function GET(req: NextRequest) {
  const baseUrl = `${req.nextUrl.protocol}//${req.nextUrl.host}/api/resume/projects`;
  
  const response = createJsonApiResponse("projects", projects, baseUrl);

  return NextResponse.json(response, {
    headers: {
      "Content-Type": "application/vnd.api+json",
    },
  });
}
