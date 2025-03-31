import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "./InputField";
import { Inputs } from "../types/types";
import { useSignin } from "../hooks/useAuth";

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { mutate, status } = useSignin();
  const isLoading = status === "pending";

  const onSubmit: SubmitHandler<Inputs> = (data) => {mutate(data)};
  return (
    <div className="h-screen flex  justify-center items-center">
      <div className=" w-[1024px] flex justify-center">
    <div className="flex flex-col justify-center w-[400px] gap-8">
        <div className="flex justify-center items-center">
            <h1 className="text-black font-semibold text-4xl">Welcome back!</h1>
          </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex  w-full pt-[24px] pb-[24px] pl-[32px] pr-[32px] flex-col justify-center gap-8">
          <div className="flex flex-col justify-center gap-5">
            <InputField label="UID" type="email" register={register} name="email" error={errors?.email?.message} />
            <InputField label="Password" type="password" register={register} name="password" error={errors?.password?.message} />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full text-xl text-white bg-[#2B3A67] font-semibold  border px-10 py-4 rounded-lg cursor-pointer disabled:opacity-50"
          >
            {isLoading ? "Logging in..." : "Login"} 
          </button>
        </form>
        </div>
        </div>
    </div>
  );
}

export default Signin;
