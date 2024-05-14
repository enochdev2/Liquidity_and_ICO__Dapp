import "../styles/globals.css";

//INTERNAL IMPORT
import { CONTEXT_Provider } from "../context";
import toast, { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
    <CONTEXT_Provider>
      <Component {...pageProps} />
    </CONTEXT_Provider>
     <Toaster/>

      <script src="js/jquery-3.3.1.js"></script>
      <script src="js/js-plugins/leaflet.js"></script>
      <script src="js/js-plugins/MarkerClusterGroup.js"></script>
      <script src="js/js-plugins/crum-mega-menu.js"></script>
      <script src="js/js-plugins/waypoints.js"></script>
      <script src="js/js-plugins/jquery-circle-progress.js"></script>
      <script src="js/js-plugins/segment.js"></script>
      <script src="js/js-plugins/bootstrap.js"></script>
      <script src="js/js-plugins/imagesLoaded.js"></script>
      <script src="js/js-plugins/jquery.matchHeight.js"></script>
      <script src="js/js-plugins/jquery-countTo.js"></script>
      <script src="js/js-plugins/Headroom.js"></script>
      <script src="js/js-plugins/jquery.magnific-popup.js"></script>
      <script src="js/js-plugins/popper.min.js"></script>
      <script src="js/js-plugins/particles.js"></script>
      <script src="js/js-plugins/perfect-scrollbar.js"></script>
      <script src="js/js-plugins/jquery.datetimepicker.full.js"></script>
      <script src="js/js-plugins/svgxuse.js"></script>
      <script src="js/js-plugins/select2.js"></script>
      <script src="js/js-plugins/smooth-scroll.js"></script>
      <script src="js/js-plugins/sharer.js"></script>
      <script src="js/js-plugins/isotope.pkgd.min.js"></script>
      <script src="js/js-plugins/ajax-pagination.js"></script>
      <script src="js/js-plugins/swiper.min.js"></script>
      <script src="js/js-plugins/material.min.js"></script>
      <script src="js/js-plugins/orbitlist.js"></script>
      <script src="js/js-plugins/highstock.js"></script>
      <script src="js/js-plugins/bootstrap-datepicker.js"></script>
      <script src="js/js-plugins/TimeCircles.js"></script>
      <script src="js/js-plugins/ion.rangeSlider.js"></script>
      <script defer src="fonts/fontawesome-all.js"></script>
      <script src="js/main.js"></script>
      <script src="js/svg-loader.js"></script>
    </>
  );
}
