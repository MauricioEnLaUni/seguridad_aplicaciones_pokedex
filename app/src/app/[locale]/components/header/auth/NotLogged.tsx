"use client"
import Link from "next/link";
import { ReactElement, cloneElement } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@cmp/shad/Button";

import { LogIn, UserRoundPlus } from "lucide-react";

const loc = "HOME.header.auth.not.";
const links: [ReactElement, string][] = [
    [<UserRoundPlus />, "/auth/register"],
    [<LogIn />, "/auth/login"],
];

const NotLogged = () => {
    const t = useTranslations();

    return (
        <div role="group" aria-label={t(`${loc}title`)} className="flex gap-1">
            {links.map((e, i) => (
                <Link className="w-5/12" href={e[1]}>
                    <Button
                        variant="outline"
                        className="bg-primary w-full"
                        key={`auth-links-${i}`}>
                        {cloneElement(e[0], { className: "mr-2" })}
                        <span className="font-bold text-center">
                            {t(`${loc}links.${i}`)}
                        </span>
                    </Button>
                </Link>
            ))}
        </div>
    );
};

export default NotLogged;
