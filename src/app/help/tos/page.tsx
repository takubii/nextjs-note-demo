import N12br from "@/components/N12br";
import { prisma } from "@/globals/db";

export const revalidate = 0;

export default async function Page() {
    const data = await prisma.metadata.findUniqueOrThrow({
        where: { key: 'tos' },
    });

    return (
        <main>
            <h1 className="text-xl my-2">Terms of Service</h1>
            <p className="text-xs text-gray-400 my-2">The following text is a sample.</p>
            <N12br>{data.value}</N12br>
        </main>
    );
}
