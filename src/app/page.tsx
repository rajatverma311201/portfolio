import { Button } from "@/components/ui/button";
import { wait } from "@/lib/utils";
import Link from "next/link";

export default async function Home() {
    await wait(2000);
    return (
        <main className="flex  flex-col items-center justify-between p-24">
            home
        </main>
    );
}
