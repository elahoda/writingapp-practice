import "./styles.css";
import { useRef, useState } from "react";

const WritingApp = () => {
  const [background, setBackground] = useState("lightblue");
  const [showComments, setShowComments] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleChange = () => {
    setBackground(background === "lightblue" ? "green" : "lightblue");
  };

  const handleCommentChange = (event) => {
    // No need to update the value stored in useRef
    // inputRef.current.value = event.target.value;
    setInputValue(event.target.value);
  };

  const handleComment = () => {
    // Access the value directly from inputRef
    const inputValue = inputRef.current.value;
    setShowComments(true);
    return inputValue;
  };

  const handleClear = () => {
    // Access the value directly from inputRef
    // const inputValue = inputRef.current.value;
    setShowComments(false);
    inputRef.current.value = "";
    setInputValue("");
  };

  return (
    <div style={{ backgroundColor: background }}>
      <div>
        <h1>A writing app project</h1>
        <h2>Let's find a way to quickly practice, React.</h2>
      </div>
      <div className="container">
        <label>Something: </label>
        <input
          type="text"
          onChange={handleCommentChange}
          ref={inputRef}
        ></input>
        {showComments && <p>We decided to write about: {inputValue}</p>}
        <div>
          <button className="container" onClick={handleComment}>
            Show Comments
          </button>
          <button className="container" onClick={handleClear}>
            Clear Comments
          </button>
        </div>
        <div>
          <button className="container" onClick={handleChange}>
            Change Color
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritingApp;
