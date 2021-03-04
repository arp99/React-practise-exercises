import Liked from "./../assets/liked.png";
import notLiked from "./../assets/notLiked.png";

export default function Like({ isLiked, clickHandler }) {
  function ShowLikeIcon() {
    if (isLiked) {
      return <img src={Liked} alt="liked" onClick={clickHandler} />;
    }
    return <img src={notLiked} alt="notLiked" onClick={clickHandler} />;
  }

  return <ShowLikeIcon />;
}
