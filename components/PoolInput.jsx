import React, {useState, useEffect} from "react";

import {Input} from "./index"
const PoolInput = ({
  notifyError,
  notifySuccess,
  LOAD_TOKEN,
  GET_POOL_ADDRESS,
  setPoolAddress,
}) => {
  const [token_1, setToken_1] = useState();
  const [token_2, setToken_2] = useState();
  const [fee, setFee] = useState();
  console.log("🚀 ~ fee:", fee)

  //DISPLAY TOKEN
    const [token_A, setToken_A] = useState()
    console.log("🚀 ~ token_A:", token_A)
    const [token_B, setToken_B] = useState()
    console.log("🚀 ~ token_B:", token_B)

    useEffect(()=>{
      const loadToken = async () => {
        const token = await LOAD_TOKEN(token_A);
        if (token == undefined) {
          console.log("kindly pass the token address");
        } else {
          setToken_1(token);
        }
      };
      loadToken();
    }, [token_A]);

    useEffect(()=>{
      const loadToken = async () => {
        const token = await LOAD_TOKEN(token_B);
        if (token == undefined) {
          console.log("kindly pass the token address");
          console.log("reaching");
        } else {
          setToken_2(token);
        }
      };
      loadToken();
    }, [token_B]);

    const  CALLING_POOL_Add = async()=> {
      console.log("reach");
      if(!token_1 || !token_2 || !fee) {
        return notifyError("Provide all details")
      } else {
        const pool = await GET_POOL_ADDRESS(token_1, token_2, fee);
        console.log("🚀 ~ constCALLING_POOL_Add=async ~ pool:", pool)
        setPoolAddress(pool[0]);
      }
    }

  return (
  <>
  { token_1 ? (
      <Input 
      value={ `${token_1?.name} (${
        token_1?.symbol
      }) Bal: ${token_1?.balance.slice(0,8)}  
       `}/>
    ) : (
      <Input 
      placeholder={"Token A"}
      handleClick={(e)=> setToken_A(e.target.value)}
      />
    )}

  {  token_2 ? (
      <Input 
      value={ `${token_2?.name} (${
        token_2?.symbol
      }) Bal: ${token_2?.balance.slice(0,8)}  
       `}/>
    ) : (
      <Input 
      placeholder={"Token B"}
      handleClick={(e)=> setToken_B(e.target.value)}
      />
    )}

    <Input  placeholder={"Fee"} handleClick={(e)=> setFee(e.target.value)} />

  <button 
  onClick={() => CALLING_POOL_Add()} 
  className="btn btn--large btn--green-light btn--with-icon btn--icon-right full-width">
    Check Pool
    <svg className="woox-icon icon-arrow-right">
      <use xlinkHref="#icon-arrow-right"></use>
    </svg>
  </button>

  </>
  );
};

export default PoolInput;
