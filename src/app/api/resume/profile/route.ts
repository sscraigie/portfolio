import { NextRequest, NextResponse } from "next/server";
import { profile } from "@/lib/resume-data";
import { createJsonApiResponse } from "@/lib/jsonapi-helpers";

/**
 * GET /api/resume/profile - Get profile information
 */
export async function GET(req: NextRequest) {
  const baseUrl = `${req.nextUrl.protocol}//${req.nextUrl.host}/api/resume/profile`;
  
  const response = createJsonApiResponse("profile", profile, baseUrl);

  return NextResponse.json(response, {
    headers: {
      "Content-Type": "application/vnd.api+json",
    },
  });
}
