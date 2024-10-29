import {MoonIcon} from "lucide-react";
import {Logo} from "@/components/Logo";
import {HamburgerMenu} from "@/components/header/HamburgerMenu";

export const Header = () => {
    return (
        <header className={"bg-backgroundMain px-5 py-9 md:px-7 flex justify-between items-center"}>
            <Logo CssWidth={"w-32"}/>
            <div className={"w-1/4 flex items-center justify-between"}>
                <MoonIcon strokeWidth={2} />
                <HamburgerMenu/>
            </div>
        </header>
    )
}