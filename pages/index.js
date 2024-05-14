import React, {useState, useContext} from "react";

//INTERNAL IMPORT
import {
  Header,
  Footer,
  Hero,
  ICOTokens,
  LiquidityHistory,
  ICOSale,
  Access,
  Analytic,
  App,
  AddLiquidity,
  AddPool,
  SuccessPool,
  NoPool,
  Loader,
  Input,
  PoolInput,
  HeaderICON,
  FooterICON,
} from "../components/index";
import {CONTEXT} from '../context/index'


const index = () => {
  const {
    connect,
    GET_POOL_ADDRESS,
    LOAD_TOKEN,
    notifyError,
    notifySuccess,
    CREATE_LIQUIDITY,
    GET_ALL_LIQUIDITY,
    transferNativeToken,
    buyToken,
    tokenSale,
    nativeToken,
    address,
    loader,
    DAPP_NAME,
  } = useContext(CONTEXT)
  //MODEL STATE
  const [openAddPool, setOpenAddPool] = useState(false);
  const [openAllLiquidity, setOpenAllLiquidity] = useState(false);

   return (
   <div className="crumina-grid">
    <Header 
    setOpenAddPool={setOpenAddPool} 
    setOpenAllLiquidity={setOpenAllLiquidity}
    connect={connect}
    address={address}
    />

   <div className="main-Content-wrapper">
  <Hero transferNativeToken={transferNativeToken} />
  <ICOTokens/>
  <LiquidityHistory GET_ALL_LIQUIDITY={GET_ALL_LIQUIDITY} />
  <App />
  <Analytic />
  <Access />
  <ICOSale 
  tokenSale={tokenSale} 
  nativeToken={nativeToken}
  buyToken={buyToken}
  />
   </div>

   {openAddPool && (
      <div className="new_center">
        <AddPool 
        setOpenAddPool={setOpenAddPool}
        LOAD_TOKEN={LOAD_TOKEN}
        notifyError={notifyError}
        notifySuccess={notifySuccess}
        GET_POOL_ADDRESS={GET_POOL_ADDRESS}
        />
      </div>
     )}

     { openAllLiquidity && (
      <div className="new_center">
        <AddLiquidity
       CREATE_LIQUIDITY={CREATE_LIQUIDITY}
       setOpenAllLiquidity={setOpenAllLiquidity}
      />
      </div>
     )}

     {loader && (
      <div className="new_center">
        <Loader />
      </div>
     )}
     <Footer/>     
    </div>
);
};

export default index;
