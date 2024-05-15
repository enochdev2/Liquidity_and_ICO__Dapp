import React from "react";

const NoPool = () => {
  return( 
  <> 
  <div className="new_center_img mt30">
    <img src="img/nopool.png" className="responsive-width-50" alt="image" />
  </div>
  <button onClick={() => window.location.reload()} 
  className="btn btn--large btn--green-light btn--with-icon btn--icon-right full-width"
  >
    
    Sorry, No Pool - Get Back
    <svg className="woox-icon icon-arrow-right">
      <use xlinkHref="#icon-arrow-right"></use>
    </svg>
  </button>
  
  </>)
};

export default NoPool;
