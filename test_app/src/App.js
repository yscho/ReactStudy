import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남우동 맛집';
  let post_title = ['남자 코트 추천',
                    '여자 코드 추천',
                    '다른 기타 등등'];
  let [글제목, 글제목변경] = useState(post_title)
  let [logo, setLogo] = useState('ReactBlog') // 로고 같은거는 그냥 변수 쓰자...  sate 쓰지 말고
  let [따봉, 따봉변경] = useState(0);
  /*
        let num = [1,2];  //
        let a = num[0];   //1을 뽑는 문법
        let c = num[1]

        let [ a, c] = [1, 2]; // 이것이 바로 descsucture 문법
        
        //Q. 변수 문법이 있는제 왜 state를 써야 할까?
      */

  function 함수(){
    console.log(1);
    따봉변경(따봉+1)
  }

  return (
    <div className="App">
      
      <div className="black-nav">
        <h4 style={{color:'red', fontSize: '16px'}}>{logo}</h4>
      </div>

      <button onClick={ ()=> {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
        
      }}>가나다순 정렬</button>

      <button onClick={ ()=> {
          let copy = [...글제목];
          copy[0] = '여자코드 추천';
          글제목변경(copy);
          
          }}>임시버튼</button>

      <div className="list">

        {/* <h4>{글제목[0]} <span onClick= () => {----}>👍</span> {따봉} </h4> */}
        <h4>{글제목[0]} <span onClick={ 함수 }>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
