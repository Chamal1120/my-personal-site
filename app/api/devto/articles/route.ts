import { NextResponse } from "next/server"

const DEVTO_USERNAME = process.env.DEVTO_USERNAME ?? "chamal1120"
const DEVTO_CACHE_TAG = "devto-articles"
const ONE_WEEK_IN_SECONDS = 60 * 60 * 24 * 7
const FETCH_TIMEOUT_MS = 5000

const getPositiveInteger = (
    value: string | null,
    fallback: number,
    maximum?: number
) => {
    const parsed = Number.parseInt(value ?? "", 10)

    if (!Number.isInteger(parsed) || parsed < 1) {
        return fallback
    }

    return maximum ? Math.min(parsed, maximum) : parsed
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const page = getPositiveInteger(searchParams.get("page"), 1)
    const perPage = getPositiveInteger(searchParams.get("per_page"), 30, 100)

    const apiParams = new URLSearchParams({
        username: DEVTO_USERNAME,
        page: page.toString(),
        per_page: perPage.toString(),
    })

    const apiUrl = `https://dev.to/api/articles?${apiParams.toString()}`

    try {
        const response = await fetch(apiUrl, {
            signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
            next: {
                revalidate: ONE_WEEK_IN_SECONDS,
                tags: [DEVTO_CACHE_TAG],
            },
        })

        if (!response.ok) {
            const errorText = await response.text()
            return NextResponse.json(
                {
                    error: `Dev.to API error: ${response.statusText}`,
                    details: errorText,
                },
                { status: response.status }
            )
        }

        const data = await response.json()
        return NextResponse.json(data)
    } catch (error) {
        console.error("Error in Dev.to API handler:", error)
        return NextResponse.json(
            { error: "Failed to fetch data from Dev.to API." },
            { status: 500 }
        )
    }
}
