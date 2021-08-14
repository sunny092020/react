import "./newsletter.css"
import { useRef } from "react";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import React from 'react';

export default function Newsletter() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    console.log(inputEl.current.value);
  };
  return (
    <div className="newsLetter">
      <Input inputRef={inputEl} type="text" placeholder="Email" />
      <br/><br/>
      <Button onClick={onButtonClick}>Subscribe</Button>
    </div>
  );
}
