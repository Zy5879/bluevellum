"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const youtube_svg_1 = __importDefault(require("../assets/images/youtube.svg"));
const facebook_svg_1 = __importDefault(require("../assets/images/facebook.svg"));
const twitter_svg_1 = __importDefault(require("../assets/images/twitter.svg"));
const instagram_svg_1 = __importDefault(require("../assets/images/instagram.svg"));
const stripe_jpg_1 = __importDefault(require("../assets/images/stripe.jpg"));
const react_router_dom_1 = require("react-router-dom");
function Footer() {
    return (<footer className="bg-black text-white text-footer">
      <h2 className="p-5 font-bold">
        <a href="/">BLUE VELLUM</a>
      </h2>
      <section className="md:grid-cols-3 p-5 grid justify-center">
        <div>
          <h4 className="font-bold mb-4">CUSTOMER SERVICE</h4>
          <ul>
            <li>
              <react_router_dom_1.NavLink to="/policy/refund-policy">REFUND POLICY</react_router_dom_1.NavLink>
            </li>
            <li>
              <react_router_dom_1.NavLink to="/policy/shipping-delivery">
                SHIPPING & DELIVERY
              </react_router_dom_1.NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 mt-4 md:mt-0">OUR GURANTEE</h4>
          <p className="text-sm">
            I would like to personally thank each and every customer who
            supports my dream as a small business owner. I love making products
            you purchase and spend numerous hours trying to develop a perfect
            product. We all know nothing is perfect, I will do my best to
            correct defects not due to normal wear and tear. If your product
            fails due to a defect in materials or workmanship, we will repair or
            replace it, at our discretion after close inspection of the product.
          </p>
        </div>
        <div>
          <h4 className="mb-6 mt-10 md:mt-0 font-bold md:text-center">
            CONTACT/FOLLOW US
          </h4>
          <div className="flex md:items-center md:justify-center gap-4">
            <a href="https://www.facebook.com/BlueVellum/">
              <img src={facebook_svg_1.default} alt="facebook-logo" className="md:w-10 w-10"/>
            </a>
            <a href="https://twitter.com/blue_vellum">
              <img src={twitter_svg_1.default} alt="twitter-logo" className="md:w-10 w-10"/>
            </a>
            <img src={instagram_svg_1.default} alt="instagram-logo" className="md:w-10 w-10"/>
            <a href="https://www.youtube.com/channel/UCLv8YD6JTNdkozfp2ZIhbqg">
              <img src={youtube_svg_1.default} alt="instagram-logo" className="md:w-10 w-10 "/>
            </a>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-start p-5 mt-8">
        <p className="text-xs">© BLUE VELLUM LEATHER - CUSTOM LEATHER GOODS</p>
        <div>
          <img src={stripe_jpg_1.default} alt="stripe=logo" className="w-full h-6 mt-3"/>
        </div>
      </div>
    </footer>);
}
exports.default = Footer;
