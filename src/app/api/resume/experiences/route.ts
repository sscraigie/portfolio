import { NextRequest, NextResponse } from "next/server";
import { experiences } from "@/lib/resume-data";
import { createJsonApiResponse } from "@/lib/jsonapi-helpers";

/**
 * GET /api/resume/experiences - Get all work experiences
 */
export async function GET(req: NextRequest) {
  const baseUrl = `${req.nextUrl.protocol}//${req.nextUrl.host}/api/resume/experiences`;
  
  const response = createJsonApiResponse("experiences", experiences, baseUrl);

  return NextResponse.json(response, {
    headers: {
      "Content-Type": "application/vnd.api+json",
    },
  });
}
