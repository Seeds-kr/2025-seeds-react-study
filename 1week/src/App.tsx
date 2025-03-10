//App.tsx
import { useState } from "react";
import "./App.css";

// 아래와 같이 type 지정
interface TList {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  // 아래와 같이 사용할 수 있습니다.
  const [todoList, setTodoList] = useState<TList[]>([
    {
      id: 1,
      text: "할일 1",
      completed: false,
    },
    {
      id: 2,
      text: "할일 2",
      completed: false,
    },
  ]);

  return (
    <div className="App">
      <div className="todoListContainer">
    
    	// map을 통해 list 내부 아이템을 뽑아줍니다.
        {todoList.map((item, idx) => (
          <div key={idx}>
            <li className="todoContainer">
              <button>완료</button>
              <p>{item.text}</p>
              <div className="buttonContainer">
                <button type="button">수정</button>
                <button type="button">삭제</button>
              </div>
            </li>
          </div>
        ))}
      </div>
      <div className="todoCreateContainer">
        <form>
          <input type="text" placeholder="할 일을 입력해 주세요." />
          <button>등록하기</button>
        </form>
      </div>
    </div>
  );
}

export default App;