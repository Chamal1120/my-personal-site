import { NextResponse } from "next/server";

const DEVTO_CACHE_TAG = "devto-articles";
const ONE_WEEK_IN_SECONDS = 60 * 60 * 24 * 7;
const FETCH_TIMEOUT_MS = 5000;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!/^\d+$/.test(id)) {
    return NextResponse.json(
      { error: "A valid article ID is required." },
      { status: 400 },
    );
  }

  const apiUrl = `https://dev.to/api/articles/${id}`;

  try {
    const response = await fetch(apiUrl, {
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      next: {
        revalidate: ONE_WEEK_IN_SECONDS,
        tags: [DEVTO_CACHE_TAG],
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: "Article not found", status: 404 },
          { status: 404 },
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
    console.error("Error in Dev.to article API handler:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from Dev.to API." },
      { status: 500 },
    );
  }
}
