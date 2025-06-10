import {Link} from "react-router-dom";
import cn from "classnames";

import cl from "./Header.module.scss"

export default function Header() {
    return (
        <header className={cn(cl.header)}>
            <div className="container">
                <Link to={'/'}>
                    <div className={cn(cl.headerLogo, "d-flex flex-column align-items-center")}>
                        <img className={cn(cl.headerLogoImg)} src="./appAssets/img/header/logo.svg" alt="" />
                        <img className={cn(cl.headerLogoText)} src="./appAssets/img/header/logoText.svg" alt="" />
                    </div>
                </Link>
            </div>
        </header>
    );
}