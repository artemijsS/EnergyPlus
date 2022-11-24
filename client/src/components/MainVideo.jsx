import styles from '../styles';
import { useRef, useState } from "react";
import clip  from '../assets/clip.mp4';

const MainVideo = () => {
    return (
        // Navbar is a component
        <div className={`flex-1 ${styles.flexCenter} 
            flex-col items-center xl:px-0 sm:px-16 px-6`}>
            <div className='justify-between items-center w-full'>
                <video src={clip} alt="clip.mp4"
                    autoPlay  
                    loop
                    muted
                    className='flex-1 object-cover' // Is supposed to shrink or expand the video the length of the parent div
                    >Your browser does not support the video tag.</video>
            </div>
        </div>
    )
}




// const clip = document.querySelectorAll('.clip');
// for (let i = 0; i < clip.length; i++) {
//   clip[i].addEventListener('mouseenter', function (e) {
//     clip[i].play();
//   });
//   clip[i].addEventListener('mouseout', function (e) {
//     clip[i].pause();
//   });
// }
export default MainVideo;

