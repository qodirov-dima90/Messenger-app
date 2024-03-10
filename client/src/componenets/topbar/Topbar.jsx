import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration: "none"}}>
        <span className="logo">Messenger</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            className="searchInput"
            placeholder="Do'stlaringiazni vidyo va rasimlarini izlang"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLincs">
        <span className="topbarLink">Homepage</span>
        <span className="topbarLink">Timeline</span>
        </div>
    
      <div className="topbarIcons">
        <div className="topbarIconitem">
          <PersonIcon />
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconitem">
          <MessageIcon />
          <span className="topbarIconBadge">3</span>
        </div>
        <div className="topbarIconitem">
          <NotificationsIcon />
          <span className="topbarIconBadge">5</span>
        </div>
      </div>
      <img src="/assets/01.jpg" alt="" className="topbarImg" />
    </div>
    </div>
  );
}
