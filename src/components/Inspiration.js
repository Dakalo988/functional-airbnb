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
            <img src="https://s3-alpha-sig.figma.com/img/d5c1/6cba/8bc1958720a3d767d19d62a93cd1ff30?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0Lyb4aos8pjrvvRGGzlY~MCbvauii1fp4jtdKLH~WH8FmLZlVs25us7d9AzOnVtaxmGTDAkXmCx1fS-CQzn5sXFBw~EdWDjp6J61G9gkurNMqM5LjhqKdPjB6wmkDscfp-5H8MHCrhnFV68I61IZWGSAP1a27H62nl291wSgxkgzIKAVhI5xBYdkmRnNTIHqQ13zRYoldV-87pPmetQQtRG6NeWO3KfURxRlbWrfLsqYyzb4CC7DGDcVR-qJveugU4oiYgZIRtFCqDClhBddzElphLgTgY1hqW3sWbhzxcJ~HChStJr4VIX4YKlYIHybnwAqw9GVza-mzFlTp0yzw__" alt="Sandton City Hotel" />
            <div className="card-info">
              <h3>Sandton City Hotel</h3>
              <p>53 km away</p>
            </div>
          </div>
          <div className="city-card joburg-city">
            <img src="https://s3-alpha-sig.figma.com/img/d5c1/6cba/8bc1958720a3d767d19d62a93cd1ff30?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0Lyb4aos8pjrvvRGGzlY~MCbvauii1fp4jtdKLH~WH8FmLZlVs25us7d9AzOnVtaxmGTDAkXmCx1fS-CQzn5sXFBw~EdWDjp6J61G9gkurNMqM5LjhqKdPjB6wmkDscfp-5H8MHCrhnFV68I61IZWGSAP1a27H62nl291wSgxkgzIKAVhI5xBYdkmRnNTIHqQ13zRYoldV-87pPmetQQtRG6NeWO3KfURxRlbWrfLsqYyzb4CC7DGDcVR-qJveugU4oiYgZIRtFCqDClhBddzElphLgTgY1hqW3sWbhzxcJ~HChStJr4VIX4YKlYIHybnwAqw9GVza-mzFlTp0yzw__" alt="Joburg City Hotel" />
            <div className="card-info">
              <h3>Joburg City Hotel</h3>
              <p>168 km away</p>
            </div>
          </div>
          <div className="city-card woodmead">
            <img src="https://s3-alpha-sig.figma.com/img/d5c1/6cba/8bc1958720a3d767d19d62a93cd1ff30?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0Lyb4aos8pjrvvRGGzlY~MCbvauii1fp4jtdKLH~WH8FmLZlVs25us7d9AzOnVtaxmGTDAkXmCx1fS-CQzn5sXFBw~EdWDjp6J61G9gkurNMqM5LjhqKdPjB6wmkDscfp-5H8MHCrhnFV68I61IZWGSAP1a27H62nl291wSgxkgzIKAVhI5xBYdkmRnNTIHqQ13zRYoldV-87pPmetQQtRG6NeWO3KfURxRlbWrfLsqYyzb4CC7DGDcVR-qJveugU4oiYgZIRtFCqDClhBddzElphLgTgY1hqW3sWbhzxcJ~HChStJr4VIX4YKlYIHybnwAqw9GVza-mzFlTp0yzw__" alt="Woodmead Hotel" />
            <div className="card-info">
              <h3>Woodmead Hotel</h3>
              <p>30 miles away</p>
            </div>
          </div>
          <div className="city-card hyde-park">
            <img src="https://s3-alpha-sig.figma.com/img/d5c1/6cba/8bc1958720a3d767d19d62a93cd1ff30?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0Lyb4aos8pjrvvRGGzlY~MCbvauii1fp4jtdKLH~WH8FmLZlVs25us7d9AzOnVtaxmGTDAkXmCx1fS-CQzn5sXFBw~EdWDjp6J61G9gkurNMqM5LjhqKdPjB6wmkDscfp-5H8MHCrhnFV68I61IZWGSAP1a27H62nl291wSgxkgzIKAVhI5xBYdkmRnNTIHqQ13zRYoldV-87pPmetQQtRG6NeWO3KfURxRlbWrfLsqYyzb4CC7DGDcVR-qJveugU4oiYgZIRtFCqDClhBddzElphLgTgY1hqW3sWbhzxcJ~HChStJr4VIX4YKlYIHybnwAqw9GVza-mzFlTp0yzw__" alt="Hyde Park Hotel" />
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
            <img src="https://s3-alpha-sig.figma.com/img/3679/a298/196b41cd98272a64e19b9681beb746f0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=USUFt7RFGCxZFzXT7ak8kw8iybjikbgLauotqnRCfOdbgGJnAeY8QOK-mV-4DWVV1K9pGt0JZLm~EOdlzeOKdj~T1yymUoFt4I-umCNVfPgDXJHqIO6LC19-9nxFx260ATiTtFNUr1x6-ySktziWnQRF~9di6GfHF7aLhibnBMhvH7DWO0bkbkKnKIHJROUOFe0g7UuAvkmrO5CL4fgHuveSyJ-SK3bbWvq2fEIA7kRPDuXPmrTeH7Brv0HcW5N0v5xe~17nT~Ux6TwZRp8hlwJ06LPx6woPEf0vWgsEPY1xwtsdbhCPqQZAWdsACjGoiwC68uvevcwiu9Dh3zi6lg__" alt="Things to do from home" />
            <div className="experience-info">
              <h3>Things to do from home</h3>
              <button>Online Experiences</button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Shop Airbnb Gift Cards */}
      <div className="gift-cards-section">
        <h2>Shop Airbnb gift cards</h2>
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
          <h3>Questions about hosting?</h3>
          <button>Ask a Superhost</button>
        </div>
      </div>

      {/* Section 5: Pre-footer */}
      <div className="pre-footer">
        <h2>Inspiration for future getaways</h2>
        <div className="getaways-links">
          <a href="#">Destinations for arts & culture</a>
          <a href="#">Destinations for outdoor adventure</a>
          <a href="#">Mountain cabins</a>
          <a href="#">Beach destinations</a>
          <a href="#">Popular destinations</a>
          <a href="#">Unique Stays</a>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
