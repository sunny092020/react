import "./universityList.css";
import { DataGrid } from "@material-ui/data-grid";
import { useState, useEffect } from "react";
import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

const defaultTheme = createTheme();
const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(0.5, 0.5, 0),
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
    },
    textField: {
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
      margin: theme.spacing(1, 0.5, 1.5),
      '& .MuiSvgIcon-root': {
        marginRight: theme.spacing(0.5),
      },
      '& .MuiInput-underline:before': {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
    },
  }),
  { defaultTheme },
);

function QuickSearchToolbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        className={classes.textField}
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? 'visible' : 'hidden' }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
      />
    </div>
  );
}

QuickSearchToolbar.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default function UniversityList() {
  const [gridData, setGridData] = useState([]);
  const [fileData, setFileData] = useState([]);
  const [searchText, setSearchText] = React.useState('');

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = fileData.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field]);
      });
    });
    setGridData(filteredRows);
  };

  const getFileData=()=> { fetch("world_universities_and_domains.json").then((r) => r.json())
    .then((data) => {
        console.log("finish fetching");
        setFileData(data.map((currElement, index) => {
            currElement.id = index+1;
            return currElement;
          })
        );
    })
  };

  useEffect(()=>{
    getFileData()
  },[])

  useEffect(()=>{
    setGridData(fileData)
  },[fileData])

  const columns = [
    { field: "id", headerName: "No", width: 100 },
    { field: "name", headerName: "Name", width: 300 },
    { field: "country", headerName: "Country", width: 200 },
    {
      field: "web_pages",
      headerName: "Web pages",
      width: 600,
      renderCell: (params) => {
        return (
          params.row.web_pages.map((url, index) => {
            return (<> <a href={url}>{url}</a> | </>)
          })
        );
      },
    },
  ];

  const [selectedRows, setSelectedRows] = React.useState([]);

  return (
    <div className="universityList" style={{ height: 700, width: '80%' }}>
      <DataGrid
        components={{ Toolbar: QuickSearchToolbar }}
        rows={gridData}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event) => requestSearch(event.target.value),
            clearSearch: () => requestSearch(''),
          },
        }}
        onSelectionModelChange={rows => setSelectedRows(rows)}
      />
      <Button variant="contained" color="primary" onClick={() => {console.table(selectedRows)}}>
        Add to favorites
      </Button>
    </div>
  );
}
