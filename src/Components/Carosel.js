import gsap from 'gsap';
import {ScrollTrigger } from 'gsap/all';
import '../Css/Carosel.css';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
const Carosel = () => {
    useGSAP(() => {
      const images = document.querySelectorAll('.image');
      images.forEach(image => {
        gsap.to(image, {
          duration: 2,
          stagger:1,
          scrollTrigger: {
            trigger: image,
            pin: image,
            start: 'top top',
            anticipatePin: 1,
            scrub:1,
            end:'+=7000',
          }
        });
      });
    });

  return (
    <>
    <div className='container'>
        <div className='mini-container'>
            <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240621101955_Bugatti_Tourbillon_side.jpg&w=700&c=1" alt="" className='image'/>
        </div>
        <div className='mini-container'>
            <img src="https://stat.overdrive.in/uploads/2024/06/Untitled-design-2024-06-21T115000.757-2024-06-a4694e22c0084216687ad02695303632-900x506.png" alt="" className='image'/>
        </div>
        <div className='mini-container'>
            <img src="https://www.largus.fr/images/styles/max_1300x1300/public/2024-06/bugatti-tourbillon-2024-gris-ardh-mk.jpg?itok=nH4F31CH" alt="" className='image'/>
        </div>
        <div className='mini-container'>
            <img src="https://citymagazine.si/en/bugatti-tourbillon-2026-perfect-car-prestige-for-millionaires-is-special-as-a-work-of-art/bugatti-tourbilion-2024-0-22/" alt="" className='image'/>
        </div>
        <div className='mini-container'>
            <img src="https://hips.hearstapps.com/hmg-prod/images/2026-bugatti-tourbillon-2-6671bad3ced4c.jpg?crop=1xw:0.8888888888888888xh;center,top&resize=2048:*" alt="" className='image'/>
        </div>
        <div className='mini-container'>
            <img src="https://hips.hearstapps.com/hmg-prod/images/2026-bugatti-tourbillon-10-6671bb64d25c6.jpg" alt="" className='image'/>
        </div>
        <div className='mini-container'>
            <img src="https://d2ox13tjqpxop5.cloudfront.net/BUGATTI-2024/Models/Tourbillon/07_Gallery/BUGATTI_Tourbillon_25.jpg" alt="" className='image'/>
        </div>
        <div className='mini-container'>
            <img src="https://watchesbysjx.com/wp-content/uploads/2024/06/bugatti-tourbillon-interior.jpg" alt="" className='image'/>
        </div>
        <div className='mini-container'>
            <img src="https://watchesbysjx.com/wp-content/uploads/2024/06/bugatti-tourbillon-cluster-closeup-1.jpg" alt="" className='image'/>
        </div>
    </div>

    </>
  )
}


export default Carosel