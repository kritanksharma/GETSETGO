import React from 'react'
import Icon from "@mdi/react";
import {
    mdiTelevisionClassic,
    mdiCameraPlusOutline,
    mdiMovieRoll,
    mdiDomain,
    mdiMovieFilterOutline,
    mdiPrinter3d,
    mdiScissorsCutting,
    mdiHomeImportOutline,
    mdiVideo2d,
    mdiDesktopClassic,
    mdiDraw,
    mdiCellphoneText,
    mdiVideoInputComponent
  } from "@mdi/js";

export default function CoreWork() {
    const items = [
        { path: mdiTelevisionClassic, text: "TVC's / DVD's" },
        { path: mdiCameraPlusOutline, text: "Photoshoot" },
        { path: mdiMovieRoll, text: "Music videos" },
        { path: mdiDomain, text: "Branded Content" },
        { path: mdiMovieFilterOutline, text: "Fiction" },
        { path: mdiPrinter3d, text: "3D Modelling" },
        { path:  mdiScissorsCutting, text: "Editing Services" },
        { path: mdiHomeImportOutline, text: "Studio Rental" },
        { path: mdiVideo2d, text: " 2D / 3D Animation" },
        { path: mdiDesktopClassic, text: "Vfx/Visual Effects" },
        { path: mdiDraw, text: "Sets/Acoustic Designing" },
        { path: mdiCellphoneText, text: "Vertical content" },
        { path: mdiVideoInputComponent, text: "Sound / Foley Designing" },
        // Add more items as needed
      ];
  return (
    <div className='card text-light' style={{backgroundColor:'black' , borderRadius:'0px'}}>

   <h3 className="card-title fw-semibold display-6 theme-text-color mt-5">OUR SERVICES</h3>
   <p className="fw-regular card-subtitle p-3 text-secondary">We provides an endless canvas for creativity, offering captivating commercials, mesmerizing music videos, thrilling fiction productions, cutting-edge 3D modeling, and mind-bending visual effects to turn your ideas into captivating realities.</p>
   <div className='card-body d-flex flex-wrap justify-content-center'>
      {items.map((item, index) => (
        <div key={index} className="mx-5 my-4">
            <p className='content-hover-animation icon text-secondary'>
          <Icon path={item.path} size={3} title={item.text} />
          <p className='my-1'>{item.text}</p></p>
        </div>
      ))}
    </div>
      
    </div>
  )
}
