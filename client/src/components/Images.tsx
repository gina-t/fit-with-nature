import fit1 from '../assets/fit1.jpg';
import fit2 from '../assets/fit2.jpg';
import fit3 from '../assets/fit3.jpg';
import fit4 from '../assets/fit4.jpg';
import fit5 from '../assets/fit5.jpg';
import fit6 from '../assets/fit6.jpg';
// import fit7 from '../assets/fit7.jpg';
import ContentCardOne from './ContentCardOne';
import ContentCardTwo from './ContentCardTwo';
import ContentCardThree from './ContentCardThree';
import ContentCardFour from './ContentCardFour';

export default function Images(){
  return (
    <main className="images bg-blue-950">
      <section className="image-grid container">

        {/* image one */}
        <picture className="image_cont">
          <source
            srcSet={fit1}
            media="(min-width: 1500px)"
          />
          <source
            srcSet={fit1}
            media="(min-width: 700px)"
          />
          <img
            data-speed="auto"
            className="opacity-50"
            src={fit1}
            alt="female athlete"
          />
        </picture>

        {/* content card one replaces image two */}
        <div className="image_cont">
          <ContentCardOne />
        </div>

        {/* image three */}
        <div className="image_cont">
          <img
            data-speed="auto"
            src={fit5}
            className='opacity-50'
            alt="female athlete"
          />
        </div>

        {/* image four */}
        <div className="image_cont">
          <img
            data-speed="auto"
            src={fit4}
            className='opacity-50'
            alt="female athlete"
          />
        </div>

        {/* content card two replaces image five */}
        <div className="image_cont">
          <ContentCardTwo />
        </div>

        {/* image six */}
        <div className="image_cont">
          <img
            data-speed="auto"
            src={fit3}
            className='opacity-50'
            alt="female athlete"
          />
        </div>
        
        {/* image seven */}
        <div className="image_cont">
          <img
            data-speed="auto"
            src={fit6}
            className='opacity-50'
            alt="female athlete"
          />
        </div>

        {/* content card three replacing image 8 */}
        <div className="image_cont">
          <ContentCardThree />
        </div>

        {/* image nine */}
        <div className="image_cont">
          <img
            data-speed="auto"
            src={fit2}
            className='opacity-50'
            alt="female athlete"
          />
        </div>

        {/* contact card four replacing image ten */}
        <div className="image_cont">
          <ContentCardFour />
        </div>

      </section>
      <div className="spacer"></div>
    </main>
  );
};


