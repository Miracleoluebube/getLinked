import React, { Fragment, useEffect, useState } from "react";
import "./registration.scss";

import registration from "../../assets/registration1.svg";
import congratulation from "../../assets/congratulation.svg";

import { InputCheckbox, InputSelect, TextInput } from "../../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../utils/schema";
import { axiosInstance } from "../../server";
import { toast } from "react-toastify";

type registerType = {
  name: string;
  phone: number;
  email: string;
  topic: string;
  category: string;
  grpSize: string;
  agree: boolean;
};

const categoryList = [1, 2, 3, 4];
const grpSizeList = [5, 10, 20];

const RegistrationPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState(false);

  //   for open successfull registration popup
  const [open, setOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(RegisterSchema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {},
  });

  useEffect(() => {
    reset({});
  }, [reset, success]);

  useEffect(() => {
    if (open) {
      window.scrollTo(0, 0);
      document.getElementsByTagName("body")[0].classList.add("stop");
    } else {
      document.getElementsByTagName("body")[0].classList.remove("stop");
    }
  }, [open]);

  const registerHandler = (data: registerType) => {
    console.log(data);

    setLoading(true);

    axiosInstance
      .post("/hackathon/registration", {
        email: data.email,
        phone_number: data.phone,
        team_name: data.name,
        group_size: data.grpSize,
        project_topic: data.topic,
        category: data.category,
        privacy_poclicy_accepted: data.agree,
      })
      .then(() => {
        setLoading(false);
        setSuccess(() => !success);
        setOpen(true);
      })
      .catch((err) => {
        toast.error(err.response.data.email[0]);
        setLoading(false);
      });
  };

  return (
    <div
      style={
        open
          ? {
              overflow: "hidden",
            }
          : {}
      }>
      <div className="registerPage">
        <div className="container">
          <div className="left">
            <img src={registration} alt="registration" />
          </div>

          <div className="right">
            <div className="title">
              <h2 className="p-clr">Register</h2>
              <div className="subtitle">
                <p>Be part of this movement!</p>
                <div>
                  <img src="" alt="" />
                </div>
              </div>

              <h3>CREATE YOUR ACCOUNT</h3>
            </div>

            <form
              className="registerForm"
              onSubmit={handleSubmit(registerHandler)}>
              <div className="box">
                <TextInput
                  control={control}
                  name="name"
                  error={errors.name}
                  label="Team’s Name"
                  placeholder="Enter the name of your group"
                  className="formInput"
                />

                <TextInput
                  control={control}
                  name="phone"
                  error={errors.phone}
                  type="number"
                  label="Phone"
                  placeholder="Enter your phone number"
                  className="formInput"
                />
              </div>

              <div className="box">
                <TextInput
                  control={control}
                  name="email"
                  error={errors.email}
                  label="Email"
                  placeholder="Enter your email address"
                  className="formInput"
                />

                <TextInput
                  control={control}
                  name="topic"
                  error={errors.topic}
                  label="Project Topic"
                  placeholder="What is your group project topic"
                  className="formInput"
                />
              </div>

              <div className="box">
                <InputSelect
                  control={control}
                  name="category"
                  error={errors.category}
                  label="Category"
                  placeholder="Select your category"
                  className="formInput"
                  list={categoryList}
                />

                <InputSelect
                  control={control}
                  name="grpSize"
                  error={errors.grpSize}
                  label="Group Size"
                  placeholder="Select"
                  className="formInput"
                  list={grpSizeList}
                />
              </div>

              <p className="errorStyle">
                Please review your registration details before submitting
              </p>

              <InputCheckbox
                control={control}
                name="agree"
                error={errors.agree}
                label="I agreed with the event terms and conditions  and privacy policy"
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
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      {open && (
        <div className="successfull">
          <div className="box">
            <img src={congratulation} alt="congratulation" />

            <h3>
              Congratulations <br />
              you have successfully Registered!
            </h3>
            <p>
              Yes, it was easy and you did it! <br />
              check your mail box for next step
            </p>

            <button className="p-btn" onClick={() => setOpen(false)}>
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationPage;
