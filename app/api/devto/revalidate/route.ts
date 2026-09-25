import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

const DEVTO_CACHE_TAG = "devto-articles"

export async function POST(request: Request) {
    const secret =
        process.env.DEVTO_REVALIDATE_SECRET ?? process.env.CRON_SECRET
    const authorization = request.headers.get("authorization")

    if (!secret) {
        return NextResponse.json(
            { error: "Dev.to revalidation is not configured." },
            { status: 500 }
        )
    }

    if (authorization !== `Bearer ${secret}`) {
        return NextResponse.json({ error: "Unauthorized." }, { status: 401 })
    }

    revalidateTag(DEVTO_CACHE_TAG, { expire: 0 })

    return NextResponse.json({
        revalidated: true,
        revalidatedAt: new Date().toISOString(),
    })
}
