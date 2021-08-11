import "./university.css";

import { useState, useEffect } from "react";
import * as React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import UniversityItem from "./UniversityItem"; 

export default function UniversityList() {
  const [gridData, setGridData] = useState([]);
  const [fileData, setFileData] = useState([]);

  const getFileData=()=> { fetch("world_universities_and_domains.json").then((r) => r.json())
    .then((data) => {
        console.log("finish fetching");
        setFileData(data);
    })
  };

  useEffect(()=>{
    getFileData()
  },[])

  return (
    <div className="universityList">
      {fileData.map((u, index) => {
        return <UniversityItem key={index} university={u}/>;
      })}
    </div>
  );
}
