import React, {useState, useEffect} from "react";

//INTERNAL IMPORT
import { shortenAddress } from "../Utils/index";

const LiquidityHistory = ({GET_ALL_LIQUIDITY}) => {
  const [liquidity, setLIquidity] = useState([]);

  useEffect(() => {
   try {
    GET_ALL_LIQUIDITY().then((item) => {
      setLIquidity(item?.reverse());
    })
   } catch (error) {
    console.log("Please reload the browser");
   }
  }, [])
  return (
  <section>
<div className="container">
  <div className="row medium-padding120">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div 
      className="mCustomScrollbar scrollable-responsive-table" 
       data-mcs-theme="dark"
       >
        <table className="pricing-table-wrap-table-blurring" >
          <thead >
            <tr>
              <th>#</th>
              <th>Token A</th>
              <th>Token B</th>
              <th>Address A</th>
              <th>Address B</th>
              <th>PoolAddress</th>
              <th>Created</th>
              <th>Transaction Has</th>
            </tr>
          </thead>

          <tbody>
            {liquidity?.map((liquidity, index) => {
                <tr 
                key={index + 1}
                className="crumina-module crumina-pricing-table pricing-table--style-table-blurring c-brown"
                >
                  <td>{index + 1}</td>
                  <td >
                    <div className="pricing-thumb">
                    <img 
                    src={
                      liquidity?.network == "80001" 
                      ? "img/80001.png" 
                     : liquidity?.network == "157" 
                     ? "img/80001.png" 
                     : liquidity.network == "1" 
                     ? "img/1.png" 
                     : liquidity.network == "5"
                     ? "img/1.png" 
                     : liquidity?.network == "11155111" 
                     ? "img/1.png" 
                     : "img/logo-primary.png"
                    } 
                    alt=""
                    className="woox-icon"
                    />
                    <h6 className="pricing-title">{liquidity?.tokenA}
                    <span>
                      {liquidity?.network == "80001" 
                      ? "Mumbai" 
                     : liquidity?.network == "157" 
                     ? "Polygon" 
                     : liquidity.network == "1" 
                     ? "Ethereum" 
                     : liquidity.network == "5"
                     ? "Geoila" 
                     : liquidity?.network == "11155111" 
                     ? "Sepolia" 
                     : "Enoch"
                      }
                    </span>
                    </h6>
                    </div>
                  </td>
                  <td>
                    <div className="currency-details-item">
                      <div className="value"> {liquidity?.tokenB} </div>
                    </div>
                  </td>
                  <td>
                    <div className="currency-details-item">
                      <div
                      onClick={()=> 
                      navigator.clipboard.writeText(
                        liquidity?.tokenA_Address
                      )
                      }
                      className="value c-primary"
                      >
                      {shortenAddress(liquidity?.tokenA_Address)}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="currency-details-item">
                      <div
                      onClick={()=> 
                      navigator.clipboard.writeText(
                        liquidity?.tokenB_Address
                      )
                      }
                      className={`value ${
                         index % 2 === 0 ? "c-green-succes" : "c-red-light"
                        }`}
                      >
                      {shortenAddress(liquidity?.tokenB_Address)}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="currency-details-item">
                      <div
                      onClick={()=> 
                      navigator.clipboard.writeText(
                        liquidity?.poolAddress
                      )
                      }
                      className={`value `}
                      >
                      {shortenAddress(liquidity?.poolAddress)}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="currency-details-item">
                      <div className={`value `}>
                        {new Date(
                            liquidity?.timeCreated * 1000
                          ).toDateString()}
                      </div>
                    </div>
                  </td>
                  <td>
                    <a 
                    href={
                      liquidity?.network == "80001" 
                      ? `https://mumbai.polygonscan.com/tx/${liquidity?.transactionHash}` 
                     : liquidity?.network == "157" 
                     ? `https://polygonscan.com/tx/${liquidity?.transactionHash}`
                     : liquidity.network == "1" 
                     ? `https://etherscan.io/tx/${liquidity?.transactionHash}` 
                     : liquidity.network == "5"
                     ? `https://goerli.etherscan.io/tx/${liquidity?.transactionHash}` 
                     : liquidity?.network == "11155111" 
                     ? `https://sepolia.etherscan.io/tx/${liquidity?.transactionHash}` 
                     : `https://mumbai.polygonscan.com/tx/${liquidity?.transactionHash}`
                    }
                    target="_blank"
                    className="btn btn--small btn--green-light"
                    >
                      Hash
                    </a>
                  </td>
                </tr>
              })}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={"8"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Illum, at nisi natus nostrum, ipsam eum libero 
                corporis nesciunt voluptatum quas
                 dicta sint obcaecati expedita alias sed minus, repellat voluptas 
                 consectetur.
              </td>
            </tr>
          </tfoot>
        </table>
       </div>
    </div>
    </div> 
</div>
</section>
  );
};

export default LiquidityHistory;
