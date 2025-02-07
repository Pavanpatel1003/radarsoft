import Image from "next/image";
import digital from "../../../../public/assets/media/digital/digital.png";
import mobileapp from "../../../../public/assets/media/digital/mobileapp.png";
import settings from "../../../../public/assets/media/digital/settings.png";
import uiux from "../../../../public/assets/media/digital/uiux.png";
import agile from "../../../../public/assets/media/digital/agile.png";
import AI from "../../../../public/assets/media/digital/AI.png";
import micro from "../../../../public/assets/media/digital/micro.png";
import webdevelopment from "../../../../public/assets/media/digital/webdevelopment.png";
import common_contact from "../../../../public/assets/media/common/common-contact.webp";
import digitaltransformation1 from "../../../../public/assets/media/digital/digital transformation1.png";
import digitaltransformation2 from "../../../../public/assets/media/digital/digital transformation2.png";
import digitalbanner from "../../../../public/assets/media/digital/digitalbanner.webp";
import Link from "next/link";
import { useState, useEffect } from "react";
import Head from "next/head";
import "aos/dist/aos.css";
import AOS from 'aos';

const Digital = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = {
      email,
      fullName,
      phoneNumber,
      subject,
    };
    try {
      const response = await axios.post(
        `https://radarsoft-black.vercel.app/api/hello`,
        form
      );
      if (response.status === 200) {
        console.log("response here", response);
        setEmail("");
        setFullName("");
        setPhoneNumber("");
        setSubject("");
        alert("Your Request Submitted successfully.");
      }
    } catch (error) {
      console.log("error in reques", error);
    }
    console.log("data here", form);
  };

   useEffect(() => {
      AOS.init({ once: true });
    }, []);

  return (
    <>
     <Head>
        <title>Digital Transformation Solutions - RadarSoft Technologies LLP</title>
        <meta
          name="description"
          content="Embrace the future with our digital transformation services. From cloud computing to AI, we help you transition seamlessly into a tech-driven future."
        />
        <meta
          name="Keywords"
          content="Digital transformation, cloud computing, AI, tech solutions, business transformation." />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* digital transformation details title section */}
      <section className="career-banner common_margin_space" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <div className="career-banner-title">
            <div className="details-new">
              <span className="commom-heading marginbtm">
                <h2>
                  We transform your business
                  <br /> through digital transformation
                </h2>
              </span>
              <span className="text-end">
                <Link
                  className="common-project-button getin"
                  href="/contact"
                  style={{ textDecoration: "none" }}
                >
                  Get in touch
                </Link>
              </span>
            </div>
            <div className="commom-heading">
              <p>
                Staff augmentation is a flexible outsourcing strategy that
                enables businesses to fill specific skill gaps and meet project
                demands by hiring external professionals on a temporary or
                project basis. This approach allows companies to scale their
                workforce according to their immediate needs without the
                long-term commitments associated with full-time employment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* digital transformation banner section */}
      <section className="common_margin_space" data-aos="fade-up" data-aos-delay="300">
        <div className="w-100 h-100 career_img">
          <Image
            className="w-100 d-lg-block"
            src={digitalbanner}
            alt="Career Banner"
          />
        </div>
      </section>

      {/* START TRANSFORM */}
      <section className="banner-area d-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="banner-left-side-area commom-heading">
                <h2>
                  Transform your business with our Digital Transformation
                  services
                </h2>
                <p>
                  At RadarSoft Technologies, we are at the forefront of the
                  Digital Transformation revolution, empowering businesses to
                  navigate and thrive in the digital age. Our mission is to
                  seamlessly integrate cutting-edge technology solutions that
                  drive efficiency, innovation, and growth for our clients
                  across various industries.
                </p>
                <div>
                  <Link
                    className="common-project-button"
                    href="/contact"
                    style={{ textDecoration: "none" }}
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner-right-side-area">
                <div className="banner-right-side-box">
                  <h3 className="banner-right-side-h3">Book an Appointment</h3>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="FullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full Name*"
                      required
                    />
                    <input
                      type="text"
                      name="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Id*"
                      required
                    />
                    <input
                      type="number"
                      placeholder="Phone No*"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                      <input
                        type="text"
                        placeholder="Subject*"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      />
                    <button className="banner-right-side-button" type="submit">
                      Enquire Now
                    </button>
                  </form>
                  <p className="banner-right-side-paragraph">
                    ⚡Available from Mon - Fri 10AM TO 7PM ⚡
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END TRANSFORM */}

      {/* START STAY AHED */}
      <section className="service-contact common_margin_space mb_100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 digital_relative" data-aos="fade-right" data-aos-delay="300">
              <div className="digital_sec_bg">
                <Image src={digital }  alt="Description of the image" className="w-100" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 service-set-box" data-aos="fade-left" data-aos-delay="300">
              <div>
                <div className="digital-stay commom-heading">
                  <h2>Stay Ahead with Digital Transformation</h2>
                  <p>
                    Harness the power of digital transformation to outperform
                    your competitors. Enhance efficiency, innovate faster, and
                    adapt to market changes seamlessly.
                  </p>
                  <div className="service-d-stay">
                    <ul>
                      <li>
                        Leverage advanced technologies to accelerate your
                        innovation cycle and bring new ideas to market quickly.
                      </li>
                      <li>
                        Uncover untapped markets and revenue streams by
                        utilizing data analytics and digital tools.
                      </li>
                      <li>
                        Adapt swiftly to evolving market conditions with agile
                        processes and real-time insights.
                      </li>
                      <li>
                        Improve efficiency and reduce costs by automating
                        processes and integrating systems.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END STAY AHED */}

      {/* START SERVICE */}
      <section className="service-d-following" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <div className="row">
            <div className="service-d-following-head commom-heading">
              <h3>Services</h3>
              <h2>Digital Transformation</h2>
            </div>
            <div className="container">
              <div className="row">
                <div className="digital-grid-container">
                  <div className="digital-grid-item">
                    <div className="digital_img">
                      <Image src={mobileapp }  alt="MongoDB" />
                    </div>
                    <div>
                      <p>
                        Mobile App <br />
                        Development
                      </p>
                    </div>
                  </div>
                  <div className="digital-grid-item">
                    <div className="digital_img">
                      <Image src={settings }  alt="MongoDB" />
                    </div>
                    <div>
                      <p>
                        Mobile App <br />
                        Development
                      </p>
                    </div>
                  </div>
                  <div className="digital-grid-item bottom-set">
                    <div className="digital_img">
                      <Image src={uiux }  alt="MongoDB" />
                    </div>
                    <div>
                      <p>
                        UI/UX <br />
                        Design
                      </p>
                    </div>
                  </div>
                  <div className="digital-grid-item bottom-set">
                    <div className="digital_img">
                      <Image src={agile }  alt="MongoDB" />
                    </div>
                    <div>
                      <p>
                        Agile <br />
                        Development
                      </p>
                    </div>
                  </div>
                  <div className="digital-grid-item">
                    <div className="digital_img">
                      <Image src={AI }  alt="MongoDB" />
                    </div>
                    <div>
                      <p>
                        Gen AI <br />
                        Implementation
                      </p>
                    </div>
                  </div>
                  <div className="digital-grid-item">
                    <div className="digital_img">
                      <Image src={micro }  alt="MongoDB" />
                    </div>
                    <div>
                      <p>
                        Micro <br />
                        Services Architecture
                      </p>
                    </div>
                  </div>
                  <div className="digital-grid-item">
                    <div className="digital_img">
                      <Image src={webdevelopment }  alt="MongoDB" />
                    </div>
                    <div>
                      <p>
                        Web <br />
                        Development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SERVICE */}

      {/* START COMMON CONTACT */}
      <section className="common-contact common_margin_space mb-100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade-right" data-aos-delay="300">
              <div className="case_d_con">
                <Image src={common_contact }  alt="Description of the image" className="w-100" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 service-set-box" data-aos="fade-left" data-aos-delay="300">
              <div>
                <div className="sub-text-heading">
                  <h3>Want to know more! Get in touch with our team.</h3>
                  <p className="normal-desc">
                    Chat with us now to get personalized guidance and ensure all
                    your concerns are addressed promptly and accurately.
                  </p>
                  <div className="common-contact-button">
                    <Link
                      className="common-link"
                      href="/contact"
                      style={{ textDecoration: "none" }}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END COMMON CONTACT */}

      {/* START HOW RADARSOFT`S` DIGITAL */}
      <section className="d-none">
        <div className="container mb-5">
          <div className="row">
            <div className="mb-5">
              <Link className="digital-case-studies" href="/casestudy">
                Case Studies
              </Link>
              &nbsp;
              <Link href="/services/digital_transformation">
                <i className="fa-solid fa-chevron-right"></i>&nbsp; Digital
                Transformation
              </Link>
            </div>

            <div className="row mb-5">
              <div className="col-12 col-sm-12 col-md-6 col-lg-7">
                <div className="commom-heading">
                  <h2>
                    How Radarsoft’s Digital Transformation Services Simplified
                    Business for Major Companies
                  </h2>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-5 digital-main-set">
                <div>
                  <Link className="common-project-button" href="/contact">
                    Start a project with us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-lg-2 case-pad">
            <div className="col">
              <div>
                <Image
                  src={digitaltransformation1 } 
                  alt="Description of the image"
                  className="w-100"
                />
              </div>
              <div className="case-btn-set">
                <Link className="case-edtech-btn" href="">
                  ERP
                </Link>
                <Link className="case-mobile-btn" href="">
                  Web Dashboard
                </Link>
              </div>
              <div className="case-card-head">
                <h4>
                  Discover how we simplified Bajaj's Employee Management System
                  by reducing manual checks.
                </h4>
                <Link className="case-read-more" href="">
                  Read more&nbsp;
                  <span>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col">
              <div>
                <Image
                  src={digitaltransformation2 } 
                  alt="Description of the image"
                  className="w-100"
                />
              </div>
              <div className="case-btn-set">
                <Link className="case-edtech-btn" href="">
                  ERP
                </Link>
                <Link className="case-mobile-btn" href="">
                  Web Dashboard
                </Link>
              </div>
              <div className="case-card-head">
                <h4>
                  Discover how we streamlined Nilanjan Art’s HR module by
                  reducing manual checks.
                </h4>
                <Link className="case-read-more" href="">
                  Read more&nbsp;
                  <span>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END HOW RADARSOFT`S` DIGITAL */}
    </>
  );
};

export default Digital;
