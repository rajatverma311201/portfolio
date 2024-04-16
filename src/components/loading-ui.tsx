import { fontSecondary } from "@/constants/fonts";
import { cn } from "@/lib/utils";
import { Atom, Loader, Loader2 } from "lucide-react";

interface LoadingUIProps {}

export const LoadingUI: React.FC<LoadingUIProps> = ({}) => {
    return (
        <div className="grid h-full place-content-center">
            <Loader2
                size={50}
                className="mx-auto mb-10 animate-spin text-5xl text-primary"
            />
            <h1
                className={cn(
                    fontSecondary.className,
                    "text-4xl font-bold text-primary",
                )}
            >
                {"<"} Rajat Verma {"/>"}
            </h1>
        </div>
    );
};
