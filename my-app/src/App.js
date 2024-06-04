import logo from './logo.svg';
import './App.css';
import Exam1 from './exam/Exam1';
import Exam2 from './exam/Exam2';
import Exam3 from './exam/Exam3';
import Exam4 from './exam/Exam4';
import Exam5 from './exam/Exam5';

// 터미널 ctrl + shift + '`'(백틱) 로 열고
// 터미널에서 yarn start 서버 켜기
// 터미널에서 ctrl + c 서버 끄기

function App() {
  return (
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className='App'>

      {/* 여러가지 컴포넌트 불러다 쓸거다 */}
      {/* ctrl + '/' -> jsx 주석 */}

      {/* <Exam1 /> */}
      {/* <Exam2 /> */}
      {/* <Exam3 /> */}
      {/* <Exam4 /> */}
      <Exam5 />

    </div>

  );
}

export default App;
