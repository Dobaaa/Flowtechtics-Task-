import React from "react";

const PopupCircle = () => {
  return (
    <div className="circle-steps flex justify-center  items-center pb-4">
      <div className="personal">
        <div className="fisrt-circle flex items-center gap-1">
          <span className="w-[30px] h-[30px] rounded-full bg-slate-400"></span>
          <hr className="border-t-2 border-blue-400 border-dashed w-[50px]" />
        </div>
        <p>personal data </p>
      </div>
      <div className="img">
        <div className="seconed-circle flex items-center gap-1">
          <span className="w-[30px] h-[30px] rounded-full bg-slate-400"></span>
          <hr className="border-t-2 border-blue-400 border-dashed w-[50px]" />
        </div>
        <p>image</p>
      </div>
      <div className="preview">
        <div className="third-circle flex">
          <span className="w-[30px] h-[30px] rounded-full bg-slate-400"></span>
        </div>
        <p>preview </p>
      </div>
    </div>
  );
};

export default PopupCircle;
