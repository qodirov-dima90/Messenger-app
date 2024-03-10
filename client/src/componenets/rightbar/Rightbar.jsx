import { Users } from "../dummyData";
import Online from "../online/Online";
import "./rightbar.css";

export default function Rightbar({ profile }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="./assets/sovg'a.png" alt=""></img>
          <span className="birthdayText">
            <b>Bahramboev Elmurod</b> va <b> 3 ta do'stingizning</b> tug'ilgan
            kuni
          </span>
        </div>
        <img className="rightbarAd" src="./assets/afisha.jpg" alt=""></img>
        <h4 className="rightbarTitle">Onlayinda do'stim</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Shahar: </span>
            <span className="rightbarInfoValue">Toshkent</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Qayerdan: </span>
            <span className="rightbarInfoValue">Yangibozor</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Munosabatlar: </span>
            <span className="rightbarInfoValue">yagona</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User frinds</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}02.jpg`} alt=""></img>
            <span className="rightbarFollowing">Jamol M</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}03.jpg`} alt=""></img>
            <span className="rightbarFollowingName">Jamol M</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}04.jpg`} alt=""></img>
            <span className="rightbarFollowingName">Jamol M</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}05.jpg`} alt=""></img>
            <span className="rightbarFollowing"Name>Jamol M</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}06.jpg`} alt=""></img>
            <span className="rightbarFollowingName">Jamol M</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}07.jpg`} alt=""></img>
            <span className="rightbarFollowingName">Jamol M</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}08.jpg`} alt=""></img>
            <span className="rightbarFollowingName">Jamol M</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}09.jpg`} alt=""></img>
            <span className="rightbarFollowingName">Jamol M</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrappe"></div>
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
  );
}
