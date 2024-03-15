import { NextRequest, NextResponse } from "next/server";

import { zSettings } from "@/app/type";
import { prisma } from "@/globals/db";

export async function PUT(req: NextRequest) {
    const data = await req.json();
    const parsedData = zSettings.parse(data);

    await prisma.$transaction([
        prisma.metadata.update({
            where: { key: 'version' },
            data: { value: parsedData.version },
        }),
        prisma.metadata.update({
            where: { key: 'faq' },
            data: { value: parsedData.faq },
        }),
        prisma.metadata.update({
            where: { key: 'tos' },
            data: { value: parsedData.tos },
        }),
    ]);

    return new NextResponse(null, { status: 204 });
}
