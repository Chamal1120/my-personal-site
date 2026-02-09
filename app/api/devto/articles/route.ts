import { NextResponse } from "next/server";

const DEVTO_API_KEY = process.env.DEVTO_API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const per_page = searchParams.get("per_page") || "30";

  if (!DEVTO_API_KEY) {
    return NextResponse.json(
      { error: "Dev.to API Key not configured." },
      { status: 500 },
    );
  }

  const apiParams = new URLSearchParams({
    page,
    per_page,
  });

  const apiUrl = `https://dev.to/api/articles/me?${apiParams.toString()}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "api-key": DEVTO_API_KEY,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        return NextResponse.json(
          { error: "Unauthorized", status: 401 },
          { status: 401 },
        );
      }
      const errorText = await response.text();
      return NextResponse.json(
        {
          error: `Dev.to API error: ${response.statusText}`,
          details: errorText,
        },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in Dev.to API handler:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from Dev.to API." },
      { status: 500 },
    );
  }
}
