import React, { useState } from "react";
import styled from "styled-components";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

function Form() {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const makeRequest = (formData) => {
    console.log("form submitted", formData);
    setSubmitted(true); // Set submitted state to true after form submission
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
    <StepThree next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  return (
    <Container>
      <ImageCard />
      {submitted ? ( // Conditionally render thank you section if form is submitted
        <ThankYouSection />
      ) : (
        <Wrapper>{steps[currentStep]}</Wrapper>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 5rem 12rem;
  border-radius: 1rem;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);

  @media (max-width: 48rem) {
    margin: 1rem;
  }
`;

const ImageCard = styled.div`
  flex: 1;
  border-radius: 1rem 0 0 1rem;
  background-image: url("https://images.pexels.com/photos/16131605/pexels-photo-16131605/free-photo-of-interior-of-a-restaurant-in-a-rustic-style.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 48rem) {
    display: none;
  }
`;

const Wrapper = styled.div`
  flex: 2;
  font-family: "Ubantu", sans-serif;
`;

const ThankYouSection = () => (
  <ThankYouContainer>
    <h2>Thank you for submitting!</h2>
    <p>We have received your form.</p>
  </ThankYouContainer>
);

const ThankYouContainer = styled.div`
  height: 30rem;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Ubantu", sans-serif;
`;

export default Form;
