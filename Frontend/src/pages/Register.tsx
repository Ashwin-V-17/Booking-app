import { useForm } from "react-hook-form";
//typescript way of defining type for the form fields
type RegisterFormData={
    firstname:string,
    lastname:string;
    email:string;
    password:string;
    confrimPassword:string;
}
const Register=()=>{
    const {register,watch,handleSubmit}=useForm<RegisterFormData>();
    const onSubmit=handleSubmit((data)=>{
          console.log(data);
    });
    return(
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <h2 className="text-3xl font-bold"> Create an Account</h2>
            <div className="flex flex-col md:flex-row gap-5">
              <label className="text-gray-700 text-sm font-bold flex-1">
                First Name
                <input className="border rounded w-full py-1 px-2 font-normal"{...register("firstname",{required:"This Field is required"})}></input>
              </label>
              <label className="text-gray-700 text-sm font-bold flex-1">
                LastName
                <input className="border rounded w-full py-1 px-2 font-normal"{...register("lastname",{required:"This Field is required"})}></input>
              </label>
            </div>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Email
                <input type="email" 
                className="border rounded w-full py-1 px-2 font-normal"{...register("email",{required:"This Field is required"})}></input>
              </label>
              <label className="text-gray-700 text-sm font-bold flex-1">
                password
                <input type="password" 
                className="border rounded w-full py-1 px-2 font-normal"
                {...register("password",{required:"This Field is required",minLength:{
                    value:6,
                    message:"Password must be atleast 6 characters",
                },})}></input>
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
              </label>
              <span>
                <button type="submit" 
                className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl">Create Account</button>
              </span>
        </form>
    );
};
export default Register;