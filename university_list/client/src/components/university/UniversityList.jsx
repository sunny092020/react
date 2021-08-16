import "./university.css";

import { useState, useEffect } from "react";
import * as React from 'react';

import UniversityItem from "./UniversityItem"; 
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useSelector } from 'react-redux'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

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
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const { user } = useContext(AuthContext);
  const [favourites, setFavourites] = useState([]);

  const keyword = useSelector(state => state.search.value)

  const getFileData=()=> { fetch("world_universities_and_domains.json").then((r) => r.json())
    .then((data) => {
        setFileData(data);
    })
  };

  useEffect(()=>{
    getFileData()
  },[])

  const pageSize = 10;

  useEffect(()=>{
    const filteredData = fileData.filter(
      item => (
        item.name.includes(keyword) || 
        item.country.includes(keyword) || 
        item.alpha_two_code.includes(keyword)
      )
    );
    const totalPage = Math.round(filteredData.length/pageSize) + 1;
    setTotalPage(totalPage);

    const cur_page = page > totalPage ? totalPage : page;
    setPage(cur_page);
    const gridData = filteredData.slice(pageSize*(cur_page-1), pageSize*cur_page);
    setGridData(gridData);

    axios.get("/favourites/" + user.username, {})
    .then(function (response) {
      setFavourites(response.data);
    })
    .catch(function (error) {
    });
  },[user, fileData, keyword, page]);

  const onChange = function(event, page) {
    setPage(page);
  };

  return (
    <div className="universityList">
      <div className={useStyles().root}>
        <Pagination
          count={totalPage}
          color="primary"
          onChange={onChange}
          showFirstButton={true}
          showLastButton={true}
          variant="outlined"
        />
      </div>
      {gridData.map((u, index) => {
        return <UniversityItem key={index} university={u} favourites={favourites} />;
      })}
    </div>
  );
}
