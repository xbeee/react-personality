import cn from "classnames"
import cl from "./MainBlock.module.scss"

import { Button } from "@consta/uikit/Button";
import {FC} from "react";

interface MainBlockProps {
  scrollTarger: () => void
}

const MainBlock: FC<MainBlockProps> = ({scrollTarger}) => {
  return(
    <div className={cn(cl.mainBlock)}>
      <div className="container">
        <div className={cn(cl.mainBlockWrapper, "d-flex flex-lg-row flex-column align-items-lg-start align-items-center justify-content-between")}>
          <div className={cn(cl.mainBlockText, "d-flex flex-column")}>
            <div className={cn(cl.mainBlockTextWrapper, "d-flex flex-column")}>
              <h3 className="mb-0">
                Узнайте свои <span>сильные</span> стороны и работайте над собой!
              </h3>
              <p className="mb-0">Пройдите наш тест, чтобы лучше понять свои сильные стороны и найти области для роста</p>
            </div>
            <div className="d-flex">
              {/* <Link to={'/#TestList'} onClick={scrollTarger}> */}
                <Button size="l" label="Пройти тест" onClick={scrollTarger}/>
              {/* </Link> */}
            </div>
          </div>
          <img src="../../appAssets/img/mainPage/mainBlock/1.webp" alt="" />
        </div>
      </div>
    </div>
  )
}
export default MainBlock;