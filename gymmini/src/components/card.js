import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart
} from "@fortawesome/free-solid-svg-icons"

export default function Card() {
  return (
    <div className="card border border-solid border-red-500 h-auto ">
        <div className="cardHeader debug w-full h-8">
            <div className="card-profile-img-container">
                <img src="" alt="" className="card-profile-img" />
            </div>
            <p className="profile-name"></p>
        </div>
        <div className="cardSection debug w-full h-96">
            <div className="card-section-img">

            </div>
            <div className="card-section-info">
                <div className="card-section-distance"></div>
                <div className="card-section-duration"></div>
                <button className="card-section-tag"></button>
            </div>
        </div>
        <div className="cardContext debug w-full h-8">
            <div></div>
        </div>
        <div className="cardFooter debug w-full h-16">
            <div>
                <div className="card-like">
                <FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",}} />
                </div>
                <div className="card-comment"></div>
            </div>
            <div className="card-settiing"></div>
        </div>
    </div>
  );
}


