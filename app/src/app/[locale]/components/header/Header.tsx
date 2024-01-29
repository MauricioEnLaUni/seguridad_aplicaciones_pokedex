import ModeToggle from "./Themes/ModeToggle";
import Link from "@cmp/Navigation/Link";

import HeaderIcon from "./HeaderIcon";
// import LanguageSelect from "./LanguageSelect";
// import AuthComponents from "./AuthComponents";

const navLinks = ["home", "boxes", "trade"];
const loc = "HOME.header";

const Header = () => {
    return (
        <header className="text-primary-foreground bg-muted body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <HeaderIcon />
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex items-center text-base justify-center">
                    {navLinks.map((e, i) => (
                        <Link
                            contents={`${loc}.${e}`}
                            to={e}
                            className="mr-5 hover:text-white w-1/3"
                            key={`nav-link-${i}`}
                        />
                    ))}
                </nav>
                <div className="inline-flex items-center py-1 px-3 rounded text-base mt-4 md:mt-0">
                    {/*<div className="ml-2 w-16">
                        <LanguageSelect />
                    </div>*/}
                    <div className="ml-2">
                        <ModeToggle />
                    </div>
                    {/*<div className="ml-2 w-72">
                        <AuthComponents />
                </div>*/}
                </div>
            </div>
        </header>
    );
};

export default Header;
