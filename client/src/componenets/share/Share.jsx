import "./shore.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/04.jpg" alt="" />
          <input
            className="shareInput"
            placeholder="O'zingiz haqingizda yozing"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <PermMediaIcon htmlColor="tomato" className="shareIcon" />
            <span className="shareOptionText">Fota va video</span>
          </div>
          <div className="shareOption">
            <LabelIcon htmlColor="blue" className="shareIcon" />
            <span className="shareOptionText">Fota va video</span>
          </div>
          <div className="shareOption">
            <RoomIcon htmlColor="green" className="shareIcon" />
            <span className="shareOptionText">Fota va video</span>
          </div>
          <div className="shareOption">
            <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon" />
            <span className="shareOptionText">Fota va video</span>
          </div>

        <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
