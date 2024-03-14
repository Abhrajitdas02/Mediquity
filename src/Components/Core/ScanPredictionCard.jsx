import React from "react";
import { HoverEffect } from "../UI/HoverEffect.tsx";
import { services } from "../../Util/Services.js";
import { PinContainer } from "../UI/3D-Pin.tsx";
import { ScanPredictionData } from "../../Util/ScanPredictionData.js";

const ScanPredictionCard = ({ data }) => {
  return (
    <div className="flex flex-col text-center">
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b uppercase mt-[9%] from-neutral-200 to-neutral-500 py-8 tracking-[2px]">
        Scans & Predictions
      </p>
      <div className="max-w-6xl mx-auto px-8 mt-[12%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {ScanPredictionData.map((project) => (
          <div className="h-[40rem] w-full flex items-center justify-center -mt-[70%]">
            <PinContainer title="Predict" href="https://twitter.com/mannupaaji">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {project.label}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 "></span>
                </div>
                <div
                  className="image flex flex-1 w-full rounded-lg mt-4 bg-cover"
                  style={{ backgroundImage: `url(${project.src})` }}
                />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScanPredictionCard;
