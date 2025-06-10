import cn from "classnames";
import {FC} from "react"
import cl from "./HowWork.module.scss"
import { Button } from "@consta/uikit/Button";

interface HowWorkProps {
  scrollTarger: () => void
}

const HowWork: FC<HowWorkProps> = ({scrollTarger}) => {
  return(
    <div className={cn(cl.howWorkWrapper)}>
      <div className="container d-flex justify-content-between">
        <div className={cn(cl.howWorkStepsWrapper, "d-flex flex-column")}>
          <div className={cn(cl.howWorkStepsEl, "d-flex align-items-center")}>
            <img src="./appAssets/img/steps/1.svg" alt="" />
            <div className={cn(cl.howWorkStepsElText, "d-flex flex-column")}>
              <h1 className="mb-0">Выбор <span>теста</span></h1>
              <p className="mb-0">Выберите интересующий вас тест <br/> из списка на главной странице.</p>
            </div>
          </div>
          <div className={cn(cl.howWorkStepsEl, "d-flex flex-row-reverse align-items-center")}>
            <img src="./appAssets/img/steps/2.svg" alt="" />
            <div className={cn(cl.howWorkStepsElText, "d-flex flex-column")}>
              <h1 className="mb-0"><span>Прохождение</span> теста</h1>
              <p className="mb-0">Ответьте на вопросы, чтобы система <br/> могла оценить ваши навыки и качества.</p>
            </div>
          </div>
          <div className={cn(cl.howWorkStepsEl, "d-flex align-items-center")}>
            <img src="./appAssets/img/steps/3.svg" alt="" />
            <div className={cn(cl.howWorkStepsElText, "d-flex flex-column")}>
              <h1 className="mb-0">Получение <span>результатов</span></h1>
              <p className="mb-0">После завершения теста получите <br/> итоговый балл и оценку ваших качеств.</p>
            </div>
          </div>
          <div className={cn(cl.howWorkStepsEl, "d-flex flex-row-reverse align-items-center")}>
            <img src="./appAssets/img/steps/4.svg" alt="" />
            <div className={cn(cl.howWorkStepsElText, "d-flex flex-column")}>
              <h1 className="mb-0"><span>Рекомендации</span></h1>
              <p className="mb-0">Ознакомьтесь с рекомендациями для <br/> развития сторон и улучшения навыков.</p>
            </div>
          </div>
        </div>
        <div className={cn(cl.howWorkText, "d-flex flex-column align-items-start")}>
          <h2 className="mb-0">Как это <br/> <span>работает?</span></h2>
          <div>
            Наша система оценки работает <span>просто</span> и <span>эффективно</span>:
            <ul className="mb-0">
              <li>  
                выбираете тест, проходите его, отвечая на вопросы
              </li>
              <li> 
                после чего получаете результаты с подробной оценкой ваших деловых и личных качеств. </li>
            </ul>
            На основе этих результатов мы предоставляем <span>рекомендации</span>, которые помогут вам развивать свои сильные стороны и работать над улучшением навыков.
          </div>
          <Button size="l" label="Выбрать тест" className="d-sm-block d-none" onClick={scrollTarger}/>
          <Button size="s" label="Выбрать тест" className="d-sm-none" onClick={scrollTarger}/>
        </div>
      </div>
    </div>
  )
}
export default HowWork;