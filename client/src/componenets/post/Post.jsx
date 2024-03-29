import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../dummyData";
import { useState } from "react";

export default function Post({post}) {
 const [like, setLike] = useState(post.like)
 const [isLiked, setIsLiked] = useState(false)
 const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const hadleLike = () =>{
    setLike(isLiked ? like -1 : like + 1 )
    setIsLiked(!isLiked)
  }
  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImg"src={Users.filter((u)=> u.id === post?.userId)[0].profilePicture} alt=""></img>
                <span className="postUsername">{Users.filter((u)=> u.id === post?.userId)[0].username}</span>
                <span className="postData">{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVertIcon />
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post.desc}</span>
            <img className="postImg" src={PF+post.photo} alt=""></img>
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src={`${PF}Like.png`} onClick={hadleLike}alt=""></img>
              <img className="likeIcon" src={`${PF}heart.png`} onClick={hadleLike} alt=""></img>
              <span className="postBottomRight">{like} odam like bosgan</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText"> {post.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  );
}
