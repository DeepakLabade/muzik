import { NextRequest, NextResponse } from "next/server";
import { z } from "zod"

const createStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string()
})

export async function POST(req: NextRequest) {
    try {
        const data = createStreamSchema.safeParse(await req.json())
    } catch (error) {
        return NextResponse.json({
            msg: "something went wrong while adding strema",
            error
        }, {
            status: 411
        })
    }
}