import "./universityList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UniversityList() {
  return (
    <div className="userList">
      <DataGrid
        rows={[]}
        disableSelectionOnClick
        columns={[]}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
