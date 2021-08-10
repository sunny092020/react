import "./universityList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UniversityList() {
  const [data, setData] = useState([]);

  const getData=()=> { fetch("world_universities_and_domains.json").then((r) => r.json())
    .then((data) => {
        console.log("finish fetching");
        setData(data.map((currElement, index) => {
            currElement.id = index+1;
            return currElement; //equivalent to list[index]
          })
        );
    })
  };

  useEffect(()=>{
    getData()
  },[])

  const columns = [
    { field: "id", headerName: "No", width: 100 },
    { field: "name", headerName: "Name", width: 600 },
    { field: "country", headerName: "Country", width: 500 },
  ];

  return (
    <div className="universityList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}
