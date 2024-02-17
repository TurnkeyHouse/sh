"use client"
import styles from './SecondSlider.module.css';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// import { Helmet } from 'react-helmet';
function SecondSlider({s5main,s5text1,s5text2,s5text3,s5name1,s5name2,s5name3}) {
     // --------------------------------------------
     const slides2= [
        {src:"/people2.webp" ,    p :"Iudicem sed iudicem quo commodo si fabulas, possumus instituendarum et cupidatat, fore cernantur ab aute eram. Esse doctrina ex appellat se nulla et ullamco. Arbitror aliqua ipsum nam anim, et labore id fore ex o veniam expetendis o senserit dolore offendit offendit, ne lorem eram quae incididunt, quorum iudicem e velit fugiat ea varias familiaritatem expetendis lorem singulis." ,   name:"Jon",role:"doctor"},
        {src:"/peple1.webp",  p :"instituendarum et cupidatat, fore cernantur ab aute eram. Esse doctrina ex appellat se Iudicem sed iudicem quo commodo si fabulas, possumus instituendarum et cupidatat, fore cernantur ab aute eram.",    name:"Tom",role:"trener"},
        {src:"/people3.webp" , p :"instituendarum et cupidatat, fore cernantur ab aute eram. Esse doctrina ex appellat se instituendarum et cupidatat, fore cernantur ab aute eram. Esse doctrina ex appellat se" ,   name:"Frank",role:"builder"},
    ];
      const [currentIndex2,setСurrentIndex2]= React.useState(0);

      // Set up automatic slide transition
      useEffect(() => {
        const intervalId = setInterval(() => {
          goToNext2();
        }, 5000); // Change the delay time as needed
        return () => clearInterval(intervalId);
      }, [currentIndex2]);
    
      const goToPrevios2 = () => {
        const isFirstSlide = currentIndex2 === 0;
        const newIndex = isFirstSlide ? slides2.length - 1 : currentIndex2 - 1;
        setСurrentIndex2(newIndex);
      };
    
      const goToNext2 = () => {
        const isLastSlide = currentIndex2 === slides2.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex2 + 1;
        setСurrentIndex2(newIndex);
      };
    
      const goToSlide2 = (slideIndex) => {
        setСurrentIndex2(slideIndex);
      };
    
      
  return (
    <>
             
                    <div  className={styles.slideStyles2} >
                    <div  className={styles.info} > 
                    <h2 className={styles.titleSlider}>What peoples say <span  className={styles.redspan}>about us</span> ?</h2>
                    <div  className={styles.line} >  </div>
                    </div>
                    
                    <div  className={styles.slideItem} >
                    <div  className={styles.sliderBottom} >
                       <Image  height={100} width={100} src={slides2[currentIndex2].src} alt="peple"/> 
                       {/* <p>""</p> */}
                       <div  className={styles.sliderBottomLeft} >
                       <h4>{slides2[currentIndex2].name}</h4>
                       <p className={styles.role}>{slides2[currentIndex2].role}</p>
                       </div>
                       </div>
                          <p className={styles.textSlider}>{slides2[currentIndex2].p}</p>
                          {/* <div  className={styles.dotsContainer}>
              {slides2.map((item,slideIndex)=><div onClick={() => goToSlide2(slideIndex)} className={styles.dots}  key={slideIndex}>.</div>)}
                    </div> */}
                          </div>
                        {/* <div className={styles.leftArrowStyles2} onClick={goToPrevios2}>
                        <Image height={22} width={22} src="/images/rarrow.png"  alt="arrow" />
                          </div>
                        <div className={styles.rightArrowStyles2} onClick={goToNext2}> 
                        <Image height={22} width={22} src="/images/larrow.png" alt="arrow" />
                          </div> */}
                    </div>
                    
    </>
  );
}
export default SecondSlider;
