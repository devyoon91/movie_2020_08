import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about__container">
           <h2><strong>📚초보방 오프라인 스터디</strong></h2>
           <p><strong>⭐️주제</strong></p>
           <ul>
               <li>웹 개발자 스터디(FRONT, BACK)</li>
           </ul>
           <p><strong>🏫스터디 장소</strong></p>
           <ul>
               <li>서울 ( 건대입구역 ) (카페, 스터디룸)</li>
           </ul>
           <p><strong>👉진행중 스터디</strong></p>
           <ul>
               <li>[2020.08] 나도 리엑트 따라해보자</li>
           </ul>
           <p><strong>📢슬랙(Slack) 초대받기</strong></p>
           <ul>
               <li><strong>Slack - Chobobang</strong></li>
               <ul>
                   <li>
                       <strong><a href="https://chobobang.slack.com/">chobobang.slack.com</a></strong>
                   </li>
                   <li>
                       Slack 초대는 kimbyungyoun91@gmail.com 메일로 문의 주세요
                   </li>
                   <li>
                       Slack 닉네임은 실명 또는 한글 닉네임 으로 변경 부탁드립니다
                   </li>
               </ul> 
           </ul>
       </div> 
    );
}

export default About;