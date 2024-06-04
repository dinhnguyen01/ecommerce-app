import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { IoIosHome } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoInformationCircle } from "react-icons/io5";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title="Liên hệ" />
      <BreadCrumb title="Liên hệ" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              title="Description of iframe content"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.5178068791115!2d106.16869081699076!3d20.112433982563807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313612c5884135f1%3A0x9748793954b6c50d!2zVHLGsOG7nW5nIHRp4buDdSBo4buNYyBCIE5naMSpYSBM4bqhYw!5e0!3m2!1svi!2s!4v1716867874800!5m2!1svi!2s"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Form liên hệ</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Họ và tên"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Số điện thoại"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Nội dung ý kiến"
                    ></textarea>
                  </div>
                  <div>
                    <button formAction="#" className="button border-0">
                      GỬI
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">
                  Hãy liên hệ với chúng tôi
                </h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <IoIosHome className="fs-5" />
                      <address className="mb-0">
                        Nghĩa Lạc, Nghĩa Hưng, Nam Định
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <IoCall className="fs-5" />
                      <a href="tel:+84 98765432">(+84) 98765432</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <IoMail className="fs-5" />
                      <a href="mailto:dinhzingpro@gmail.com">
                        dinhzingpro@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <IoInformationCircle className="fs-5" />
                      <p className="mb-0">
                        Mở cửa các ngày trong tuần, 8:30 - 17:30
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
