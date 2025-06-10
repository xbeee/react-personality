import cn from "classnames";

import cl from "./Everyday.module.scss"

export default function Everyday(){
  return(
    <div className={cn(cl.EverydayWrapper)}>
      <div className="container d-flex flex-column">
        <h1 className={cn(cl.EverydayTitle, "mb-0 text-center")}>
          Улучшайте <span>навыки</span> каждый день!
        </h1>
        <p className="mb-0 text-center">Путь к новым достижениям <span>проще</span>, чем кажется</p>
        <img src="./appAssets/img/everyday/everyday.png" alt="" />
      </div>
    </div>
  ) 
}