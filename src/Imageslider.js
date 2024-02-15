import React, { useState, useEffect, useCallback } from 'react';
import { data } from './data';

const Imageslider = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const nextclickHandler= useCallback(()=>{
        setActiveIndex((activeIndex+1)%(data.length));
    },[activeIndex]);

    const previousclickHandler=()=>{
        if(!activeIndex) setActiveIndex(data.length-1);
        else setActiveIndex(activeIndex-1);
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            nextclickHandler();
        },5000);

        return ()=>{
            clearTimeout(timer);
        }

    },[activeIndex, nextclickHandler]);

  return (
    <div>
        <h1 className="text-3xl font-bold underline">Carousel</h1>
        <div className='flex justify-center'>
            <button className='font-bold m-10 p-4' onClick={previousclickHandler}>Previous</button>
            { data.map((url,i)=> (<img key={url} src={url} alt='wallpaper' className={'w-[350px] h-[350px] ' + (activeIndex === i? "block":"hidden")}/>))}
             {/* we are loading all the images in the beginning and setting images visible or hidden via css acc. to index */}
            <button className='font-bold m-10 p-4' onClick={nextclickHandler}>Next</button>
        </div>
    </div>
  )
}

export default Imageslider;