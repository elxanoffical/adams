import React from "react";
import "../MentorsPage/MentorsPage.scss";
import gsap from 'gsap'
import { useEffect, useRef } from "react";
 
const StudentsPage = () => {
  const cardHeader = useRef();
  const card1 = useRef();
  const card2 = useRef();
  const card3 = useRef();
  const card4 = useRef();
  const tl = gsap.timeline({ defaults: { duration: 0.4 } });
  
 
  useEffect(()=>{
    tl.fromTo(cardHeader.current, {opacity:0},{opacity:1 })
    tl.fromTo(card1.current, {opacity:0, x: -20},{opacity:1, x:0 })
    tl.fromTo(card2.current, {opacity:0, x: -20},{opacity:1, x:0 })
    tl.fromTo(card3.current, {opacity:0, x: -20},{opacity:1, x:0 })
    tl.fromTo(card4.current, {opacity:0, x: -20},{opacity:1, x:0 })
  })

  return (
    <div className="mentorsP-c">
      <div className="mentors-header" ref={cardHeader}>
        <h1>Məzunlarımız</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          scelerisque venenatis laoreet. Nam velit libero, viverra vel orci non,
          dapibus suscipit dolor. Sed ligula justo, congue non lectus ut,
          pulvinar dapibus diam. Nulla sit amet placerat tellus, ac ultrices
          urna. Integer ut ipsum sed dolor consectetur placerat.
        </p>
      </div>
      <div className="mentors-c">
        <div className="mentor-card" ref={card1}>
          <img src="/students/student1.svg" alt="" />
          <h3>Aslan Mirzəyev</h3>
          <p>YouTube kursu</p>
        </div>
        <div className="mentor-card" ref={card2}>
          <img src="/students/student2.svg" alt="" />
          <h3>Hüseynova Elnarə</h3>
          <p>YouTube kursu</p>
        </div>
        <div className="mentor-card" ref={card3}>
          <img src="/students/student3.svg" alt="" />
          <h3>Şiriyev İlqar</h3>
          <p>YouTube kursu</p>
        </div>
        <div className="mentor-card" ref={card4}>
          <img src="/students/student4.svg" alt="" />
          <h3>Mustafayev Sadiq</h3>
          <p>YouTube kursu</p>
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;
