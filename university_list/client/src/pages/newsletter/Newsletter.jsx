import "./newsletter.css"
import { useRef } from "react";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import React from 'react';
import axios from "axios";

export default function Newsletter() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    console.log(inputEl.current.value);
    axios.post("/subscription/subscribe", {"email" : inputEl.current.value})
    .then(function (response) {
      console.log(response);
      alert(`${inputEl.current.value} has been subscribed!`);
    })
    .catch(function (error) {
      console.log(error);
      alert(`${inputEl.current.value} cannot be subscribed!`);
    });
  };
  return (
    <div className="newsLetter">
      <Input inputRef={inputEl} type="text" placeholder="Email" />
      <br/><br/>
      <Button onClick={onButtonClick}>Subscribe</Button>
    </div>
  );
}
