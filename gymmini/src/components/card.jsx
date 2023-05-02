import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faClock,
  faRoad,
  faComment,
  faEllipsisVertical,
  faGear
} from "@fortawesome/free-solid-svg-icons"

export default function Card() {
  return (
    <div className="card border border-solid border-red-500 h-auto flex flex-col ">
        <div className="cardHeader debug w-full h-8 flex justify-between ">
            <div className="profilename flex items-center">
                <div className="card-profile-img-container w-8 h-8 debug items-center flex">
                    <img src="https://source.unsplash.com/user/wsanter" alt="" className="card-profile-img debug" />
                </div>
                <p className="profile-name debug">Yasuf</p>
            </div>
            <div className="ellipsis debug">
            <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
        </div>
        <div className="cardSection debug w-full h-auto debug relative">
            <div className="card-section-img debug">
            <img src="https://source.unsplash.com/user/wsanter" alt="" className="card-section-img debug" />
            </div>
            <div className="card-section-info flex flex-col justify-end h-auto absolute bottom-0 text-white debug">
                <div className="card-section-distance debug">
                <FontAwesomeIcon icon={faRoad} />
                distance</div>
                <div className="card-section-duration debug">
                <FontAwesomeIcon icon={faClock} />
                duration</div>
                <button className="card-section-tag debug">tag</button>
            </div>
        </div>
        <div className="cardContext debug w-full h-auto debug">
            <div className='cardContext-container flex flex-col'>
                <div className="title-date flex justify-between">
                    <div className="title">We Can Do It!</div>
                    <div className="date">07/04/23</div>
                </div>
                <div className="discaptions">View this so good  @Kalifarrr</div>
            </div>
        </div>
        <div className="cardFooter debug w-full h-auto debug">
            <div className='cardFooter-container flex justify-between'>
            <div className="like-comment flex gap-2 ">
                <div className="card-like debug">
                <FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",}} />
                </div>
                <div className="card-comment debug">
                <FontAwesomeIcon icon={faComment} />
                </div>
            </div>
                <div className="card-setting debug">
                <FontAwesomeIcon icon={faGear} />
                </div>
            </div>  
        </div>
    </div>
  );
}


