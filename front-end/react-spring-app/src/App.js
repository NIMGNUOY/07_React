import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [message, setMessage] = useState([]);
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");

  useEffect(() => {

    // 요청 -> 서버로 요청
    // react(브라우저)        -> spring(서버)
    // http://localhost:3000 -> http://localhost:80
    fetch("/test1")
    .then(res => res.json())
    .then(data => {
      setMessage(data);
    });
    
    

  }, []);

  //=============================================================
  
  // axios 
  // 브라우저 및 nodejs 환경에서
  // 비동기 요청을 쉽게 처리할 수 있게 해주는 JavaScript 라이브러리
  // ** 터미널에서 npm / yarn 통해 설치 **
  // $ npm install axios
  // $ yarn add axios


  // 1. post 요청 시 데이터를 자동으로 JSON 데이터 형태로 처리해주므로,
  //    fetch 와 달리 JSON.stringfy 를 명시적으로 호출할 필요가 없음

  // 2. 응답을 JSON 으로 자동 파싱해주기 때문에, fetch 처럼 두번째 then 으로 응답을 파싱할 필요가 없다 

  // 3. headers 와 body 를 명시적으로 설정하지 않아도 된다.
  //    headers 의 경우는 기본적으로 Content-Type : application/json 으로 설정되어 있음
  //    단, header 의 내용 변경 시 명시적으로 작성해야 함
  //    ex) headers : {'Authorization' : 'Bearer {token}'}  -> jwt 인증 방법

  // =============================================================

  // fetch 로 서버 통신
  const handleClick = () => {
    fetch("/test2", {
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify({
        name : "홍길동",
        age : 17
      })
    })
    .then(res => res.text())
    .then(data => setMessage2(data));
  }; 


  // axios 로 서버통신
  const axiosTest = () => {

    axios.post("/test2", {
      name : "손흥민",
      age : 32
    })
    .then(res => {  // json 으로 parsing 된 값이 들어가져 있다
      console.log(res);

      setMessage3(res.data);
    })

  };

  return (
    
    <ul>
      {message.map((el, idx) => <li key={idx}>{el}</li>)}

      <hr />

      <button onClick={handleClick}>fetch로 서버 통신</button>
      <br></br>
      <h1>{message2}</h1>

      <hr />

      <button onClick={axiosTest}>axios로 서버 통신</button>
      <br></br>
      <h1>{message3}</h1>
    </ul>

  );
}

export default App;
