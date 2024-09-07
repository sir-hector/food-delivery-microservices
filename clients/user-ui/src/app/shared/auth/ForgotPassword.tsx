import styles from "../../utils/style";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../graphql/actions/login.action";

const formSchema = z.object({
  email: z.string().email(),
});

type ForgotPasswordSchema = z.infer<typeof formSchema>;

const ForgotPassword = ({
  setActiveState,
}: {
  setActiveState: (e: string) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: ForgotPasswordSchema) => {
    console.log("forgot password");
  };
  return (
    <div>
      <h1 className={`${styles.title}`}>Forgot your password?</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="" className={`${styles.label}`}>
          Enter your Email
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="loginmail@gmail.com"
          className={`${styles.input}`}
        />
        {errors.email && (
          <span className="text-red-500 block mt-1">{`${errors.email.message}`}</span>
        )}
      </form>
      <br />
      <br />
      <input
        type="submit"
        value="Submit"
        disabled={isSubmitting}
        className={`${styles.button}`}
      />
      <h5 className="text-center pt-4 font-Poppins text-[14px] ">
        Or Go Back To
        <span
          className="text-[#2190ff] pl-1 cursor-pointer"
          onClick={() => setActiveState("Login")}
        >
          Login
        </span>
      </h5>
      <br />
    </div>
  );
};

export default ForgotPassword;
