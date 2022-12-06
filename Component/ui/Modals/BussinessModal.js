import React from "react";

const BussinessModal = () => {
  return (
    <div className="bussiness-modal-header">
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-margin  modal-dialog-centered" id="modal-dialog">
          <div className="modal-content content-modal">
            <button
              type="button"
              className="btn"
              data-bs-dismiss="modal"
              aria-label="#"
              id="business-close-btn"
            >
              <img className="close-btn1" src="/popup-btn.png" alt="" />
            </button>

            <div className="modal-header1">
              <div
                id="carouselExampleControlsNoTouching"
                className="carousel slide"
                data-bs-touch="false"
                data-bs-interval="false"
              >
                <div className="carousel-inner inner-carousel">
                  <div className="carousel-item active">
                    <img
                      src="/slider-1.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="/slider-2.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/slider-3.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="/slider-4.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/slider-5.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/slider-6.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/slider-7.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/slider-8.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/slider-9.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="/slider-10.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/slider-11.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/slider-12.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/slider-13.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/slider-14.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/slider-15.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="/slider-16.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/slider-17.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/slider-18.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/slider-19.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/slider-20.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/slider-21.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="/slider-22.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/slider-23.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/slider-24.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/slider-25.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control" aria-hidden="true">
                    {" "}
                    <img
                      className="arrowleft"
                      id="arrow-set"
                      src="/arrowleft.png"
                      alt=""
                    />
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="next"
                >
                  <span className="carousel-control" aria-hidden="true">
                    <img
                      className="arrowright"
                      id="arrow-right"
                      src="/arrowright.png"
                      alt=""
                    />
                  </span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BussinessModal;
