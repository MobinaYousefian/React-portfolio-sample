import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {MenuIcon} from "lucide-react";

export const HamburgerMenu = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <MenuIcon strokeWidth={2}/>
            </SheetTrigger>
            <SheetContent>
                menu
            </SheetContent>
        </Sheet>
    )
}