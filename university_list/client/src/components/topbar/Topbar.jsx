import "./topbar.css";
import { Link } from "react-router-dom";
import { Search } from "@material-ui/icons";
import { useSelector, useDispatch } from 'react-redux'
import { searchByKeyword } from '../../features/search/searchSlice'
export default function Topbar() {
  const dispatch = useDispatch()
  function handleInputChange(e){
    dispatch(searchByKeyword(e.target.value))
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Universities</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for university"
            className="searchInput"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Newsletter</span>
        </div>
      </div>
    </div>
  );
}
