import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Rajat Verma | Portfolio</h1>
            <Button asChild>
                <Link href="/projects">Projects</Link>
            </Button>
        </main>
    );
}
