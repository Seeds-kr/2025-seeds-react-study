import React, { useState } from "react";

interface AddToDoProps {
  onAdd: (text: string) => void; 
}

const AddToDo: React.FC<AddToDoProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  
  const handleAdd = () => {
    if (!text.trim()) {
      alert("할 일을 입력하세요!"); 
      return;
    }
    onAdd(text); 
    setText(""); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 입력하세요..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>추가</button>
    </div>
  );
};

export default AddToDo;
