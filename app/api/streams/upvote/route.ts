import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const downvoteSchema = z.object({
    streamId: z.string()
})

export async function POST(req: NextRequest) {
    const session = await getServerSession()
    const user = await prismaClient.user.findFirst({
        where: {
            email: session?.user?.email ?? ""
        }
    })

    if(!user) {
        return NextResponse.json({
            message: "unauthenticated"
        }, {
            status: 403
        })
    }

    try {
    const data = downvoteSchema.parse(await req.json())
    await prismaClient.upvote.create({
        data: {
            userId: user.id,
            streamId: data.streamId
        }
    })
    } catch (error) {
        return NextResponse.json({
            msg: "error while upvoting"
        }, {
            status: 411
        })
    }
}