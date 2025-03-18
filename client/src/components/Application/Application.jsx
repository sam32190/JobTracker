import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
} from "react-icons/fa";
import styled from "styled-components";

// Styled Components for UI
const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #4c83ff, #1f1f1f);
`;

const FormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  color: #4c83ff;
  margin-bottom: 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border 0.3s;
  &:focus {
    border: 1px solid #4c83ff;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.9rem;
  margin-top: 0.25rem;
`;

const SubmitButton = styled.button`
  background: #4c83ff;
  color: white;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: bold;
  margin-top: 1rem;
  transition: 0.3s;
  &:hover {
    background: #3a6cd9;
  }
`;

const Application = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const companyName = location.state?.companyName || "Unknown Company";

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      companyName: companyName,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("Submitting Data:", values);
      try {
        await axios.post(
          "https://localhost:7279/api/Application/submit",
          values,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        toast.success("Application submitted successfully!");
        navigate(`/myprofile`);
      } catch (error) {
        console.error(
          "Error submitting application:",
          error.response?.data || error.message
        );
        toast.error("Submission failed. Please try again.");
      }
    },
  });

  return (
    <>
      <Toaster position="top-center" autoClose={2000} />
      <PageWrapper>
        <FormContainer>
          <Title>
            <FaPaperPlane /> Apply for Job
          </Title>

          <StyledForm onSubmit={formik.handleSubmit} noValidate>
            {/* Name Field */}
            <Label>
              <FaUser /> Name
            </Label>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <ErrorText>{formik.errors.name}</ErrorText>
            )}

            {/* Email Field */}
            <Label>
              <FaEnvelope /> Email
            </Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <ErrorText>{formik.errors.email}</ErrorText>
            )}

            {/* Phone Field */}
            <Label>
              <FaPhone /> Phone Number
            </Label>
            <Input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
              <ErrorText>{formik.errors.phone}</ErrorText>
            )}

            {/* Company Name Field (Disabled) */}
            <Label>
              <FaBuilding /> Company Name
            </Label>
            <Input
              type="text"
              name="companyName"
              value={formik.values.companyName}
              disabled
            />

            {/* Submit Button */}
            <SubmitButton type="submit">
              <FaPaperPlane />
              {formik.isSubmitting ? "Submitting..." : "Submit Application"}
            </SubmitButton>
          </StyledForm>
        </FormContainer>
      </PageWrapper>
    </>
  );
};

export default Application;
