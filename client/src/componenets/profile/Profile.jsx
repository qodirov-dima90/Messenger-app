import "./profile.css";
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import Feed from "../feed/Feed";
import Rightbar from "../rightbar/Rightbar";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}post/04.jpg`}
                alt=""
              ></img>
              <img className="profileUserImg" src={`${PF}01.jpg`} alt=""></img>
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Qodirov Dilmurod</h4>
                <span className="profileInfoDesc">WEB Dewloper</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
