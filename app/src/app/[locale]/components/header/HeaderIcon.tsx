import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "@cmp/shad/Button";

import Pokeball from "@pbl/img/PKB.svg";

const HeaderIcon = () => {
    const t = useTranslations();

    return (
        <Button
            variant="link"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image src={Pokeball.src} alt="Pokeball icon" width={48} height={48} />

            <h1 className="text-primary hidden text-3xl font-bold sm:inline-block">
                {t("HOME.websiteName")}
            </h1>
        </Button>
    );
};

export default HeaderIcon;
