import React, { useEffect, useState } from "react";

import "./contactUs.scss";

import insta from "../../assets/instagram.svg";
import vectorX from "../../assets/vectorX.svg";
import fb from "../../assets/fb.svg";
import linkedIn from "../../assets/linkedin.svg";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactSchema } from "../../utils/schema";
import { TextInput, TextareaInput } from "../../components";
import { axiosInstance } from "../../server";
import { toast } from "react-toastify";

type contactType = {
  name: string;
  email: string;
  message: string;
};

const ContactUsPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(ContactSchema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    reset({});
  }, [reset, success]);

  const contactHandler = (data: contactType) => {
    setLoading(true);

    axiosInstance
      .post("/hackathon/contact-form", {
        email: data.email,
        first_name: data.name,
        message: data.message,
      })
      .then(() => {
        toast.success("Contact form submitted successfully");
        setLoading(false);
        setSuccess(() => !success);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
        setLoading(false);
      });
  };

  return (
    <div className="contactUsPage">
      <div className="container">
        <div className="left">
          <h2 className="p-clr">Get in touch</h2>
          <p>
            Contact <br />
            Information
          </p>

          <p>
            27,Alara Street <br />
            Yaba 100012 <br />
            Lagos State
          </p>

          <p>Call Us : 07067981819</p>

          <p>
            we are open from Monday-Friday <br />
            08:00am - 05:00pm
          </p>

          <div className="social">
            <p className="p-clr">Share on</p>

            <ul>
              <li>
                <img src={insta} alt="instagram" />
              </li>

              <li>
                <img src={vectorX} alt="vectorX" />
              </li>

              <li>
                <img src={fb} alt="facebook" />
              </li>

              <li>
                <img src={linkedIn} alt="linkedIn" />
              </li>
            </ul>
          </div>
        </div>

        <div className="right">
          <p className="p-clr">
            Questions or need assistance? <br />
            Let us know about it!
          </p>

          <p className="mob-line">
            Email us below to any question related to our event
          </p>

          <form onSubmit={handleSubmit(contactHandler)} className="contactForm">
            <TextInput
              control={control}
              name="name"
              error={errors.name}
              placeholder="Full Name"
              className="formInput"
            />

            <TextInput
              control={control}
              name="email"
              error={errors.email}
              type="email"
              placeholder="Email"
              className="formInput"
            />

            <TextareaInput
              control={control}
              name="message"
              error={errors.message}
              type="textarea"
              placeholder="Message"
              className="formInput textarea"
            />

            <button
              className="p-btn"
              type="submit"
              disabled={loading}
              style={
                loading
                  ? {
                      opacity: 0.7,
                    }
                  : {}
              }>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
