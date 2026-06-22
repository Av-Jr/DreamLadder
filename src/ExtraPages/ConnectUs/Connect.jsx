import "./Connect.scss";

import React, { useState } from "react";

import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx";
import Ql from "../../LandingPage/9.QuickLinks/Ql.jsx";

import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import { img } from "../../utils/image.js";


const Connect = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New Contact Form Submission from ${formData.name}`;

    const body = `
Name: ${formData.name}

Email: ${formData.email}

Phone: ${formData.phone}

Message:
${formData.message}
    `;

    window.location.href = `mailto:info@dreamladdercapital.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <div className="connectPage">
        <div className="titleHeadZ">
          <NavBar></NavBar>
          <span className="titleZ">Contact Us</span>
        </div>
        <div className="connectContainer">

          <div className="topSection">

            <div className="left">

              <img
                src={img("Contactpgone")}
                alt="Contact"
                loading="lazy"
              />

            </div>

            <div className="right">

              <div className="contactCard">

                <div className="iconBox">
                  <Phone size={20} />
                </div>

                <div className="text">
                  <span className={"Gen conTact"}>+91 89-0808-2222</span>
                </div>

              </div>

              <div className="contactCard">

                <div className="iconBox">
                  <Mail size={20} />
                </div>

                <div className="text">
                  <span className={"Gen conTact"}>info@dreamladdercapital.com</span>
                </div>

              </div>

              <div className="contactCard">

                <div className="iconBox">
                  <MapPin size={20} />
                </div>

                <div className="text">
                  <span className={"Gen conTact"}>
                    #20, 10th floor, R. City Offices,
                    LBS Marg, Ghatkopar (west),
                    Mumbai - 400086
                  </span>
                </div>

              </div>

            </div>

          </div>

          <div className="meetingBtnWrap">

            <button className="navBtn s" onClick={() => window.open("https://calendly.com/dreamladdercapital/portfolio-discussion-meeting", "_blank")}>
              Schedule a Meeting
            </button>

          </div>

          <div className="formSection">

            <h2 className={"Gen bold dark"}>Have a Question?</h2>

            <form onSubmit={handleSubmit}>

              <div className="leftInputs">

                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />

              </div>

              <div className="rightInputs">

                <textarea
                  placeholder="Your message (optional)"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  className="navBtn s"
                >
                  Submit
                </button>

              </div>

            </form>

          </div>

          <div className="mapSection">

            <iframe
              src="https://www.google.com/maps?cid=5250521627945001308&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DreamLadder Capital Location"
            ></iframe>

          </div>

        </div>

      </div>

      <Ql />
    </>
  );
};

export default Connect;