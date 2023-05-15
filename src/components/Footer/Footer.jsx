import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Navbar,Nav} from 'react-bootstrap';
const Footer=()=>{
    return(
    <div className="footer">
       <ul className="ulfooter">
            <li>صفحه اصلی</li>
            <li >سفارشات  </li>
            <li>محصولات</li>
            <li>تماس با ما </li>*/
            </ul>
        <p className="pfooter">تمامی حقوق مادی و معنوی این سایت نزد نوین سایت محفوظ است</p>
         <div className="subfooter">
         <input type="text" placeholder="username@site.com" className="inpfooter" /> 
        <button className="btnfooter"> اشتراک ایمیل</button>
         </div>
    </div>
    )
}
export default Footer;