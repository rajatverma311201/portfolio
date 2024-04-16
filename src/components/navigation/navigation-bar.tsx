import Link from "next/link";
import { NAV_ITEMS } from "./nav-items";
import { NavigationItem } from "./navigation-item";
import { NavigationContainer } from "./navigation-container";

interface NavigationBarProps {}

export const NavigationBar: React.FC<NavigationBarProps> = ({}) => {
    return (
        <NavigationContainer>
            <nav className="flex w-full justify-center">
                <ul className=" flex gap-10 ">
                    {NAV_ITEMS.map((item) => (
                        <NavigationItem key={item.label} href={item.href}>
                            <Link
                                href={item.href}
                                className="relative z-10 text-xl font-medium after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-full after:scale-x-0 after:bg-primary after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100"
                            >
                                {item.label}
                            </Link>
                        </NavigationItem>
                    ))}
                </ul>
            </nav>
        </NavigationContainer>
    );
};
