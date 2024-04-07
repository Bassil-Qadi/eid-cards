import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import "./CardTemplate.css";

import Img from "../../assets/Path 9.png";
import Logo from "../../assets/Logo.svg";

export default function CardTemplate() {
  const [fullName, setFullName] = useState("الاسم");
  const [position, setPosition] = useState("المسمى الوظيفي");

  const cardRef = useRef();

  const handleFullNameChange = (e) => {
    setFullName(e.target.value)
  }

  const handlePositionChange = (e) => {
    setPosition(e.target.value)
  }

  const doCapture = () => {
    html2canvas(document.getElementById("card")).then((canvas) => {
      simulateDownloadImageClick(
        canvas.toDataURL("image/jpeg", 0.9),
        `${fullName}.png`
      );
    });
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
        <header>
          {/* <p className="m-0">Your Logo</p> */}
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
            <div className="col-xl-12 text-white text-center">
              <p contentEditable dangerouslySetInnerHTML={{ __html: fullName }} className="mb-0 fw-bold fullname-text"></p>
              <small className="fw-lighter positon-text" contentEditable dangerouslySetInnerHTML={{ __html: position }}></small>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary mt-4" onClick={doCapture}>تنزيل البطاقة</button>
      {/* <div className="eid-card__form d-flex align-items-center justify-content-center flex-column">
      <hr className="w-100" />
        <div class="w-100 mb-3">
          <input
            type="text"
            className="form-control"
            id="full-name"
            placeholder="الاسم"
            onChange={handleFullNameChange}
          />
        </div>
        <div className="w-100 mb-3">
          <input
            type="text"
            className="form-control"
            id="position"
            placeholder="المسمى الوظيفي"
            onChange={handlePositionChange}
          />
        </div>
        <button className="btn btn-primary" onClick={doCapture}>تنزيل البطاقة</button>
      </div> */}
    </div>
  );
}
