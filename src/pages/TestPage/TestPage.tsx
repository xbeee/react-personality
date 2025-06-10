import cl from "./TestPage.module.scss";
import cn from "classnames";
import { Checkbox } from "@consta/uikit/Checkbox";
import { Button } from "@consta/uikit/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux";
import {setResultTest} from "../../store/reducers/TestReducer";

type IresultRange = {
  minPoints: number,
  maxPoints: number,
  title: string,
  description: string
  resultText: string

}

type Answer = {
  text: string; // Предположим, что ответ - это число
  points: number; // Очки за ответ
};


interface IAnwsers {
  [key: number]: Answer; // Ключ — это номер вопроса, значение — объект с ответом
}

interface IQuestion {
  id: number,
  question: string,
  answers: Array<Answer>
}

type IQuestions = Array<IQuestion>;
type IresultRanges = Array<IresultRange>;

export default function TestPage() {
  const [questions, setQuestions] = useState<IQuestions>([]);
  const [testId, setTestId] = useState<number | null>(null);
  const [title, setTtile] = useState<string>('');
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);
  const [resultText, setResultText] = useState<string>("");
  const [resultTextDescription, setResultTextDescription] = useState<string>("");
  const [resultRanges, setResultRanges] = useState<IresultRanges>([]);
  const [answers, setAnswers] = useState<IAnwsers>({});
  const dispatch = useAppDispatch();

  useEffect(() => {
    const testId = window.location.pathname.split("/").pop();
    fetch(`/data/testes/${testId}.json`)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.questions);
        setTtile(data.title);
        setTestId(data.id);
        setResultRanges(data.results);
      });
  }, []);

  const handleAnswer = () => {
    const selectedAnswer = answers[currentQuestion];
    if (selectedAnswer) {
      setTotalPoints(totalPoints + selectedAnswer.points);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
      setCompleted(true);
    }
  };

  const calculateResult = () => {
    const result = resultRanges.find(
      (range) => totalPoints >= range.minPoints && totalPoints <= range.maxPoints
    );
    setResultText(result ? result.resultText : "Результат не определен");
    if(result){
      dispatch(setResultTest({result: result.resultText, id: testId}))
    }
    setResultTextDescription(result ? result.description : "Результат не определен");
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      const selectedAnswer = answers[currentQuestion];
      setTotalPoints(totalPoints - (selectedAnswer ? selectedAnswer.points : 0));
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const selectAnswer = (answer: Answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  if (!questions.length) return <div className={cl.Loading}>Загрузка...</div>;

  if (completed){
    return (
      <div className={cn(cl.TestPageWrapper)}>
        <div className="container d-flex flex-lg-row flex-column justify-content-between align-items-center">
          <div className={cn(cl.TestPageContent, "d-flex flex-column")}>
            <div className={cn(cl.TestPageContentTitle, cl.Top)}>Результат тестирования</div>
            <div className="d-flex flex-column" style={{rowGap: 10}}>
              <div className={cn(cl.TestPageContentTitle, cl.Small)}>{resultText}</div>
              <div className={cn(cl.TestPageContentText)}>{resultTextDescription}</div>
            </div>
            <Link to={'/'} className="w-100 d-lg-block d-none" style={{margin: 5}}>
              <Button label="На главную" className="w-100"/>
            </Link>
          </div>
          <Link to={'/'} className="w-100 d-lg-none" style={{margin: 5}}>
            <Button label="На главную" className="w-100"/>
          </Link>
          <div className={cl.Image}>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.999 511.999" style={{ enableBackground: 'new 0 0 511.999 511.999' } as React.CSSProperties} xmlSpace="preserve">
              <path style={{ fill: 'rgb(10, 10, 10)' }} d="M210.316,441.388c-18.455,0-35.807-7.187-48.857-20.236c-5.261-5.261-5.261-13.791,0-19.053 c5.261-5.259,13.791-5.259,19.053,0c7.961,7.962,18.547,12.346,29.805,12.346s21.843-4.384,29.805-12.346l232.62-232.619 c7.962-7.961,12.346-18.547,12.346-29.805s-4.384-21.843-12.346-29.804c-16.436-16.437-43.176-16.436-59.609-0.001L283.532,239.471 c-5.262,5.259-13.79,5.259-19.053,0c-5.261-5.261-5.261-13.791,0-19.053L394.08,90.815c26.94-26.937,70.772-26.94,97.715,0 c26.94,26.941,26.94,70.776,0,97.716l-232.62,232.621C246.125,434.202,228.773,441.388,210.316,441.388z" fill="#507C5C"></path>
              <path style={{ fill: 'rgb(132, 201, 29)' }} d="M287.978,371.291l-39.331,39.331c-21.722,21.722-56.94,21.722-78.662,0L29.731,270.37 c-21.722-21.722-21.722-56.94,0-78.662l0,0c21.722-21.722,56.94-21.722,78.662,0L287.978,371.291z" fill="#CFF09E"></path>
              <path style={{ fill: 'rgb(10, 10, 10)' }} d="M209.315,440.386c-18.457,0-35.807-7.187-48.857-20.236L20.205,279.896 c-26.94-26.941-26.94-70.775,0-97.716c13.052-13.05,30.402-20.236,48.857-20.236c18.457,0,35.807,7.187,48.857,20.236 l179.585,179.585c5.261,5.261,5.261,13.791,0,19.053l-39.331,39.331C245.121,433.198,227.771,440.386,209.315,440.386z M69.062,188.888c-11.258,0-21.843,4.384-29.805,12.346c-16.434,16.434-16.434,43.176,0,59.611L179.51,401.096 c7.961,7.962,18.545,12.346,29.805,12.346c11.258,0,21.843-4.384,29.805-12.346l29.805-29.805L98.866,201.234 C90.905,193.272,80.321,188.888,69.062,188.888z" fill="#507C5C"></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  const progress = (currentQuestion / questions.length) * 100;
  return (
    <>
      <div className={cn(cl.TestPageWrapper)}>
        <div className="container">
          <div className={cn(cl.TestPageContent, "d-flex flex-column")}>
            <div className={cn(cl.TestPageContentTitle)}>{title}</div>
            <div className={cn(cl.TestPageContentQuestion, "d-flex flex-column")}>
              <div className={cn(cl.TestPageContentQuestionHeader, "d-flex flex-column")}>
                <h1 className="mb-0">{questions[currentQuestion].question}</h1>
                <div className={cn(cl.TestPageContentQuestionList, "d-flex flex-column")}>
                  {questions[currentQuestion].answers.map((answer, index) => (
                    <label
                      key={index}
                      className="d-flex align-items-center"
                      onClick={() => selectAnswer(answer)}
                    >
                      <Checkbox
                        checked={answers[currentQuestion] === answer} 
                        onChange={() => selectAnswer(answer)}
                      />
                      <p className="mb-0">{answer.text}</p>
                    </label>
                  ))}
                </div>
              </div>
              <div className={cn(cl.TestPageContentQuestionBottom, "d-flex flex-column")}>
                <div className="d-flex justify-content-between w-100 align-items-end">
                  <div>
                    {currentQuestion > 0 && (
                      <Button label={"Назад"} onClick={handleBack} style={{ marginRight: 5 }} />
                    )}
                    <Button
                      label={currentQuestion === questions.length - 1 ? "Завершить" : "Далее"}
                      onClick={handleAnswer}
                      disabled={!answers[currentQuestion]} 
                    />
                  </div>
                  <p className="mb-0">
                    {currentQuestion + 1}/{questions.length}
                  </p>
                </div>
                <div
                  className={cn(cl.TestPageContentQuestionBottomLine)}
                  style={{ '--progress': `${progress}%` } as React.CSSProperties}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
