import "./topbar.css";
import { Link } from "react-router-dom";
import { Search } from "@material-ui/icons";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux'
import { searchByKeyword } from '../../features/search/searchSlice'
export default function Topbar() {
  const dispatch = useDispatch()
  function handleInputChange(e){
    dispatch(searchByKeyword(e.target.value))
  };

  const logout = () => {
    console.log('logout');
    localStorage.clear();
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
          <Link to="/">
            <span className="topbarLink">Homepage</span>
          </Link>
          <Link to="/newsletter">
            <span className="topbarLink">Newsletter</span>
          </Link>
          <ExitToAppIcon className="logout" onClick={logout} />
        </div>
      </div>
    </div>
  );
}
