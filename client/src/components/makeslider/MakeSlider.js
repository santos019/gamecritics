import React, { useState, useEffect, useRef } from "react";
import Slide from "./MakeSlide";
import styled from "styled-components";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 6f9e1569124e2d4fc9f5105fc0e161e163d96ca6
import MImg9 from "../home/centerImgs/centerImg9.jpg";
import MImg10 from "../home/centerImgs/centerImg10.jpg";
import MImg11 from "../home/centerImgs/centerImg11.jpg";
import MImg12 from "../home/centerImgs/centerImg12.jpg";
import MImg13 from "../home/centerImgs/centerImg13.jpg";
import MImg6 from "../home/centerImgs/centerImg6.jpg";
import MImg7 from "../home/centerImgs/centerImg7.jpg";
import MImg8 from "../home/centerImgs/centerImg8.jpg";
import "./MakeSlider.scss";
const Bigcontainer = styled.div`
<<<<<<< HEAD
  width: 100%;
  height: 30rem;
  display: flex; //이미지들을 가로로 나열합니다.
  padding-top: 1rem;
=======
  width: 90rem;
  display: flex; //이미지들을 가로로 나열합니다.

>>>>>>> 6f9e1569124e2d4fc9f5105fc0e161e163d96ca6
  margin: auto;
`;
const Container = styled.div`
  width: 100%;

  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`;
const Button1 = styled.button`
  all: unset;

  margin-top: 10rem;
  height: 3rem;
  color: white;
  border-radius: 10px;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const Button2 = styled.button`
  all: unset;
  margin-top: 10rem;
  height: 3rem;
  color: white;
  border-radius: 10px;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
<<<<<<< HEAD
  width: 160%;

=======
  width: 100%;
>>>>>>> 6f9e1569124e2d4fc9f5105fc0e161e163d96ca6
  display: flex; //이미지들을 가로로 나열합니다.
`;
const TOTAL_SLIDES = 1;
export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
<<<<<<< HEAD

=======
>>>>>>> 6f9e1569124e2d4fc9f5105fc0e161e163d96ca6
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
<<<<<<< HEAD
    slideRef.current.style.transform = `translateX(-${currentSlide}0%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
=======
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
>>>>>>> 6f9e1569124e2d4fc9f5105fc0e161e163d96ca6
  }, [currentSlide]);
  return (
    <Bigcontainer>
      <Button1 onClick={prevSlide}>◀</Button1>
      <Container>
        <SliderContainer ref={slideRef}>
<<<<<<< HEAD
          <div className="MyImg6">
            <Slide img={MImg6} />
          </div>
          <div className="MyImg7">
            <Slide img={MImg7} />
          </div>
          <div className="MyImg8">
            <Slide img={MImg8} />
          </div>
          <div className="MyImg9">
            <Slide img={MImg9} />
          </div>
          <div className="MyImg10">
            <Slide img={MImg10} />
          </div>
          <div className="MyImg11">
            <Slide img={MImg11} />
          </div>
          <div className="MyImg12">
            <Slide img={MImg12} />
          </div>
          <div className="MyImg13">
            <Slide img={MImg13} />
          </div>
=======
          <Slide img={MImg6} />
          <Slide img={MImg7} />
          <Slide img={MImg8} />
          <Slide img={MImg9} />
          <Slide img={MImg10} />
          <Slide img={MImg11} />
          <Slide img={MImg12} />
          <Slide img={MImg13} />
>>>>>>> 6f9e1569124e2d4fc9f5105fc0e161e163d96ca6
        </SliderContainer>
      </Container>
      <Button2 onClick={nextSlide}>▶</Button2>
    </Bigcontainer>
  );
}
<<<<<<< HEAD

{
  /*
<div className="MyImg6">
<Slide img={MImg6} /></div>
<div className="MyImg7">
<Slide img={MImg7} /></div>
<div className="MyImg8">
<Slide img={MImg8} /></div>
<div className="MyImg9">
<Slide img={MImg9} /></div>
<div className="MyImg10">
<Slide img={MImg10} /></div>
<div className="MyImg11">
<Slide img={MImg11} /></div>
<div className="MyImg12">
<Slide img={MImg12} /></div>
<div className="MyImg13">
<Slide img={MImg13} /></div>
*/
}
=======
>>>>>>> 6f9e1569124e2d4fc9f5105fc0e161e163d96ca6
