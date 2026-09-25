import { NextResponse } from "next/server"

const GITHUB_USERNAME = "chamal1120"
const GH_HEAT_BASE = "https://gh-heat.anishroy.com"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)

    const colors =
        searchParams.get("colors") ?? "transparent,4a4826,8a7532,c9a254,f3be7c"
    const textColor = searchParams.get("textColor") ?? "cdcdcd"

    const upstreamParams = new URLSearchParams({
        colors,
        textColor,
        cellSize: "15",
        cellGap: "4",
        borderWidth: "0",
        radius: "6",
        padding: "5",
        showMonthLabels: "false",
        showDayLabels: "false",
        showLegend: "false",
        transparent: "true",
        darkMode: searchParams.get("darkMode") ?? "false",
    })

    try {
        const response = await fetch(
            `${GH_HEAT_BASE}/api/${GITHUB_USERNAME}/svg?${upstreamParams.toString()}`,
            { signal: AbortSignal.timeout(10_000) }
        )

        if (!response.ok) {
            return new NextResponse("Failed to fetch contribution graph", {
                status: response.status,
            })
        }

        let svg = await response.text()

        svg = svg.replace(
            /<text[^>]*class="month-label"[^>]*>[\s\S]*?<\/text>/g,
            ""
        )

        return new NextResponse(svg, {
            headers: {
                "Content-Type": "image/svg+xml",
                "Cache-Control": "public, max-age=3600, s-maxage=3600",
            },
        })
    } catch {
        return new NextResponse("Failed to fetch contribution graph", {
            status: 502,
        })
    }
}
