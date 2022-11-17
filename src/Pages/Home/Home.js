import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";
import Data from "./db.json";
import { Link } from "react-router-dom";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4.5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const responsivefeatures = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};
const responsive1 = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 9,
    slidesToSlide: 9,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};

function Home() {
  return (
    <div>
      <Carousel
        responsive={responsive}
        customTransition="1s"
        transitionDuration={1000}
      >
        <div className="HomeSlider">
          <div>
            <img
              src="https://www.sephora.com/contentimages/2022-fragrance-q4-site-home-page-rwd-hero-banner-holiday-value-sets-75-under-us-01..jpg?imwidth=545"
              alt="sliderImg"
            />
            <div className="HomeSlider1">
              <h1>Fragrance Gifts $75 & Under</h1>
              <p>Sets for everyone on your list (including you!)</p>
              <span>SHOP NOW▸</span>
            </div>
          </div>
        </div>
        <div className="HomeSlider">
          <div>
            <img
              src="https://www.sephora.com/contentimages/2022-11-29-stock-up-on-dior-site-desktop-mweb-home-page-rwd-hero-banner-1000x750-en-us-can.jpg?imwidth=545"
              alt="sliderImg"
            />
            <div className="HomeSlider2">
              <h1>Best of Dior</h1>
              <p>Luxe beauty for everyone on your list. </p>
              <span>SHOP NOW▸</span>
            </div>
          </div>
        </div>
        <div className="HomeSlider">
          <div>
            <img
              src="https://www.sephora.com/contentimages/2022-holiday-launch-general-site-desktop-home-page-hero-banner-rwd-v1-product-us-release-1000x750.jpg?imwidth=545"
              alt="sliderImg"
            />
            <div className="HomeSlider3">
              <h1>Value Sets? Obsessed!</h1>
              <p>Limited edition and packed full of fun</p>
              <span>SHOP NOW▸</span>
            </div>
          </div>
        </div>
        <div className="HomeSlider">
          <div>
            <img
              src="https://www.sephora.com/contentimages/2022-10-29-slotting-just-arrived-v2-standard-site-responsive-home-page-hero-banner-4-product-US-CA-handoff_01.jpg?imwidth=545"
              alt="sliderImg"
            />
            <div className="HomeSlider4">
              <h1>Fragrance Gifts $75 & Under</h1>
              <p>Sets for everyone on your list (including you!)</p>
              <span>SHOP NOW▸</span>
            </div>
          </div>
        </div>
      </Carousel>
      <div className="homePro">
        <h1 className="homeHead">Chosen For You</h1>
        <div className="hc1">
          <Carousel
            responsive={responsive1}
            customTransition="1s"
            transitionDuration={1000}
          >
            {Data[0].map((elem, index) => {
              return (
                <Link to={`/products/${elem._id}`} key={index}>
                  <div className="proCon">
                    <div>
                      <img src={elem.imageUrl} alt="proImg" />
                      <span className="homeLook">Quicklook</span>
                    </div>
                    <div>
                      <h1>{elem.brand}</h1>
                      <p>{elem.name}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Carousel>
        </div>
        <h1 className="homeHead">Just Dropped</h1>
        <div className="hc1">
          <Carousel
            responsive={responsive1}
            customTransition="1s"
            transitionDuration={1000}
          >
            {Data[1].map((elem, index) => {
              return (
                <Link to={`/products/${elem._id}`} key={index}>
                  <div className="proCon">
                    <div>
                      <img src={elem.imageUrl} alt="proImg" />
                      <span className="homeLook">Quiclook</span>
                    </div>
                    <div>
                      <h1>{elem.brand}</h1>
                      <p>{elem.name}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Carousel>
        </div>
        <h1 className="homeHead">Selling Fast</h1>
        <div className="hc1">
          <Carousel
            responsive={responsive1}
            customTransition="1s"
            transitionDuration={1000}
          >
            {Data[2].map((elem, index) => {
              return (
                <Link to={`/products/${elem._id}`} key={index}>
                  <div className="proCon">
                    <div>
                      <img src={elem.imageUrl} alt="proImg" />
                      <span className="homeLook">Quiclook</span>
                    </div>
                    <div>
                      <h1>{elem.brand}</h1>
                      <p>{elem.name}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Carousel>
        </div>
        <h1 className="homeHead">Featured Categories</h1>
        <p className="homeP">Shop what's popular now.</p>
        <div className="hc1">
          <Carousel
            responsive={responsivefeatures}
            customTransition="1s"
            transitionDuration={1000}
          >
            {Data[3].map((elem, index) => {
              return (
                <div key={index} className="homeFeatures">
                  <div>
                    <p>{elem.name}</p>
                  </div>
                  <div>
                    <img src={elem.imageUrl} alt="proImg" />
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <h1 className="homeHead">Need a Little Guidance?</h1>
        <p className="homeP">Check out our quizzes and buying guides.</p>
        <div className="hc1">
          <Carousel
            responsive={responsivefeatures}
            customTransition="1s"
            transitionDuration={1000}
          >
            {Data[4].map((elem, index) => {
              return (
                <div key={index} className="homeFeatures">
                  <div>
                    <p>{elem.name}</p>
                  </div>
                  <div>
                    <img src={elem.imageUrl} alt="proImg" />
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Home;
