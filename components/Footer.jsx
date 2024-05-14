import {
  TiSocialFacebook,
  TiSocialYoutube,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from 'react-icons/ti';
// import logoprimary from '../assets/logo-primary.png';
import {FooterICON} from "./index";

const Footer = () => {

  const social = [
    {
      link: '#',
      name: 'Facebook',
      icon: <TiSocialFacebook />,
    },
    {
      link: '#',
      name: 'Twitter',
      icon: <TiSocialTwitter />,
    },
    {
      link: '#',
      name: 'Linkedin',
      icon: <TiSocialLinkedin />,
    },
    {
      link: '#',
      name: 'Instagram',
      icon: <TiSocialInstagram />,
    },
  ];

  return (
    <footer className="footer" id='site-footer'>
      <canvas id="can"></canvas>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12">
            <div className="widget w-info">
              <a href="/" className="site-logo">
                <ing src="img/logo-primary.png" alt="" />
                <FooterICON />
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit tempora quaerat maxime mollitia provident aperiam
                nostrum qui minus, porro libero accusamus hic est fugit ! Vel
                iusto quisquam perferendis amet ipsa?
              </p>
            </div>

            <div className=" widget w-contacts">
              <ul className=" socials social--white">
                {social.map((social, index) => (
                  <li key={index} className="social-item">
                    <a href={social.link} className="woox-icon">
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12">
              <span>@ All right reserved 2024</span>
              <span>
                <a href="/" className="text-[#ffba00]">
                  Enoch Tech
                </a>{' '}
                - Liquidity Pool and ICO 
              </span>

              <div className="logo-design">
                <ing src="img/logo-fire.png" alt="" />
                <div className="design-wrap">
                  <div className="sub-title"> Design By</div>
                  <a
                    href="https://deve.com"
                    className="logo-title"
                  >
                    @DeFi Prince
                  </a>
                </div>
              </div>

              <div className="logo-desgin logo-design-crumina">
                <ing src="img/crumina-logo.png" alt="" />
                <div className="design-wrap">
                  <div className=""> Design By</div>
                  <a href="https://theblockc" className="logo-title">
                    @The BlockChain
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="back-to-top">
        <svg className="woox-icon icon-top-arrow">
          <use xlinkHref="#icon-top-arrow"></use>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;

