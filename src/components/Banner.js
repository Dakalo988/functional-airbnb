import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='banner'>
        <img
          className='banner-image'
          src='https://s3-alpha-sig.figma.com/img/8021/96a6/83d8b4f496c94cf0a33728d8f6e90e4b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HiYlHmduGkQjDptDiavhA8ebuoK2Bjr9RyTKmQ1Oo5tTH2L-SWasoe9lcPRC~M50vWBTQNO9XHPzVABL2thp~TJ1SbGfgqsfguLDb-AtgJtIhutdQz90mQs7Ry7l5Hq8HQ2d-8StwAAqTQ-n2kzsLzLSNe9C3P~rlOHqY-0EcHY7sw4PMxqObBlyF6-9DtF35Nrzv3hIVVvipcsjUlgwmiGBs2N0UwfNpcC1NjJrSoHMBLhUOgbE9uiCF7~8GflrBemST3ltEAD8veVmeFXXe576bihAoDp-PtA2vl6MpdWphvlgVr0dibG3A2JPhDVwo5K8pACEczPPE3Ufi3CHDg__'
          alt='AirBnB Banner'
        />
      <div className='banner-text-container'>
          <h1 className='banner-text'>Not sure where to go? Perfect.</h1>
          <button className='banner-text-button'>I'm flexible</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;