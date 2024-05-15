import React from "react";

const App = () => {
  return (
    <section className="medium-padding120 responsive-align-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
            <div className="heading-sup-title"> Top-5  Cryptocurrency </div>
             <h2 className="heading-title weight-normal"> 
             Statistic of currencies on 
             <span className="weight-bold"> all your devices</span>
             </h2>

             <div className="heading-text">
              Lorem ipsum dolor, sit amet 
              consectetur adipisicing elit.   Autem incidunt neque, optio ad consequatur, necessitatibus dolores 
              itaque saepe doloribus, laboriosam architecto facere mollitia quo.
               Doloribus minus earum est fugit delectus.
             </div>
          </header>

          <p>
           
           
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis
             unde exercitationem aut hic sunt dolor sapiente illo quis dolore! Eius 
             aliquam quas ea optio, libero molestiae quos aut dolor.
            
          </p>

          <div className="btn-market-wrap mt60">
            <a 
            href="#"
            className="btn btn--market btn--apple btn--with-icon btn--icon-left"
            >
              <svg className="woox-icon icon-apple">
                <use xlinkHref="#icon-apple">
                </use>
                </svg> 
                <div className="text">
                  <span className="sup-title"> download on</span>
                  <span className="sup-title"> Apple Store</span>
                </div>
            </a>
            <a 
            href="#"
            className="btn btn--market btn--apple btn--with-icon btn--icon-left"
            >
              <svg className="woox-icon icon-if-59-play-843782">
                <use xlinkHref="#icon-if-59-play-843782"> </use>
                </svg> 

                <div className="text">
                  <span className="sup-title"> download on</span>
                  <span className="sup-title"> Google Play </span>
                </div>
            </a>
          </div>
        </div>


          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt30">
            <img className="responsive" src="img/phone.png" alt="phone" />
          </div>
      </div>
    </div>
    </section>
  );
};

export default App;
