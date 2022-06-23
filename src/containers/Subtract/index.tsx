import React, { useEffect, useState } from 'react';
import { AiOutlineCheckCircle, RiCloseCircleLine, MdReplay } from "react-icons/all";
import { ToastContainer, toast } from 'react-toastify';
import useSound from "use-sound";
import "antd/dist/antd.css";
import '../../App.css';
import 'react-toastify/dist/ReactToastify.min.css';
const music = require("../../assets/error.mp3");
const StyledApp = require('../../styles/app').default;

function Subtract() {
  const [firstNum, setFirstNum] = useState(Math.floor(Math.random() * 100) + 35);
  const [secondNum, setSecondNum] = useState(Math.floor(Math.random() * 100));
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
  const [errorAnswersCount, setErrorAnswersCount] = useState<number>(0);
  const [answerItem, setAnswerItem] = useState([
    Math.floor(Math.random() * 50) + 2,
    (firstNum - secondNum),
    Math.floor(Math.random() * 50) + 2
  ]);
  const [playSound] = useSound(music, { volume: 0.25 });
  const colors = ["#FE4A49", "#2AB7CA", "#fbc423", "#F86624", "#808080"];

  const correctMessages: string[] = ['Good job!!!', 'Great!', 'Keep up the good work!', 'Wow! You are smart!', 'Excellent!!!', 'Worderful!!']


  function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

  const handleAnswer = (answerParam: number) => {
    const randomCorrectMessage = getRandomInt(correctMessages.length)
    if((firstNum - secondNum) === answerParam) {
      setFirstNum(Math.floor(Math.random() * 100) + 35);
      setSecondNum(Math.floor(Math.random() * 100));
      toast.success(`${correctMessages[randomCorrectMessage]} Please answer next question.` )
      setCorrectAnswersCount(correctAnswersCount+1)
    }else {
      playSound();
      toast.error("Wrong answer!");
      setFirstNum(Math.floor(Math.random() * 100) + 35);
      setSecondNum(Math.floor(Math.random() * 100) + 35);
      setErrorAnswersCount(errorAnswersCount+1);
      navigator.vibrate(100);
    }
  };
  
  useEffect(() => {
    setAnswerItem([ 
       Math.floor(Math.random() * 50) + 1,
      (firstNum - secondNum),
      Math.floor(Math.random() * 50) + 1]);
  }, [firstNum, secondNum]);

  if(answerItem.length > 3) {
     answerItem.pop();
  }

  return (
    <StyledApp>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {
        (correctAnswersCount + errorAnswersCount) === 15 ? (
          <div className="app__total">
            <h1>{correctAnswersCount <= 3 ? '😢' : correctAnswersCount <= 5 ? '😐' : correctAnswersCount <= 8 ? '😊' : correctAnswersCount <= 12 ? '👍' : '👏'}</h1>
            <p style={{color: "#4BB543"}}><AiOutlineCheckCircle color="#4BB543" size={40}/> Your correct answers total {correctAnswersCount}</p>
            <p style={{color: "#ff3333"}}><RiCloseCircleLine color="#ff3333" size={40}/> Your incorrect answers total {errorAnswersCount}</p>
            <button onClick={() => window.location.reload()}><MdReplay size={30} /> Replay</button>
          </div>
        ) : (
          <div className="App">
            <div className="app__value">
              <h1>
                <span style={{color: `${colors.sort( () => .5 - Math.random())[0]}`}}>{firstNum}</span>
                <span style={{color: `${colors.sort( () => .5 - Math.random())[0]}`}}>-</span>
                <span style={{color: `${colors.sort( () => .5 - Math.random())[0]}`}}>{secondNum}</span>
                <span style={{color: `${colors.sort( () => .5 - Math.random())[0]}`}}>=</span>
                <span style={{color: `${colors.sort( () => .5 - Math.random())[0]}`}}>{0 || '?'}</span>
              </h1>
            </div>
            <div className="app__card-inner">
              {
                answerItem.sort(() => .5 - Math.random()).map(item => (
                  <div style={{backgroundColor: `${colors.sort( () => .5 - Math.random())[0]}`, overflow: 'hidden', padding: '50px'}} key={item} onClick={() => handleAnswer(item)}>
                    <h1>{item}</h1>
                  </div>
                ))
              }
            </div>
          </div>
        )
      }
    </StyledApp>
  );
}

export default Subtract;
