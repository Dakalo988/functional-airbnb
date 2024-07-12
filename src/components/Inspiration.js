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
            <img src="https://s3-alpha-sig.figma.com/img/3679/a298/196b41cd98272a64e19b9681beb746f0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=USUFt7RFGCxZFzXT7ak8kw8iybjikbgLauotqnRCfOdbgGJnAeY8QOK-mV-4DWVV1K9pGt0JZLm~EOdlzeOKdj~T1yymUoFt4I-umCNVfPgDXJHqIO6LC19-9nxFx260ATiTtFNUr1x6-ySktziWnQRF~9di6GfHF7aLhibnBMhvH7DWO0bkbkKnKIHJROUOFe0g7UuAvkmrO5CL4fgHuveSyJ-SK3bbWvq2fEIA7kRPDuXPmrTeH7Brv0HcW5N0v5xe~17nT~Ux6TwZRp8hlwJ06LPx6woPEf0vWgsEPY1xwtsdbhCPqQZAWdsACjGoiwC68uvevcwiu9Dh3zi6lg__" alt="Things to do on your trip" />
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
          <img src="https://s3-alpha-sig.figma.com/img/43b8/8762/e0a70df6eb554b492d0b7d2633a1ecb1?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oUj~mgbRJOAn-Y~cSQ5nAaD4BFQ~xUFzEIk~GNI7amFNHrqSW~9wCrrflUQjhdiYQwvejAQp4JdjYWoyRAYVaZXBvbwkPLyFq-YUr-3aKUnhoLvkFm077TKbuaHEg2KL0HwuSege8outJs84E9IOX-4LmRoejCA-Kgt3OrXKqvaHG6M550gll5fUCkqL5AwK517tZa8Fr0hMCHmwd8Z-2EG3C~mRHIY6sQt-MH0zNdBawO9zk-HPY81G~Ynd60rk6DXsmmtEJ7qivgr8M80gteiB0RVuVrBzAcEOuShjx-tUYfC5Yi~eZsrvgf-xULQNorSkGaUL0oDHLMFOtD03AQ__" alt="Airbnb gift cards" className="gift-cards-image"/>
        </div>
      </div>

      {/* Section 4: Questions about Hosting */}
      <div className="hosting-section">
        <img src="https://s3-alpha-sig.figma.com/img/5ed8/a779/efd4d7b308f8c6bdd6b801b638cc68d2?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OAAISHTvKj1vizWZn3NY2t6m715640Crb7-s-BgY0jWiJN1v9hv2JYuPJ2kD~vteCtk4Z7nZEHA7cz5DU0SlITCs9oT5fr1Qpf-DZspn5lgcoVK0w3jZGXlk34VZ5U134VAw3IFI9vUz-IMGLyU3gtXz-aez549Uf4gbOFR~Tjg4I0MHrGdidN1NPA53KQq23pBxDTXWMuCbA7RBj~wkefE9SgGP89-nfPM-BPqfxPpTjE9jDJC7h83RKL1769sdd3yo67QdwsJPlfmdO8FIQYftXDX1HRCe6Zp-2vLnQ3tqBvAnvbW2PuU~DNZUgrDgZ8fVnWBzSFtBcZYkIuN0uw__" alt="Questions about hosting?" />
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
