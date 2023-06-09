import React from "react";
import { createPopper } from "@popperjs/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useRouter } from "next/router";



export default function Popover ({ onEdit, onDelete }){
  const [popoverShow, setPopoverShow] = React.useState(false);
  const router = useRouter();
  const btnRef = React.createRef();
  const popoverRef = React.createRef();

  const openPopover = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "bottom"
    });
    setPopoverShow(true);
  };

  const closePopover = () => {
    setPopoverShow(false);
  };


  return (
    <>
      <div className='flex flex-wrap p-0.5 '>
        <div className="w-full text-center flex">
          <button
            className=" hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 relative" type="button"
            onClick={() => {
              popoverShow ? closePopover() : openPopover();
            }}
            ref={btnRef}
          >
          <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          <div
            className={
              (popoverShow ? "" : "hidden ") +
              "z-50 "
            }
            ref={popoverRef}
          >
            <div  className="flex flex-col absolute right-0 bg-popover z-50 font-normal leading-normal text-sm max-w-xs text-right no-underline break-words rounded-l-lg border-black border">
              <button onClick={onEdit} className="hover:text-yellow-500 active:bg-yellow-500 rounded-tl-lg px-4 py-2 ">
                Edit
              </button>
              <button onClick={onDelete} className="hover:text-red-500 active:bg-red-500 rounded-bl-lg px-4 py-2 ">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
