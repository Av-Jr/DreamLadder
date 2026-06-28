import "./Disclaimer.scss";

import React from "react";

import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx";
import Ql from "../../LandingPage/9.QuickLinks/Ql.jsx";

const disclaimerContent = [
  `These are our terms and conditions for usage of the website and the related services offered by DreamLadder Capital. (“Related Services” hereafter means Stock Market Trading / Mutual Funds / ULIPS / Investment Analysis given through E-Mail, Messenger, Mobile Phone, Mobile SMS, Telephone or in any other form, manner or media).`,

  `DreamLadder Capital all its contents & related services. You agree and understand that the information and material contained in this website and the related services offered by DreamLadder Capital.`,

  `Research’ implies and constitutes your consent to the terms and conditions mentioned below. You also agree that DreamLadder Capital can modify or alter the terms and conditions of the use of this service without any liability.`,

  `The contents of this site & related services offered by DreamLadder Capital are solely the personal views of the contributors. DreamLadder Capital reserve the right to make modifications and alterations to the contents of this website. Users are advised to use the data for the purpose of information only and rely on their own judgment while making investment or trading decisions. The investments or trades discussed or recommended in this website & related services offered by DreamLadder Capital may not be suitable for all investors.`,

  `DreamLadder Capital do not warranty the timeliness, accuracy or quality of the electronic content and take no responsibility for any loss or profit arising out of decisions being made by anyone acting on the analysis published in this website.`,

  `The contents of this website & the related services offered by DreamLadder Capital cannot be copied, reproduced, republished, uploaded, posted, transmitted or distributed for any non-personal use without obtaining prior permission from DreamLadder Capital. Any person who intends to use the services rendered by DreamLadder Capital should do so only after due consideration of the above as well as all other factors.`,

  `DreamLadder Capital is not responsible for the contents of any of the linked sites. By providing access to other website nor recommending nor endorsing the content available in the linked websites. If you do not agree to any of the terms mentioned in this agreement, you should kindly exit the site.`
];

export default function Disclaimer() {

  return (
    <div id="DisclaimerMC">
        <div className="titleHeadZ">
            <NavBar></NavBar>
            <span className="titleZ">Disclaimer</span>
        </div>

      <div className="contentSec">

        <div className="contentWrap">

          {disclaimerContent.map((item, index) => (

            <h3 key={index}>
              {item}
            </h3>

          ))}

        </div>

      </div>

      <Ql />

    </div>
  );
}