import Topbar from "../../components/topbar/Topbar";
import University from "../../components/university/University";
import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <University />
      </div>
    </>
  );
}
