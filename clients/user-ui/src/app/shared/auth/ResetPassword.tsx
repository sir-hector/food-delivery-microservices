"use client";
import styles from "../../utils/style";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../graphql/actions/login.action";
import { useState } from "react";
import { RESET_PASSWORD } from "../../graphql/actions/resetPassword.action";

const formSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters long!"),
    confirmPassword: z.string(),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords must match",
      path: ["confirmPassword"],
    }
  );

type ResetPassword = z.infer<typeof formSchema>;

const ResetPassword = ({
  activationToken,
}: {
  activationToken: string | string[];
}) => {
  const [resetPassword, { loading }] = useMutation(RESET_PASSWORD);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ResetPassword>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: ResetPassword) => {
    try {
      const response = await resetPassword({
        variables: {
          password: data.password,
          activationToken: activationToken,
        },
      });
      toast.success("Password changed succesfully");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const [show, setShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);

  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="md:w-[500px] w-full">
        <h1 className={`${styles.title}`}>Reset your password</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full mt-5 relative mb-1">
            <label htmlFor="passsword" className={`${styles.label}`}>
              Enter your password
            </label>
            <input
              {...register("password")}
              type={!show ? "password" : "text"}
              placeholder="password!@#"
              className={`${styles.input}`}
            />
            {!show ? (
              <AiOutlineEyeInvisible
                className="absolute bottom-3 right-2 z-1 cursor-pointer"
                size={20}
                onClick={() => setShow(true)}
              />
            ) : (
              <AiOutlineEye
                className="absolute bottom-3 right-2 z-1 cursor-pointer"
                size={20}
                onClick={() => setShow(false)}
              />
            )}
          </div>
          {errors.password && (
            <span className="text-red-500 block mt-1">{`${errors.password.message}`}</span>
          )}
          <br />
          <div className="w-full mt-1 relative mb-1">
            <label htmlFor="password" className={`${styles.label}`}>
              Enter your confirm password
            </label>
            <input
              {...register("confirmPassword")}
              type={!confirmPasswordShow ? "password" : "text"}
              placeholder="password!@#"
              className={`${styles.input}`}
            />
            {!confirmPasswordShow ? (
              <AiOutlineEyeInvisible
                className="absolute bottom-3 right-2 z-1 cursor-pointer"
                size={20}
                onClick={() => setConfirmPasswordShow(true)}
              />
            ) : (
              <AiOutlineEye
                className="absolute bottom-3 right-2 z-1 cursor-pointer"
                size={20}
                onClick={() => setConfirmPasswordShow(false)}
              />
            )}
          </div>
          {errors.confirmPassword && (
            <span className="text-red-500 block mt-1">{`${errors.confirmPassword.message}`}</span>
          )}
          <div className="w-full mt-5">
            <input
              type="submit"
              value="Login"
              disabled={isSubmitting || loading}
              className={`${styles.button}`}
            />
          </div>
          <br />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
