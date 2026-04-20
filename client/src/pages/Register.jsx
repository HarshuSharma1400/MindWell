/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { register, reset } from "../features/authSlice";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      toast.success("User Registered Successfully 🌿");
      navigate("/features");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    dispatch(register(userData));
  };

  // 🌿 Calm Loading Spinner
  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#F4F9F9]">
        <div className="w-12 h-12 border-4 border-[#A8DADC] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F9F9] flex items-center justify-center px-6">
      <ToastContainer />

      <section className="bg-white shadow-md border border-[#E6EFF2] rounded-3xl p-10 md:w-96 w-full">

        <h2 className="text-3xl font-bold text-center text-[#457B9D] mb-8">
          Create Your Account
        </h2>

        <form onSubmit={onSubmit} className="space-y-6">

          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Full Name"
            onChange={onChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-[#DDEEEE] bg-[#F8FBFB] focus:outline-none focus:ring-2 focus:ring-[#A8DADC] text-[#2E2E2E]"
          />

          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Email Address"
            onChange={onChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-[#DDEEEE] bg-[#F8FBFB] focus:outline-none focus:ring-2 focus:ring-[#A8DADC] text-[#2E2E2E]"
          />

          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={onChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-[#DDEEEE] bg-[#F8FBFB] focus:outline-none focus:ring-2 focus:ring-[#A8DADC] text-[#2E2E2E]"
          />

          <button
            type="submit"
            className="w-full bg-[#A8DADC] hover:bg-[#81B29A] text-[#2E2E2E] font-semibold py-3 rounded-full transition duration-300 shadow-sm"
          >
            Sign Up
          </button>

          <p className="text-center text-[#6C757D]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#457B9D] hover:text-[#81B29A] font-medium transition duration-300"
            >
              Log In
            </Link>
          </p>

        </form>
      </section>
    </div>
  );
}

export default Register;