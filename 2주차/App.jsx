import { use, useState } from 'react';
import './App.css'
import { unstable_batchedUpdates } from 'react-dom';



function App() {



  let [logo, setLog] = useState('ReactBlog')
  
  let [글제목, 글제목변경] = useState(['남자코트추천','강남 우동맛집','파이썬독학']);

  let [modal, setModal] = useState(false);

  let [likes, setLikes] = useState([0,0,0]);
  let [title, setTitle] = useState(0);

  let [입력값, 입력값변경] = useState('');



  return (
    <div className="App"> 
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
    

       {
        글제목.map(function(a,i){
          return (
          <div className="list" key={i}>
            <h4 onClick ={()=>{
          setModal(!modal)}}>{글제목[i]} 
          <span onClick={(e)=>{
            e.stopPropagation();
            let copy = [...likes];
            copy[i] = copy[i] + 1;
            setLikes(copy)
          
          }}>💪</span>{likes[i]}
          </h4>
            <p>2월 17일 발행</p>
            <button onClick={()=>{
              let copy = [...글제목];
              copy.splice(i,1);
              글제목변경(copy);
            }}>삭제</button>  
          </div>)
        })
       } 

      <input onChange={(e)=>{
        입력값변경(e.target.value);
        console.log(입력값)
      }}/>

      <button onClick={()=>{
        // 버튼을 누르면 글을 작성--? div생성해주세요 or state에 글 추가해주세요 
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy)
      }}>글발행</button>

       

       {
        modal == true ? <Modal title ={title} 글제목변경={글제목변경} 글제목={글제목}/> : null
       }



    </div>
  )




function Modal(props){ // 얘를 컴포넌트라고 말함. 더러운 html놈들...
  return(
    <>
      <div className="modal">
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>

    </> // 의미없는 div를 이렇게 써도 됨
    // 컴포넌트의 단점. A 함수에 있던 변수는 B 함수에서 맘대로 가져다 쓸 수 없음
      
  )
}

let Abc = () =>{
  return(
    <>
      <div className="modal">
        <h4>현재시간03월24일오전7시48분</h4>

      </div>
    </>
  )
}
}
export default App
