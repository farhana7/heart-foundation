import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import "./Donate.css";

const Donate = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2>Donation for unprivileged</h2>
      <img
        src="https://image.freepik.com/free-vector/hands-with-heart-charity-donation_24877-54458.jpg"
        alt=""
      />
      <div>
        <form className="donate-form" onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue={user.displayName} {...register("name")} />

          <input
            defaultValue={user.email}
            {...register("email", { required: true })}
          />

          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="Address"
            defaultValue=""
            {...register("address")}
          />
          <input placeholder="City" defaultValue="" {...register("city")} />
          <input
            placeholder="Phone number"
            defaultValue=""
            {...register("phone")}
          />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Donate;
