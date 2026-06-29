import "./PrivacyPolicy.scss";

import React from "react";

import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx";
import Ql from "../../LandingPage/9.QuickLinks/Ql.jsx";

export default function PrivacyPolicy() {

  return (
    <div id="PrivacyPolicyMC">

      <div className="titleHeadZ">
        <NavBar></NavBar>
        <span className="titleZ">Privacy Policy</span>
      </div>

      <div className="contentSec">

        <div className="contentWrap">

          <span className={"Gen light small ju"}>
            This privacy policy sets out how DreamLadder Capital uses and
            protects any information that you share when you use this
            website. DreamLadder Capital is committed to ensuring that your
            privacy is protected at all times. Should we ask you to provide
            certain information by which you can be identified when using
            this website, you can be assured that it will only be used in
            accordance with this privacy statement.
          </span>

          <span className={"Gen light small ju"}>
            DreamLadder Capital may change this policy from time to time by
            updating this page. This policy is effective from 1 August 2025.
          </span>

          <span className={"Gen light small ju"}>
            DreamLadder Capital understands that our relationship is strongly
            built on trust and faith. In Course of using information on this
            website or availing the services, DreamLadder Capital may become
            privy to the personal information of its customer including
            information that is of confidential nature. DreamLadder Capital
            is strictly committed to protecting the privacy of its Customer
            and has taken reasonable measures to protect the confidentiality
            of the customer information and its transmission through World
            Wide Web. However it shall not be liable in any manner for
            disclosure of the confidential information in accordance with
            this Privacy Commitment or in terms of the agreement if any with
            the Customer or by reasons beyond its control. We may however be
            required to disclose your personal information to Government,
            Judicial bodies, and our Regulators or to any person to whom the
            Firm is under an obligation to make disclosure under the
            requirements of any law binding on the Firm or any of its
            branches, if required. Hyperlink Policy for user Any hyperlink
            to other Internet sites is at customer’s own risk. The contents
            of which and the accuracy of opinions expressed are not
            verified, monitored or endorsed by DreamLadder Capital, in any
            way or manner. DreamLadder Capital is not responsible for the
            setup of any hyperlink from a third party website to
            DreamLadder Capital.
          </span>

          <div className="section">

            <h2>What we collect</h2>

            <span className={"Gen light small ju"}>
              We may collect the following information:
            </span>

            <ul>

              <li>
                <span className={"Gen light small ju"}>Name and contact details</span>
              </li>

              <li>
                <span className={"Gen light small ju"}>
                Personal information, including date of birth, Aadhaar
                  Number, and Permanent Account Number (PAN)</span>
              </li>

              <li>
                <span className={"Gen light small ju"}>Demographic information such as gender and income</span>
              </li>

              <li>
                <span className={"Gen light small ju"}>Other information that can help us improve our services</span>
              </li>

            </ul>

          </div>

          <div className="section">

            <h2>
              What we do with the information we gather
            </h2>

            <ul>

              <li>
                <span className={"Gen light small ju"}>To conduct Know-Your-Customer registration as required by
                  SEBI and/or other regulatory bodies</span>
              </li>

              <li>
                <span className={"Gen light small ju"}>To perform compliance checks and keep/maintain internal
                  records</span>
              </li>

              <li>
                <span className={"Gen light small ju"}>To use the information to improve our products and services</span>
              </li>

              <li>
                <span className={"Gen light small ju"}>To periodically send emails to your registered email address
                about your investments, or other information which we think
                  you may find interesting.</span>
              </li>

              <li>
                <span className={"Gen light small ju"}>You will be free to unsubscribe from our mailing list at any
                time if you do not wish to receive such emails from us. From
                time-to-time, we may also use your information to contact
                  you via phone or email for market research purposes.</span>
              </li>

              <li>
                <span className={"Gen light small ju"}>We will not sell, distribute or lease your personal
                information to third parties unless we are required to share
                such information under the terms and conditions of the
                products and services you avail, or we are required to do so
                  by law.</span>
              </li>

            </ul>

          </div>

          <div className="section">

            <h2>Security</h2>

            <span className={"Gen light small ju"}>
              We are committed to ensuring that your information is secure.
              In order to prevent unauthorised access or disclosure, we have
              put in place suitable physical, electronic and managerial
              procedures to safeguard and secure the information we collect
              online.
            </span>

          </div>

          <div className="section">

            <h2>Links to other websites</h2>

            <span className={"Gen light small ju"}>
              Our website may contain links to other websites of interest.
              However, once you have used these links to leave our site, you
              should note that we do not have any control over such
              third-party websites. Therefore, we cannot be responsible for
              the protection and privacy of any information which you
              provide whilst visiting such sites. You should exercise
              caution and look at the privacy statement applicable to the
              website in question.
            </span>

          </div>

          <div className="section">

            <h2>Controlling your personal information</h2>

            <span className={"Gen light small ju"}>
              If you believe that any of your information with us is
              incorrect or incomplete, please email us as soon as possible.
              We will promptly correct any information found to be incorrect.
            </span>

          </div>

          <div className="section">

            <h2>Security certificates</h2>

            <span className={"Gen light small ju"}>
              DreamLadder Capital is an online financial services company.
              We fully recognise and understand the security implications of
              being a service provider with whom people trust their money.
              There are many safeguards we adopt in this regard – some of
              these are technical, and some are structural.
            </span>

            <h3>
              When it comes to data security, our goal is to ensure that:
            </h3>

            <ul>

              <li>
                <span className={"Gen light small ju"}>Your data is stored safely and securely – passwords are
                one-way encrypted before being stored in the database for
                  high security.</span>
              </li>

              <li>
                <span className={"Gen light small ju"}>All communication with you, or with mutual fund companies
                and other service providers – are encrypted using the
                  highest standards.</span>
              </li>

              <li>
                <span className={"Gen light small ju"}>Your data is not shared with anyone, unless you have
                explicitly requested us to do so to fulfil a transaction
                  request.</span>
              </li>

              <li>
                <span className={"Gen light small ju"}>To ensure that we achieve these goals, we have a variety of
                certifications/trust verifications in place for our firm,
                both from technical and legal/operational perspectives. All
                our communications are encrypted by 256-bit encryption, and
                our data is hosted with top-tier hosting service providers.
                Also, our data is continuously backed up to ensure continuity
                  of operations.</span>
              </li>

            </ul>

          </div>

        </div>

      </div>

      <Ql />

    </div>
  );
}