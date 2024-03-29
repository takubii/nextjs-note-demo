import { NextRequest, NextResponse } from "next/server";

import { zUpsertNote } from "@/app/notes/type";
import { prisma } from "@/globals/db";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
    const note = await prisma.note.findUnique({
        where: { id: Number(params.id) },
    });

    if (note === null) {
        return new NextResponse(null, { status: 404 });
    }

    return NextResponse.json(note);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const data = await req.json();
    const parsedData = zUpsertNote.parse(data);
    const note = await prisma.note.update({
        where: { id: Number(params.id) },
        data: { title: parsedData.title, body: parsedData.body },
    });

    return new NextResponse(null, { status: 204 });
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const note = await prisma.note.delete({
        where: { id: Number(params.id) },
    });

    return new NextResponse(null, { status: 204 });
}
