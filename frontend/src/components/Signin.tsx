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
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center gap-2">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
          <div className="flex justify-center items-center">
            <h1 className="text-black font-bold text-3xl">Welcome back!</h1>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <InputField label="UID" type="email" register={register} name="email" error={errors?.email?.message} />
            <InputField label="Password" type="password" register={register} name="password" error={errors?.password?.message} />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full text-white bg-[#2B3A67] font-bold border px-5 py-2 rounded-md cursor-pointer disabled:opacity-50"
          >
            {isLoading ? "Logging in..." : "Login"} 
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
