import { useMutation,useQuery} from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Inputs } from "../types/types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; 

const API_URL = import.meta.env.VITE_BACKEND_URL;

axios.defaults.withCredentials = true;  // Ensure cookies are always sent
axios.defaults.headers.common["Content-Type"] = "application/json";

export const useSignin = () => {
  const navigate=useNavigate();
    return useMutation({
      mutationFn: async (data:Inputs) => {
        console.log(data);
        const response = await axios.post(`${API_URL}/api/v1/auth/signin`, data);
        return response.data;
      },
      onSuccess: (data) =>{
        navigate("/dashboard");
        toast.success(data?.message || "Login successful!"); 
      },
      onError: (error: AxiosError<{ message?: string }>) => {
        toast.error(error.response?.data?.message || "Login failed!"); 
      },
    });
  };

  
// Check Auth Status via a Protected Route

export const useAuthStatus = () => {
    return useQuery({
      queryKey: ["authStatus"],
      queryFn: async () => {
          const response= await axios.get(`${API_URL}/api/v1/user/authstatus`,{withCredentials:true});
           const isAuthenticated= await response.data?.authenticated;
           return isAuthenticated;
      },
      retry: false,
      staleTime: 5 * 60 * 1000,
    });
  };


  
  export const useLogout = () => {
   // const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async () =>{
        const res=await axios.get(`${API_URL}/api/v1/auth/signout`, {});
        return res.data;
      },
      onSuccess: (data) => {
        //queryClient.invalidateQueries({ queryKey: ["authStatus"] }); 
        toast.success(data?.message || "Signout successful!");
      },
    });
  };