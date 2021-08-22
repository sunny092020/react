import './newsletter.css';
import {useRef} from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import React from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Topbar from '../../components/topbar/Topbar';

export default function Newsletter() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    axios.post('/subscription/subscribe', {'email': inputEl.current.value})
        .then(function(response) {
          alert(`${inputEl.current.value} has been subscribed!`);
        })
        .catch(function(error) {
          alert(`${inputEl.current.value} cannot be subscribed!`);
        });
  };
  return (
    <div className="homeContainer">
      <Topbar />
      <Container className="newsLetter">
        <Input inputRef={inputEl} type="text" placeholder="Email" />
        <br/><br/>
        <Button onClick={onButtonClick}>Subscribe</Button>
      </Container>
    </div>
  );
}
