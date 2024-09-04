import styles from "../../utils/style";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";
import {
  AiFillGithub,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long!"),
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long!"),
  phone_number: z
    .number()
    .min(9, "Phone number must be at least 9 characters "),
});

type SignUpSchema = z.infer<typeof formSchema>;

const SignUp = ({
  setActiveState,
}: {
  setActiveState: (e: string) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(formSchema),
  });

  const [show, setShow] = useState(false);

  const onSubmit = (data: SignUpSchema) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <h1 className={`${styles.title}`}>Sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full relative-mb-3">
          <label htmlFor="" className={`${styles.label}`}>
            Enter your name
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="name"
            className={`${styles.input}`}
          />
          {errors.name && (
            <span className="text-red-500 block mt-1">{`${errors.name.message}`}</span>
          )}
        </div>
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
        <label htmlFor="" className={`${styles.label}`}>
          Enter your phone number
        </label>
        <input
          {...register("phone_number")}
          type="text"
          placeholder="791773420"
          className={`${styles.input}`}
        />
        {errors.name && (
          <span className="text-red-500 block mt-1">{`${errors.name.message}`}</span>
        )}
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
          {errors.password && (
            <span className="text-red-500 block mt-1">{`${errors.password.message}`}</span>
          )}
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
        <div className="w-full mt-5">
          <input
            type="submit"
            value="Sign up"
            disabled={isSubmitting}
            className={`${styles.button}`}
          />
        </div>
        <br />
        <h5 className="text-center pt-4 font-Poppins text-[14px] text-white">
          Or join with
        </h5>
        <div className="flex items-center justify-center my-3">
          <FcGoogle size={30} className="cursor-pointer mr-2" />
          <AiFillGithub size={30} className="cursor-pointer mr-2" />
        </div>
        <h5 className="text-center pt-4 font-Poppins text-[14px] ">
          Already have an account?{" "}
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => setActiveState("Login")}
          >
            Login in
          </span>
        </h5>
        <br />
      </form>
    </div>
  );
};

export default SignUp;
