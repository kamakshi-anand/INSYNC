import React from "react";

//NEW LIBRARY- included react bootstrap carousel-mdbreact
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

import image1 from "./images/activity2.JPG";
import image2 from "./images/rishi sad.jpg";
import image3 from "./images/food3.jpg";
import image4 from "./images/kids.jpg";


const CarouselPage = () => {
  return (
    <MDBContainer>
      <h4 className="mt-5 mb-2">Family Moments</h4>
      <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src={image1} alt="First slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">space suit</h3>
              {/* <p>First text</p> */}
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="d-block w-100" src={image2} alt="Second slide" />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Hectic Day</h3>
              {/* <p>Second text</p> */}
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100" src={image3} alt="Third slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Yummy kofta</h3>
              {/* <p>Third text</p> */}
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img className="d-block w-100" src={image4} alt="Mattonit's item" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Ice-cream time</h3>
              {/* <p>Taken june 21th by @mattonit</p> */}
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;