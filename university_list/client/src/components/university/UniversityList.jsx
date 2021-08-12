import "./university.css";

import { useState, useEffect } from "react";
import * as React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import UniversityItem from "./UniversityItem"; 
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

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

  const pageSize = 10;
  useEffect(()=>{
    setGridData(fileData.slice(0, pageSize));
  },[fileData])

  const classes = useStyles();
  const pageNum = Math.round(fileData.length/pageSize);

  const onChange = function(event, page) {
    console.log(page);
    const gridData = fileData.slice(pageSize*(page-1), pageSize*page);
    setGridData(gridData);
  };

  return (
    <div className="universityList">
      <div className={classes.root}>
        <Pagination
          count={pageNum}
          color="primary"
          onChange={onChange}
          showFirstButton={true}
          showLastButton={true}
          variant="outlined"
        />
      </div>
      {gridData.map((u, index) => {
        return <UniversityItem key={index} university={u}/>;
      })}
    </div>
  );
}
