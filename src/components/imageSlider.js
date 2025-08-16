import { useRef, useState } from "react";
import styled from "styled-components";

const ImageSliderContainer = styled.div`
    overflow: hidden;
    position: relative;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: rgb(0 0 0 /50%);
    .fa-solid{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 30px;
        color: var(--background-color);
        z-index: 2;
        cursor: pointer;
        &:hover{
            color: var(--main-color);
        }
    }
    .fa-chevron-left{
        left: 20px;
    }
    .fa-chevron-right{
        right: 20px;
    }
    >img{
        max-height: 100%;
        max-width: 100%;
        transition: 300ms;
    }
    .right-enter-image{
        animation: right-enter 1 700ms linear;
    }
    .left-enter-image{
        animation: left-enter 1 700ms linear;
    }
    @keyframes right-enter {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes left-enter {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

function ImageSlider({links}){

    let[image, setImage] = useState({index : 0, class : "right-enter-image"});

    const img = useRef(null);

    return(
        <ImageSliderContainer>
            <i class="fa-solid fa-chevron-left" 
                onClick={()=>{
                    img.current.style.transform = `translateX(100%)`;
                    img.current.style.opacity = `0`;
                    setTimeout(()=>{
                        setImage({index : image.index === 0 ? links.length-1 : image.index-1, class : "left-enter-image"});
                    },500)  
                }}
            />
            <i class="fa-solid fa-chevron-right"
                onClick={()=>{
                    img.current.style.transform = `translateX(-100%)`;
                    img.current.style.opacity = `0`;
                    setTimeout(()=>{
                        setImage({index : image.index < links.length-1 ? image.index+1 : 0, class : "right-enter-image"});
                    },500) 
                }}
            />
            <img alt="image" src={links[image.index]} key={links[image.index]} className={image.class} ref={img}></img>
        </ImageSliderContainer>
    );
}

export default ImageSlider;