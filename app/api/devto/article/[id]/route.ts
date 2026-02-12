import { NextResponse } from "next/server";

export async function GET(
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json(
      { error: "Article ID is required." },
      { status: 400 },
    );
  }

  const apiUrl = `https://dev.to/api/articles/${id}`;

  try {
    const response = await fetch(apiUrl);

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
