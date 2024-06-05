// ThemeContext.js

import { createContext, useState } from "react";

// 내가 만들고자 하는 Context 를 정의할 파일

// Context API 는 React 에서 컴포넌트 트리 전체에 걸쳐 전역적인 데이터를 공유하고 전달하기 위한 방법
// -> 깊이 중첩된 컴포넌트들 간에도 데이터를 간편하게 전달할 수 있음
// -> 보통 props drilling 을 피하기 위해 사용

// 사용방법
// createContext() 함수를 사용하여 Context 객체를 생성할 수 있음
// -> Provider 와 Consumer 를 포함한다

// 1. Provider : 컨텍스트를 사용하는 컴포넌트들에게 값을 제공하는 역할
//  값을 전달할 (자식) 컴포넌트들을 감싸고, 'value'라는 prop을 통해 전달한 값을 지정
// 2. Consumer : 컨텍스트의 값을 사용하는 컴포넌트
//  최근에 React 에서는 useState 훅을 사용하여 컨텍스트 값을 가져와 사용함


// ThemeContext 라는 이름의 새 Context 생성
const ThemeContext = createContext();

// ThemeProvider 컴포넌트 생성
const ThemeProvider = ({children}) => {

    // 테마 상태 정의(초기값은 light)
    const [theme, setTheme] = useState("light");

    // 테마를 토글하는 함수 정의
    const toggleTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light');
    }

    // ThemeContext.Provider 를 통해 '상태 theme' 과 'toggleTheme 함수'를 제공
    return (

        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>

    );

};

export { ThemeContext, ThemeProvider };