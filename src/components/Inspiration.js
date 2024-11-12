import React from 'react';
import './Inspiration.css';

const Inspiration = () => {
  return (
    <div className="inspiration-container">
      {/* Section 1: Cards Section */}
      <div className="cards-section">
        <h2>Inspiration for your next trip</h2>
        <div className="cards-row">
          <div className="city-card sandton-city">
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-820733145568572294/original/0c68a135-b239-4a95-b3d6-ad89816cd922.jpeg?im_w=1200" alt="Sandton City Hotel" />
            <div className="card-info">
              <h3>Sandton City Hotel</h3>
              <p>53 km away</p>
            </div>
          </div>
          <div className="city-card joburg-city">
            <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/82a3d8ea-c9f1-4a2f-975e-7006723db174.png?im_w=1440&im_q=highq" alt="Joburg City Hotel" />
            <div className="card-info">
              <h3>Joburg City Hotel</h3>
              <p>168 km away</p>
            </div>
          </div>
          <div className="city-card woodmead">
            <img src="https://a0.muscache.com/im/pictures/fcae1bbd-6e0f-4296-ac13-952acaf8ed42.jpg?im_w=720" alt="Woodmead Hotel" />
            <div className="card-info">
              <h3>Woodmead Hotel</h3>
              <p>30 miles away</p>
            </div>
          </div>
          <div className="city-card hyde-park">
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-599990860987526519/original/1287e19e-b680-42a6-8d62-2ec1ef213be6.jpeg?im_w=1200" alt="Hyde Park Hotel" />
            <div className="card-info">
              <h3>Hyde Park Hotel</h3>
              <p>34 km away</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Discover Airbnb Experiences */}
      <div className="discover-experiences">
        <h2>Discover Airbnb Experiences</h2>
        <div className="experiences-row">
          <div className="experience-image trip">
            <img src="https://s3-alpha-sig.figma.com/img/3679/a298/196b41cd98272a64e19b9681beb746f0?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qnrK7UtuaDie8ftANhybc0HvdU3U5FMmihEsUmdnNqJ3okHc53YlGVvlgNyitZFwmRUM3IEnvaOGMAa2gisJIXDy1MfysdZAp2Y5C~yOhtEhYtIWHM1sVEveT~Z5Lw638egE35fic1PtsyiMI09-r1Qo7FCMTLC6JAmWpcv3TwNa7An35Ros0Ciw0Jjs9LZ5gbP77ltksyWtROtHqBn~00S5uPSVk4ue78Z4uAqsmyke8-kDTUtgn7lSGUp5D8KB6m5pzMLLvdm1yyWXIEiuJvVwnVEAiCBvgn9~eW2fz~igXMt9yCP~eFLqC-UAil0RYx6nuGKC4TE23QkDEU6LYQ__" alt="Things to do on your trip" />
            <div className="experience-info">
              <h3>Things to do on your trip</h3>
              <button>Experiences</button>
            </div>
          </div>
          <div className="experience-image home">
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-782615921189136934/original/c67f78f1-5807-449a-9a88-753b7fa62d6a.jpeg?im_w=1440&im_q=highq" alt="Things to do from home" />
            <div className="experience-info">
              <h3>Things to do from home</h3>
              <button>Online Experiences</button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Shop Airbnb Gift Cards */}
      <div className="gift-cards-section">
        <div className="gift-cards-content">
          <div className="left-content">
            <p>Shop Airbnb gift cards</p>
            <button>Learn more</button>
          </div>
          <img src="https://s3-alpha-sig.figma.com/img/43b8/8762/e0a70df6eb554b492d0b7d2633a1ecb1?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pKJ16ZzvXzGx3j2tK9vLkkXQj48-pCEcnLGZbjFdQYAQonOCKcdIQRQ6vaJGSlI~skWTDQtCYlK~JPEKLus6q6h4QsNKU0R1npAnEYbB2qnA2a-Aiz~BWB8fApfq3nosFNI8yuKz0LAx3rQ8CbJyBE6l54TdqwjTTkvVAjwohO6inMnnKlldGpvBzXGvkidrAkWk6jQkmbBjUJ6OteGALLoUjK-ZkNgM1tUQx0DPuxS~WWzxOkkMRJtrPEckMI4kgJc6~42JnUGraIIYIUD8~F4eKPQNsc-CzrAd~AJ8lp6FaxcfTSxkqs0S4dkbtPhsAhS47ygOjetFv7dK-x-E5A__" alt="Airbnb gift cards" className="gift-cards-image"/>
        </div>
      </div>

      {/* Section 4: Questions about Hosting */}
      <div className="hosting-section">
        <img src="https://s3-alpha-sig.figma.com/img/5ed8/a779/efd4d7b308f8c6bdd6b801b638cc68d2?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IRRwaAu5h~gqDZyuA-PmidzXGj-jMcZWi-XvcpcV2RVvQWPf9dz4TJamzjy-zAxAfQx6U56AlkZF3qoYpw~RzzmIJ5jibAxXSK2Ccw0s1wWGEpJibSsO6nZ6DS8OJpAIEjh8haNFc~jngKzBSejQXfrgmCt30t9G1OZQOndb~hmdLdjeyxA2JqsqcyZms53ufLJxWZk3KXsRtMhRWL4SxfThqyYPxf23EEK4O38xkJYjWaVipR2PLlhswfpSjLCCg0~4FcHkw3z-gyIOiYtWOxhh1aSZmSs5FTxqPDYof5yVnL43Ibe5bsu~YKswTE-I6Aoz58Ghbk5K63s0tnkDgw__" alt="Questions about hosting?" />
        <div className="hosting-content">
          <h4>Questions about hosting?</h4>
          <button>Ask a Superhost</button>
        </div>
      </div>

      {/* Section 5: Pre-footer */}
      <div className="pre-footer">
        <h2>Inspiration for future getaways</h2>
        <div className="getaways-links">
          <a href="Home.js">Destinations for arts & culture</a>
          <a href="Home.js">Destinations for outdoor adventure</a>
          <a href="Home.js">Mountain cabins</a>
          <a href="Home.js">Beach destinations</a>
          <a href="Home.js">Popular destinations</a>
          <a href="Home.js">Unique Stays</a>
        </div>
        <div className="destinations">
          <div>
            <h3>Phoenix</h3>
            <p>Arizona</p>
          </div>
          <div>
            <h3>Hot Springs</h3>
            <p>Arkansas</p>
          </div>
          <div>
            <h3>Los Angeles</h3>
            <p>California</p>
          </div>
          <div>
            <h3>San Diego</h3>
            <p>California</p>
          </div>
          <div>
            <h3>San Francisco</h3>
            <p>California</p>
          </div>
          <div>
            <h3>Barcelona</h3>
            <p>Catalonia</p>
          </div>
          <div>
            <h3>Prague</h3>
            <p>Czechia</p>
          </div>
          <div>
            <h3>Washington</h3>
            <p>District of Columbia</p>
          </div>
          <div>
            <h3>Keswick</h3>
            <p>England</p>
          </div>
          <div>
            <h3>London</h3>
            <p>England</p>
          </div>
          <div>
            <h3>Scarborough</h3>
            <p>England</p>
          </div>
          <div>
            <h3><a href="Home.js">Show more</a></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
