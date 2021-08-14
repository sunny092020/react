import "./newsletter.css"
import { useRef } from "react";

export default function Newsletter() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    console.log(inputEl.current.value);
  };
  return (
    <div className="newsLetter">
      <input ref={inputEl} type="text" placeholder="Email" />
      <br/><br/>
      <button onClick={onButtonClick}>Subscribe</button>
    </div>
  );
}
