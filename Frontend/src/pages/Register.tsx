import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from '../api-clients';//Allows us to import all the function from api-clients and in the variable apiClient
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
 export type RegisterFormData={//typescript way of defining type for the form fields
    firstname:string,
    lastname:string;
    email:string;
    password:string;
    confrimPassword:string;
}
const Register=()=>{
   const navigate=useNavigate();
     const {showToast}=useAppContext();
    const {register,watch,handleSubmit,formState:{errors},}=useForm<RegisterFormData>();

    const mutation=useMutation(apiClient.register,{
      onSuccess:()=>{
        showToast({message:"Registration Successful!",type:"SUCCESS"})
        navigate("/");
      },
      onError:(error:Error)=>{
        showToast({message:error.message,type:"ERROR"})
            }
    });

    const onSubmit=handleSubmit((data)=>{
          mutation.mutate(data);
    });
    return(
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <h2 className="text-3xl font-bold"> Create an Account</h2>
            <div className="flex flex-col md:flex-row gap-5">
              <label className="text-gray-700 text-sm font-bold flex-1">
                First Name
                <input className="border rounded w-full py-1 px-2 font-normal"{...register("firstname",{required:"This Field is required"})}></input>
                {errors.firstname &&(
                  <span className="text-red-500">{errors.firstname.message}</span>
                )}
              </label>
              <label className="text-gray-700 text-sm font-bold flex-1">
                LastName
                <input className="border rounded w-full py-1 px-2 font-normal"{...register("lastname",{required:"This Field is required"})}></input>
                {errors.lastname &&(
                  <span className="text-red-500">{errors.lastname.message}</span>
                )}
              </label>
            </div>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Email
                <input type="email" 
                className="border rounded w-full py-1 px-2 font-normal"{...register("email",{required:"This Field is required"})}></input>
                {errors.email &&(
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </label>
              <label className="text-gray-700 text-sm font-bold flex-1">
                password
                <input type="password" 
                className="border rounded w-full py-1 px-2 font-normal"
                {...register("password",{required:"This Field is required",minLength:{
                    value:6,
                    message:"Password must be atleast 6 characters",
                },})}></input>
                {errors.password &&(
                  <span className="text-red-500">{errors.password.message}</span>
                )}
              </label>
              <label className="text-gray-700 text-sm font-bold flex-1">
                Confirm Password
                <input type="password" 
                className="border rounded w-full py-1 px-2 font-normal"
                {...register("confrimPassword",{
                    validate:(val)=>{
                        if(!val){
                            return "This field is required"
                        }
                        else if(watch("password")!==val)
                        {
                            return "Your Passwords do not match";
                        }
                    },
                })}></input>
                {errors.confrimPassword &&(
                  <span className="text-red-500">{errors.confrimPassword.message}</span>
                )}
              </label>
              <span>
                <button type="submit" 
                className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl">Create Account</button>
              </span>
        </form>
    );
};
export default Register;