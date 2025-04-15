import React, { useState } from "react";
import "../../styles/Gallery.css";
import pic1 from "../../../src/assets/images/cert.jpg";
import pic2 from "../../../src/assets/images/licence1.jpg";
import pic3 from "../../../src/assets/images/licence2.png";
import pic4 from "../../../src/assets/images/licence3.jpg";
import pic5 from "../../../src/assets/images/old.jpg";
import pic7 from "../../../src/assets/images/pic2.jpg";
import pic8 from "../../../src/assets/images/sign1.jpg";
import pic9 from "../../../src/assets/images/sign2.jpg";
import license2 from "../../../src/assets/license2.png";

const GalleryBody = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <>
      <div className={`modal ${modalOpen ? "open" : ""}`} onClick={closeModal}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          {selectedImage && <img src={selectedImage} alt="Large" />}
        </div>
      </div>
      <div className="liceimg">
        <img src={license2} alt="" />
      </div>
      <div className="body">
        <div className="container">
          <div className="start">
            <ul className="row">
              <li>
                <div className="galleries">
                  <div className="col-md-12 gal-body">
                    <div className="section-header text-center pb-3">
                      <h2>Steering Towards Success</h2>
                      <p>
                        Welcome to our Driving School image gallery, where the
                        road to safe and confident driving unfolds one frame at
                        a time. Our commitment to teaching the art of driving is
                        beautifully showcased in this collection of images. From
                        the excitement of a student's first time behind the
                        wheel to the moments of triumph as they earn their
                        driver's license, these photographs capture the essence
                        of our driving school experience. We take pride in
                        nurturing responsible and skilled drivers, and this
                        gallery reflects the dedication of our instructors and
                        the determination of our students.
                      </p>
                    </div>
                  </div>
                  <div className="gallery">
                    <a onClick={() => openModal(pic1)}>
                      <img src={pic1} alt="" />
                    </a>
                    <a onClick={() => openModal(pic2)}>
                      <img src={pic2} alt="" />
                    </a>
                    <a onClick={() => openModal(pic3)}>
                      <img src={pic3} alt="" />
                    </a>
                    <a onClick={() => openModal(pic4)}>
                      <img src={pic4} alt="" />
                    </a>
                    <a onClick={() => openModal(pic5)}>
                      <img src={pic5} alt="" />
                    </a>
                    <a onClick={() => openModal(pic7)}>
                      <img src={pic7} alt="" />
                    </a>
                    <a onClick={() => openModal(pic8)}>
                      <img src={pic8} alt="" />
                    </a>
                    <a onClick={() => openModal(pic9)}>
                      <img src={pic9} alt="" />
                    </a>
                    <a onClick={() => openModal(pic1)}>
                      <img src={pic1} alt="" />
                    </a>
                    <a onClick={() => openModal(pic2)}>
                      <img src={pic2} alt="" />
                    </a>
                    <a onClick={() => openModal(pic3)}>
                      <img src={pic3} alt="" />
                    </a>
                    <a onClick={() => openModal(pic4)}>
                      <img src={pic4} alt="" />
                    </a>
                    <a onClick={() => openModal(pic5)}>
                      <img src={pic5} alt="" />
                    </a>
                    <a onClick={() => openModal(pic7)}>
                      <img src={pic7} alt="" />
                    </a>
                    <a onClick={() => openModal(pic8)}>
                      <img src={pic8} alt="" />
                    </a>
                    <a onClick={() => openModal(pic9)}>
                      <img src={pic9} alt="" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Floating Social Media Icons */}
        <div className="icons">
          <ul>
            <a
              href="https://www.facebook.com/profile.php?id=100068924735662"
              target="_blank"
            >
              <li className="facebook">
                <i className="fa-brands fa-facebook-f" />
              </li>
            </a>
            <a
              href="https://wa.me/94778719826?text=Hi!%20How%20can%20I%20join%20with%20Savingo%20Driving%20School."
              target="_blank"
            >
              <li className="whatsapp">
                <i className="fa-brands fa-whatsapp" />
              </li>
            </a>
            <a
              href="https://x.com/Anuradha_Dil?t=SJjkxrQf-EK4seoBkn7Asw&s=09"
              target="_blank"
            >
              <li className="twitter">
                <i className="fa-brands fa-x-twitter" />
              </li>
            </a>
            <a
              href="https://www.instagram.com/anuradha_dilshan/"
              target="_blank"
            >
              <li className="instagram">
                <i className="fa-brands fa-instagram" />
              </li>
            </a>
            <a
              href="https://www.youtube.com/channel/UCVviu3NhADPZ-GFdRYaaBMw"
              target="_blank"
            >
              <li className="youtube">
                <i className="fa-brands fa-youtube" />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/anuradha-dilshan-86a7771ab/"
              target="_blank"
            >
              <li className="linkedin">
                <i className="fa-brands fa-linkedin-in" />
              </li>
            </a>
          </ul>
        </div>

        {/* BACK TO TOP BUTTON */}
        <a href="#" className="back-to-top">
          <span className="material-icons">arrow_upward</span>
        </a>
      </div>
    </>
  );
};

export default GalleryBody;
