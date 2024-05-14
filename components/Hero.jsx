import React from "react";

const Hero = () => {
  return <section
  data-settings=" particles-1"
  className="main-section crumina-flying-balls
particles-js bg-1"
>
  <div className="container">
    <div
      className=" row medium-padding120
align-center"
    >
      <div
        className="col-lg-8 col-lg-offset-2
col-md-12 col-sm-12 col-xs-12"
      >
        <header
          className="crumina-module
crunina-heading heading--h2 mb-3
heading--width-decoration mb-10 text-body-medium"
        >
          <div className="heading-sup-title">
            Coin Market
          </div>
          <h2
            className="heading-title
heading--half-colored text-body-semibold my-2 text-primary-500 "
          >
            Create Liquidity MarketPlace
          </h2>
          <div className="heading--text">
            Join us in revolutionizing the Liquidity MarketPlace. Explore our
            platform to discover a world where property meets innovation,
            and where decentralization paves the way for a more equitable
            and efficient property market.
            <br />
            Experience the future of real estate with Decentralized Estate.
            Sign up now to explore our platform and unlock a new era of
            property ownership. Welcome to the future of real estate welcome
            to Decentralized Estate.
          </div>
        </header>


        <a onClick={()=> transferNativeToken()}
          href="#buyWoox"
          className="btn btn--large btn--primary btn--transparent"
        >
          Get Enoch Token
        </a>
      </div>
    </div>
  </div>
</section>;
};

export default Hero;
