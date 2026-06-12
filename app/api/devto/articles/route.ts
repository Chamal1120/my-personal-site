import { NextResponse } from "next/server";

const DEVTO_API_KEY = process.env.DEVTO_API_KEY;
const DEVTO_CACHE_TAG = "devto-articles";
const ONE_WEEK_IN_SECONDS = 60 * 60 * 24 * 7;

const getPositiveInteger = (
  value: string | null,
  fallback: number,
  maximum?: number,
) => {
  const parsed = Number.parseInt(value ?? "", 10);

  if (!Number.isInteger(parsed) || parsed < 1) {
    return fallback;
  }

  return maximum ? Math.min(parsed, maximum) : parsed;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = getPositiveInteger(searchParams.get("page"), 1);
  const perPage = getPositiveInteger(searchParams.get("per_page"), 30, 100);

  if (!DEVTO_API_KEY) {
    return NextResponse.json(
      { error: "Dev.to API Key not configured." },
      { status: 500 },
    );
  }

  const apiParams = new URLSearchParams({
    page: page.toString(),
    per_page: perPage.toString(),
  });

  const apiUrl = `https://dev.to/api/articles/me?${apiParams.toString()}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "api-key": DEVTO_API_KEY,
        "Content-Type": "application/json",
      },
      next: {
        revalidate: ONE_WEEK_IN_SECONDS,
        tags: [DEVTO_CACHE_TAG],
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
