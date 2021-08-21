import UniversityList from "../../components/university/UniversityList"
import "./home.css"
import Topbar from "../../components/topbar/Topbar";

export default function Home() {
  return (
    <div className="homeContainer">
      <Topbar />
      <UniversityList/>
    </div>
  );
}
