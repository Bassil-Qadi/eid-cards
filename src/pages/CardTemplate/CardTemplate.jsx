import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import "./CardTemplate.css";

import Img from "../../assets/Path 9.png";
import Logo from "../../assets/Logo.png";
import Bg from "../../assets/Group 3.svg";

export default function CardTemplate() {
  const [fullName, setFullName] = useState("انقر هنا لـ كتابة الاسم (اختياري)");
  const [position, setPosition] = useState("انقر هنا لـ كتابة المسمى الوظيفي (اختياري)");

  const cardRef = useRef();

  const handleFullNameChange = (e) => {
    setFullName(e.target.value)
  }

  const handlePositionChange = (e) => {
    setPosition(e.target.value)
  }

  const doCapture = () => {
    let button = document.getElementById("download-btn");
    button.style.display = "none";
    html2canvas(document.getElementById("card")).then((canvas) => {
      simulateDownloadImageClick(
        canvas.toDataURL("image/jpeg", 0.9),
        `Happy card by WTIIRA`
      );
    });

    button.style.display = "block";
  };

  function simulateDownloadImageClick(uri, filename) {
    var link = document.createElement("a");
    if (typeof link.download !== "string") {
      window.open(uri);
    } else {
      link.href = uri;
      link.download = filename;
      accountForFirefox(clickLink, link);
    }
  }

  function clickLink(link) {
    link.click();
  }

  function accountForFirefox(click) {
    // wrapper function
    let link = arguments[1];
    document.body.appendChild(link);
    click(link);
    document.body.removeChild(link);
  }

  return (
    <div className="card-template__container">
      <div className="eid-card" id="card"  ref={cardRef}>
        <img src={Bg} alt="" className="img-fluid bg-img" />
        <header>
          <img className="img-fluid" width={"50px"} height={"50px"} src={Logo} alt="" />
        </header>
        <div className="eid-card-body">
          <img src={Img} className="img-fluid" alt="عيدكم مبارك" />
          <div className="row mt-4 w-100 text-white mt-2">
            <div className="col-6">
              <p className="mb-0 fw-bold eid-card-text">
                I Wish you and your family a very joyful Eid Al-Fitr
              </p>
            </div>
            <div className="col-6">
              <p className="mb-0 fw-bold text-end eid-card-text">
                أتمنى لك ولعائلتك عيد فطر سعيد
              </p>
            </div>
          </div>
          <div className="row w-100 mt-5">
            <div className="col-xl-12 text-white text-center d-flex alig-items-center justify-content-center flex-column">
              <input  placeholder={fullName} className="mb-0 fw-bold fullname-text" />
              <input  placeholder={position} className="mb-0 fw-bold position-text" />
            </div>
          </div>
        </div>
      <button className="btn btn-primary mt-4" id="download-btn" onClick={doCapture}>تحميل بطاقة المعايدة</button>
      </div>
    </div>
  );
}
