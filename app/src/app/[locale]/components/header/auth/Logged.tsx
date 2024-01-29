import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@cmp/shad/DropdownMenu";
import { Label } from "@cmp/shad/Label";

import { CircleUserRound, LogOut } from "lucide-react";
import { Button } from "@cmp/shad/Button";
import Link from "@cmp/Navigation/Link";
import { useTranslations } from "next-intl";

const usr = [{ link: "profile" }];
const loc = "HOME.header.auth.logged";

const Logged = () => {
    const auth = false;
    const t = useTranslations();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full">
                <CircleUserRound className="w-10 h-10 text-primary" />
                <Label htmlFor={`${loc}auth`} className="sr-only">
                    {t(`${loc}title`)}
                </Label>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {auth ?? "usr"}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {auth ?? "email"}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {usr.map((u, i) => (
                        <DropdownMenuItem key={`auth-links-${i}`}>
                            <Link
                                className="font-bold font-sm"
                                contents={`${loc}links.${i}`}
                                to={u.link}></Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Button variant="link">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span className="font-bold font-sm">
                            {t(`${loc}logout`)}
                        </span>
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Logged;
