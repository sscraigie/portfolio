import { NextRequest, NextResponse } from "next/server";
import { education } from "@/lib/resume-data";
import { createJsonApiResponse } from "@/lib/jsonapi-helpers";

/**
 * GET /api/resume/education - Get all education records
 */
export async function GET(req: NextRequest) {
  const baseUrl = `${req.nextUrl.protocol}//${req.nextUrl.host}/api/resume/education`;
  
  const response = createJsonApiResponse("education", education, baseUrl);

  return NextResponse.json(response, {
    headers: {
      "Content-Type": "application/vnd.api+json",
    },
  });
}
