import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import "./CardTemplate.css";

// import ShareButton from "../../components/ShareButton/ShareButton";

import Img from "../../assets/Asset 3.png";
// import Logo from "../../assets/Logo.png";
import WhiteLogo from "../../assets/Asset 1.png";
import FontLogo from "../../assets/Asset 2.png";
import SocialMediaIcons from "../../assets/Asset 5.png";

export default function CardTemplate() {
  const [fullName, setFullName] = useState("");
  const [position, setPosition] = useState("");

  const cardRef = useRef();

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const doCapture = () => {
    let button = document.getElementById("download-btn");
    let fullNameEl = document.getElementById("fullName");
    let positionEl = document.getElementById("position");

    button.style.display = "none";

    if (!fullName) {
      fullNameEl.style.display = "none";
    }

    if (!position) {
      positionEl.style.display = "none";
    }

    html2canvas(document.getElementById("card")).then((canvas) => {
      simulateDownloadImageClick(
        canvas.toDataURL("image/jpeg", 0.9),
        `Happy card by WTIIRA`
      );
    });

    button.style.display = "block";
    fullNameEl.style.display = "block";
    positionEl.style.display = "block";
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
      <div className="eid-card" id="card" ref={cardRef}>
        <header>
          <img
            className="img-fluid"
            width={"100px"}
            height={"66px"}
            src={FontLogo}
            alt=""
          />
          <img
            className="img-fluid"
            width={"40px"}
            height={"40px"}
            src={WhiteLogo}
            alt=""
          />
        </header>
        <div className="eid-card-body">
          <img
            src={Img}
            className="img-fluid main-img me-5 mb-4"
            alt="عيدكم مبارك"
          />
          <div className="row w-100 text-white text-center mb-2">
            <div className="col-xs-12">
              <p className="mb-0 fw-bold eid-card-text">
                كل عيد وأنتم في بهجة ودمتم للأعياد فرحة..
              </p>
            </div>
          </div>
          <div className="row w-100 mt-3">
            <div className="col-xl-12 text-white text-center d-flex alig-items-center justify-content-center flex-column gap-0">
              <input
                id="fullName"
                placeholder={"انقر هنا لـ كتابة الاسم (اختياري)"}
                className="mb-0 fw-bold fullname-text"
                onChange={handleFullNameChange}
              />
              <input
                id="position"
                placeholder={"انقر هنا لـ كتابة المسمى الوظيفي (اختياري)"}
                className="mb-0 fw-bold position-text"
                onChange={handlePositionChange}
              />
            </div>
          </div>
          <div className="eid-card__footer">
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={SocialMediaIcons}
                className="img-fluid me-2"
                width={"50px"}
                height={"50px"}
                alt="Social Media Icons"
              />
              <small className="text-white">wtiira_ksa</small>
            </div>
            <small>للحفاظ على أساس الحياة..</small>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary mt-4"
        id="download-btn"
        onClick={doCapture}
      >
        تحميل بطاقة المعايدة
      </button>
    </div>
  );
}
