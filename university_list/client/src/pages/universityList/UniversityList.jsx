import "./universityList.css";
import { DataGrid } from "@material-ui/data-grid";
import { useState, useEffect } from "react";

export default function UniversityList() {
  const [data, setData] = useState([]);

  const getData=()=> { fetch("world_universities_and_domains.json").then((r) => r.json())
    .then((data) => {
        console.log("finish fetching");
        setData(data.map((currElement, index) => {
            currElement.id = index+1;
            return currElement;
          })
        );
    })
  };

  useEffect(()=>{
    getData()
  },[])

  const columns = [
    { field: "id", headerName: "No", width: 100 },
    { field: "name", headerName: "Name", width: 500 },
    { field: "country", headerName: "Country", width: 300 },
    {
      field: "web_pages",
      headerName: "Web pages",
      width: 150,
      renderCell: (params) => {
        return (
          params.row.web_pages.map((url, index) => {
            return (<> <a href={url}>{url}</a> <br/> </>)
          })
        );
      },
    },
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
