import "./university.css";

import { useState, useEffect } from "react";
import * as React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function UniversityItem({university}) {
  return (
    <div className="ws-tile-three-line-text">
      <span>
        <h3 className="list-h3">{university.name}</h3>
        <p className="list-p">{university.country}</p>
        {university.web_pages.map((url, index) => {
          return (<p className="list-p" key={index}><a  href={url}>{url}</a></p>)
        })}
      </span>
      <br/><br/>
    </div>
  );
}
