import cn from "classnames";
import cl from "./Footer.module.scss"

export default function Footer() {
    return (
        <footer className={cn(cl.footer, "container-fluid px-0")}>
            <div className={cn(cl.footerContainer,"container d-flex justify-content-between align-items-center")}>
                <img src="./appAssets/img/footer/logo.svg" alt="" />
                <div className="d-flex flex-column align-items-end">
                    <p className="mb-0">
                        2025
                    </p>
                    {/* <Link to={"/policy"} className='text-end'><span>Политика <br/> конфиденциальности</span></Link> */}
                </div>
            </div>
        </footer>
    );
}