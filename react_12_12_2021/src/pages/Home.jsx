import React, { Component } from "react";
import * as style from "./CSS/home.module.css" 




export default class Home extends Component {
  render() {
    return (
        <div>
            <div className={style.center}>
                <span className={style.sliding}>Web development Tech-Career MERN fullstack bootcamp <br />12/12/2021</span>
            </div>
            <div className={style.home}>
                <p className={style.main_text}> Web Developmen <br /> Courses & <br /> Mentoring</p>
                <div className={style.border_hr}></div>
                <div className={style.space_bottom}></div>
            </div>        
        </div>
    );
  }
}
