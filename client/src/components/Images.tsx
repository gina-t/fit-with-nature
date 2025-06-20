
import fitThree from '../assets/fitThree.jpg';
import fitFive from '../assets/fitFive.jpg';
import fitSix from '../assets/fitSix.jpg';
import fitSeven from '../assets/fitSeven.jpg';
import fitEight from '../assets/fitEight.jpg';
import fitNine from '../assets/fitNine.jpg';
import fitTwelve from '../assets/fitTwelve.jpg';


export default function Images(){
  return (
    <main className="images bg-blue-950">
      <section className="image-grid container">
        <picture className="image_cont">
          <source
            srcSet={fitEight}
            media="(min-width: 1500px)"
            className='opacity-50'
          />
          <source
            srcSet={fitEight}
            media="(min-width: 700px)"
            className='opacity-50'
          />
          <img
            data-speed="auto"
            className="opacity-50"
            src={fitEight}
            
            alt=""
          />
        </picture>
        <div className="image_cont">
          <img
            data-speed="auto"
            src={fitFive}
            className='opacity-50'
            alt=""
          />
        </div>
        <div className="image_cont">
          <img
            data-speed="auto"
            src={fitNine}
            className='opacity-50'
            alt=""
          />
        </div>
        <div className="image_cont">
          <img
            data-speed="auto"
            src={fitSix}
            className='opacity-50'
            alt=""
          />
        </div>
        <div className="image_cont">
          <img
            data-speed="auto"
            src={fitSeven}
            className='opacity-50'
            alt=""
          />
        </div>
        <div className="image_cont">
          <img
            data-speed="auto"
            src={fitThree}
            className='opacity-50'
            alt=""
          />
        </div>
        <div className="image_cont">
          <img
            data-speed="auto"
            src={fitTwelve}
            className='opacity-50'
            alt=""
          />
        </div>
      </section>
      <div className="spacer"></div>
    </main>
  );
};


