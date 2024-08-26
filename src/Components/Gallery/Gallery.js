import React from 'react';
import './Gallery.css';
import a from '../Assets/Rectangle41.png';
import b from '../Assets/Rectangle24.png';
import c from '../Assets/Rectangle25.png';
import d from '../Assets/Rectangle26.png';
import e from '../Assets/Rectangle36.png';
import f from '../Assets/Rectangle37.png';
import g from '../Assets/Rectangle38.png';
import h from '../Assets/Rectangle39.png';
import i from '../Assets/Rectangle43.png';
import j from '../Assets/Rectangle44.png';


const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2>Share your setup with <br></br><span>#FuniroFurniture</span></h2>
      <div className="gallery-grid">
        <div className="gallery-item item1">
          <img src={a} alt="Setup 1" />
        </div>
        <div className="gallery-item item2">
          <img src={b} alt="Setup 2" />
        </div>
        <div className="gallery-item item3">
          <img src={c} alt="Setup 3" />
        </div>
        <div className="gallery-item item4">
          <img src={d} alt="Setup 4" />
        </div>
        <div className="gallery-item item5">
          <img src={e} alt="Setup 5" />
        </div>
        <div className="gallery-item item6">
          <img src={f} alt="Setup 6" />
        </div>
        <div className="gallery-item item7">
          <img src={g} alt="Setup 7" />
        </div>
        <div className="gallery-item item8">
          <img src={h} alt="Setup 8" />
        </div>
        <div className="gallery-item item9">
          <img src={i} alt="Setup 9" />
        </div>
        <div className="gallery-item item10">
          <img src={j} alt="Setup 10" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
