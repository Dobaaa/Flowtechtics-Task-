import React from "react";

const PopupCircle = ({ FirstCircle, SeconedCircle, ThirdCircle }) => {
  return (
    <div className="circle-steps flex justify-center items-center pb-4">
      {/* Personal Data */}
      <div className="personal">
        <div className="first-circle flex items-center gap-1">
          <span
            className={`circle w-[30px] h-[30px] rounded-full ${FirstCircle}`}
          ></span>
          <hr className="border-t-2 border-gray-400 border-dashed w-[70px]" />
        </div>
        <p className="pt-2 text-center">Personal Data</p>
      </div>

      {/* Image */}
      <div className="img">
        <div className="second-circle flex items-center gap-1">
          <span
            className={`circle w-[30px] h-[30px] rounded-full ${SeconedCircle}`}
          ></span>
          <hr className="border-t-2 border-gray-400 border-dashed w-[70px]" />
        </div>
        <p className="pt-2 ">Image</p>
      </div>

      {/* Preview */}
      <div className="preview">
        <div className="third-circle flex">
          <span
            className={`circle w-[30px] h-[30px] rounded-full ${ThirdCircle}`}
          ></span>
        </div>
        <p className="pt-2 text-center">Preview</p>
      </div>
    </div>
  );
};

export default PopupCircle;
