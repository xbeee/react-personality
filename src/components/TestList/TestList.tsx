import { useState, useEffect, forwardRef } from "react";
import cn from "classnames";
import cl from "./TestList.module.scss";
import { Button } from "@consta/uikit/Button";
import { Link } from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";
import {ResultTestState} from "../../store/reducers/TestReducer";

type Test = {
  id: number,
  testId: string,
  title: string,
  description: string,
  icon: string,
  goal: string,
  time: string,
  questionCount: number
}

type Tests = Array<Test>


const TestList = forwardRef<HTMLDivElement, {}>((_,  ref) => {
  const [tests, setTests] = useState<Tests>([]);
  const [activeTestIndex, setActiveTestIndex] = useState(0);
  const testResults = useAppSelector((store) => store.resultsTest?.results);

  useEffect(() => {
    let clearCache = new Date();
    fetch(`/data/mainpage.json?v=${clearCache.getDate()}${clearCache.getMonth()}${clearCache.getFullYear()}${clearCache.getSeconds()}`)
      .then((response) => response.json())
      .then((data) => {
        setTests(data);
        setActiveTestIndex(0);
      });
  }, []);

  const handleTestSelection = (index:number) => {
    setActiveTestIndex(index);
  };

  return (
    <div className={cn(cl.TestListWrapper, "d-flex flex-column")} ref={ref}>
      <div className="container d-flex flex-column">
        <div className={cn(cl.TestListTitle)}>
          Перечень <span>тестирований</span>
        </div>
        <div className={cn(cl.TestListContent, "d-flex flex-lg-row flex-column-reverse justify-content-between")}>
          {/* Список тестов */}
          <div className={cn(cl.TestListContentList, "d-flex flex-column")}>
            {tests.map((test, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleTestSelection(index)}
                  className={cn(
                    cl.TestListContentListEl,
                    "d-flex flex-column",
                    { [cl.TestListContentListElActive]: index === activeTestIndex } // Задаем активный класс
                  )}
                >
                  <div className={cn(cl.TestListContentListElHeader, "d-flex")}>
                    <div className={cn(cl.TestListContentListElHeaderPic)}>
                      <img src={test.icon} alt="" />
                    </div>
                    <div className={cn(cl.TestListContentListElHeaderText, "d-flex flex-column")}>
                      <h1 className="mb-0">{test.title}</h1>
                      <p className="mb-0">{test.description}</p>
                    </div>
                  </div>
                  <div className={cn(cl.TestListContentListElLine)}></div>
                  <div className={cn(cl.TestListContentListElBottom, "d-flex")}>
                    <div className={cn(cl.TestListContentListElBottomEl, "d-flex align-items-center")}>
                      <img src="./appAssets/img/test/time.svg" alt="" />
                      <p className="mb-0">{test.time}</p>
                    </div>
                    <div className={cn(cl.TestListContentListElBottomEl, "d-flex align-items-center")}>
                      <img src="./appAssets/img/test/questions.svg" alt="" />
                      <p className="mb-0">{test.questionCount} вопросов</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Информация по активному тесту */}
          <div className={cn(cl.TestListContentInfoWrapper)}>
            {tests.length > 0 && (
              <div className={cn(cl.TestListContentInfo, "d-flex flex-column")}>
                <h1 className={cn(cl.TestListContentInfoTitle, "mb-0")}>{tests[activeTestIndex].title}</h1>
                <p className={cn(cl.TestListContentInfoDescription, "mb-0")}>
                  {tests[activeTestIndex].description}
                </p>
                <div className={cn(cl.TestListContentInfoFlex, "d-flex flex-column")}>
                  <div className={cn(cl.TestListContentInfoFlexEl, "d-flex align-items-center")}>
                    <img src="./appAssets/img/test/path.svg" alt="" />
                    <div className={cn(cl.TestListContentInfoFlexElText, "d-flex flex-column")}>
                      <h2 className="mb-0">Цель:</h2>
                      <p className="mb-0">{tests[activeTestIndex].goal}</p>
                    </div>
                  </div>
                  <div className={cn(cl.TestListContentInfoFlexEl, "d-flex align-items-center")}>
                    <img src="./appAssets/img/test/flex-time.svg" alt="" />
                    <div className={cn(cl.TestListContentInfoFlexElText, "d-flex flex-column")}>
                      <h2 className="mb-0">Время:</h2>
                      <p className="mb-0">~ {tests[activeTestIndex].time}</p>
                    </div>
                  </div>
                  <div className={cn(cl.TestListContentInfoFlexEl, "d-flex align-items-center")}>
                    <img src="./appAssets/img/test/flex-result.svg" alt="" />
                    <div className={cn(cl.TestListContentInfoFlexElText, "d-flex flex-column")}>
                      <h2 className="mb-0">Количество вопросов:</h2>
                      <p className="mb-0">{tests[activeTestIndex].questionCount}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Link to={`/test/${tests[activeTestIndex].id}`}>
                    <Button label={"Пройти тест"} className={cn(cl.TestListContentInfoBtn)} />
                  </Link>

                  {/* Отображение результата теста только если он существует */}
                  {testResults?.some((result: ResultTestState) => result.id === tests[activeTestIndex].id) && (
                    <p className={cn(cl.TestResultText, "mb-0")}>
                      <span>Тест пройден:</span> {testResults.find((result: ResultTestState) => result.id === tests[activeTestIndex].id)?.result}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default TestList;
