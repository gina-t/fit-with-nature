
import fit1 from '../assets/fit1.jpg';
import fit2 from '../assets/fit2.jpg';
import fit3 from '../assets/fit3.jpg';
import fit4 from '../assets/fit4.jpg';
import fit5 from '../assets/fit5.jpg';
import fit6 from '../assets/fit6.jpg';
import fit7 from '../assets/fit7.jpg';


export default function Images(){
  return (
    <main className="images bg-blue-950">
      <section className="image-grid container">
        <picture className="image_cont">
          <source
            srcSet={fit1}
            media="(min-width: 1500px)"
            className='opacity-50'
          />
          <source
            srcSet={fit1}
            media="(min-width: 700px)"
            className='opacity-50'
          />
          <img
            data-speed="auto"
            className="opacity-50"
            src={fit1}
            
            alt=""
          />
        </picture>
        <div className="image_cont">
          <img
            data-speed="auto"
            src={fit2}
            className='opacity-50'
            alt=""
          />
        </div>
        <div className="image_cont">
          <img
            data-speed="auto"
            src={fit3}
            className='opacity-50'
            alt=""
          />
        </div>
        <div className="image_cont">
          <img
            data-speed="auto"
            src={fit4}
            className='opacity-50'
            alt=""
          />
        </div>
        <div className="image_cont">
          <img
            data-speed="auto"
            src={fit5}
            className='opacity-50'
            alt=""
          />
        </div>
        <div className="image_cont">
          <img
            data-speed="auto"
            src={fit6}
            className='opacity-50'
            alt=""
          />
        </div>
        <div className="image_cont">
          <img
            data-speed="auto"
            src={fit7}
            className='opacity-50'
            alt=""
          />
        </div>
      </section>
      <div className="spacer"></div>
    </main>
  );
};


