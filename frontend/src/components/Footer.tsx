import youtube from "../assets/images/youtube.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-black text-white">
      <h2 className="p-5 font-bold">
        <a href="/">BLUE VELLUM</a>
      </h2>
      <section className="md:grid-cols-3 p-5 grid">
        <div>
          <h4 className="font-bold mb-4">CUSTOMER SERVICE</h4>
          <ul>
            <li>
              <NavLink to="/policy/refund-policy">REFUND POLICY</NavLink>
            </li>
            <li>
              <NavLink to="/policy/shipping-delivery">
                SHIPPING & DELIVERY
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 mt-4 md:mt-0">OUR GURANTEE</h4>
          <p>
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
          <h4 className="mb-6 mt-16 md:mt-0 font-bold md:text-center">
            CONTACT US
          </h4>
          <div className="flex md:items-center md:justify-center gap-4">
            <img src={facebook} alt="facebook-logo" className="md:w-10 w-10" />
            <img src={twitter} alt="twitter-logo" className="md:w-10 w-10" />
            <img
              src={instagram}
              alt="instagram-logo"
              className="md:w-10 w-10"
            />
            <img src={youtube} alt="instagram-logo" className="md:w-10 w-10 " />
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
