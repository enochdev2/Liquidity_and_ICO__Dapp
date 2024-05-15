import React, {useState, useEffect} from "react";

import {PoolInput, SuccessPool, NoPool} from "./index"

const AddPool = ({
  setOpenAddPool,
  LOAD_TOKEN,
  notifyError,
  notifySuccess,
  GET_POOL_ADDRESS
}) => {
    const [poolAddress, setPoolAddress] = useState();

    const [zeroAdd, setZeroAdd] = useState("0x000000000000000000000000000000000000")
  return (
    <section>
      <div className="container">
         <div className="row pt80">
          <div className="new_addpool mb30">
            <div className="register-form form--dark">
              <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
                <h2 className="heading-title"> Add Pool</h2> &nbsp; &nbsp; &nbsp; &nbsp; {""}
                <span onClick={()=> setOpenAddPool(false)}>X</span>
              </header>

              { poolAddress == zeroAdd ? (
                <NoPool/>
              ) : poolAddress ?  (
                <SuccessPool poolAddress={poolAddress}/>
              ) : (
                <PoolInput 
                notifyError={notifyError}
                notifySuccess={notifySuccess}
                LOAD_TOKEN={LOAD_TOKEN}
                GET_POOL_ADDRESS={GET_POOL_ADDRESS}
                setPoolAddress={setPoolAddress}
                />
              )}
            </div>
          </div>
         </div>
      </div>
    </section>
  )
};

export default AddPool;
