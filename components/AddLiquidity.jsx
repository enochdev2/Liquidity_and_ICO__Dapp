import React, {useState, useEffect} from "react";

import { Input } from "./index";

const AddLiquidity = ({ CREATE_LIQUIDITY, setOpenAllLiquidity}) => {
  const [poolHistory, setPoolHistory] = useState([]);
  const [selectedPool, setSetselectedPool] = useState();
  const [liquidityAmount, setLiquidityAmount] = useState();
  const [approveAmount, setApproveAmount] = useState();

  useEffect(()=> {
    const pools = JSON.parse(localStorage.getItem("poolHistory"));
    setPoolHistory(pools);
  }, []);
  return (
    <section>
      <div className="container">
        <div className="row pt80">
        <div className="new_addpool mb30">
            <div className="register-form form--dark">
              <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
                <h2 className="heading-title"> Add Liquidity </h2> &nbsp; &nbsp; &nbsp; &nbsp; {""}
                <span onClick={()=> setOpenAllLiquidity(false)}>X</span>
              </header>

              <div className="form-group label-floating is-empty">
                <select 
                onChange={(e) => {
                  const selected = poolHistory?.find(
                    (x, index) => index + 1 == e.target.value
                  );
                  setSetselectedPool(selected);
                }}
                >
                  <option > Select Items</option>
                  {
                    poolHistory?.map((pool, index) => (
                    <option key={index + 1} value={index + 1}>
                      {pool.token_A.name} & {pool.token_B.symbol} Fee: {""}{" "}
                      {pool.fee}
                    </option>
                    ))
                  }
                </select>
              </div>

              <Input 
              placeholder={"liquidity amount"} 
              handleClick={(e)=> setLiquidityAmount(e.target.value)}
               />

              <Input 
              placeholder={"approve amount"} 
              handleClick={(e)=> setApproveAmount(e.target.value)}
               />

              <button onClick={() => CREATE_LIQUIDITY(
                selectedPool, liquidityAmount, approveAmount
              )} 
                className="btn btn--large btn--green-light btn--with-icon btn--icon-right full-width">
                  Add Pool
                  <svg className="woox-icon icon-arrow-right">
                    <use xlinkHref="#icon-arrow-right"></use>
                  </svg>
                </button>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
};

export default AddLiquidity;
