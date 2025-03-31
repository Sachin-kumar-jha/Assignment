import { UseFormRegister} from "react-hook-form";
import { Inputs } from "../types/types"; // Adjust import path if necessary

interface InputFieldProps {
  label: string;
  type: string;
  register: UseFormRegister<Inputs>;
  name: keyof Inputs;
  error?: string | null;  
}

const InputField: React.FC<InputFieldProps> = ({ label, type, register, name, error }) => (
  <div className="flex w-full flex-col">
    <input 
      placeholder={label} 
      {...register(name, { required: `${label} is required` })} 
      type={type} 
      className="border px-3 py-2.5 rounded-lg focus:outline-none text-zinc-900 font-medium t text-lg tracking-wider shadow-sm" 
    />
    {error && <span className="text-red-500 text-sm">{error}</span>}
  </div>
);

export default InputField;
