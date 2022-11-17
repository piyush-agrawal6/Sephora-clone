import "./Footer.css";
import { RiCustomerService2Line } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobileAlt, FaTiktok } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube, BsPinterest } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <p>Website feedback? Let us know ▸</p>
      </div>
      <div className="mainFooter">
        <div className="footer2">
          <div>
            <GoLocation fontSize="1.4rem" />
            <div>
              <p>Find a Store</p>
              <p>Choose Your Store</p>
            </div>
          </div>
          <div>
            <RiCustomerService2Line fontSize="1.4rem" />
            <div>
              <p>Live Beauty Help</p>
              <p>Chat is unavailable</p>
            </div>
          </div>
          <div>
            <AiFillAppstore fontSize="1.4rem" />
            <div>
              <p>Get the App</p>
              <p>Text “APP” to 365481</p>
            </div>
          </div>
          <div>
            <FaMobileAlt fontSize="1.4rem" />
            <div>
              <p>Get Sephora Text Alerts</p>
              <p>Sign up Now</p>
            </div>
          </div>
        </div>
        <div className="footer3">
          <div>
            <h3>About Sephora</h3>
            <p>About Sephora</p>
            <p>Newsroom</p>
            <p>Careers</p>
            <p>Sephora Social Impact</p>
            <p>Supply Transparency</p>
            <p>Affiliates</p>
            <p>Sephora Events</p>
            <p>Gift Cards</p>
            <p>Sephora Global Sites</p>
            <p>Diversity and Inclusion</p>
          </div>
          <div>
            <h3>My Sephora</h3>
            <p>Beauty Insider</p>
            <p>Sephora Credit Card</p>
            <p>Community Profile</p>
            <p>Order Status</p>
            <p>Purchase History</p>
            <p>Account Settings</p>
            <p>Beauty Advisor</p>
            <p>Beauty Offers</p>
            <p>Quizzes & Buying Guides</p>
          </div>
          <div>
            <h3>Customer Service</h3>
            <p>Returns & Exchanges</p>
            <p>Delivery and Pickup</p>
            <p>Shipping</p>
            <p>Billing</p>
            <p>International Shipments</p>
            <p>Beauty Services FAQ</p>
            <p>Sephora at Kohl's</p>
            <p>Sephora Inside JCPenney</p>
            <p>Store Locations</p>
            <p>Online Ordering</p>
          </div>
          <div>
            <h3>Region & Language</h3>
            <p>United States - English</p>
            <p>Canada - English</p>
            <p>Canada - Français</p>
            <p>Accessibility</p>
            <p>Klarna & Afterpay</p>
            <p>Loves Book</p>
            <p>Rewards Bazaar</p>
            <p>Report a Vulnerability</p>
            <p>Sephora Accelerate</p>
            <p>Checkout on Instagram</p>
          </div>
          <div className="hide">
            <h3>My Sephora</h3>
            <p>Beauty Insider</p>
            <p>Sephora Credit Card</p>
            <p>Community Profile</p>
            <p>Order Status</p>
            <p>Purchase History</p>
            <p>Account Settings</p>
            <p>Beauty Advisor</p>
            <p>Beauty Offers</p>
            <p>Quizzes & Buying Guides</p>
          </div>
        </div>
        <div className="footer4">
          <h1>We Belong to Something Beautiful</h1>
          <div>
            <input placeholder="Enter your Email Adress" className="hide" />
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
          </div>
        </div>
        <div className="footer5">
          <div>
            <p>© 2022 Sephora USA, Inc. All rights reserved.</p>
            <p>
              Privacy PolicyTerms of UseAccessibility Sitemap Your Privacy
              Choices
            </p>
            <p>1-877-737-4672 TTY: 1-888-866-9845</p>
          </div>
          <div>
            <BsInstagram />
            <ImFacebook2 />
            <BsTwitter />
            <BsYoutube />
            <BsPinterest />
            <FaTiktok />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
