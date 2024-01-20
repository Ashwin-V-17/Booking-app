import { useEffect } from "react";

type ToastProps={//Type definition for props
    message:string;
    type:"SUCCESS" | "ERROR";
    onClose:()=>void;
};
const Toast=({message,type,onClose}:ToastProps)=>{
     //Setting time for the toast messages to disappear
    useEffect(()=>{
        const timer=setTimeout(()=>{
             onClose();
        },5000);
         return ()=>{
            clearTimeout(timer);
         }
    },[onClose]);//Dependency array this says that this will run when the first time the component is rendered
     const styles= type==="SUCCESS"
             ?"fixed top-4 right-4 z-50 p-4 rounded-md bg-green-600 text-white max-w-md"
             :"fixed top-4 right-4 z-50 p-4 rounded-md bg-red-600 text-white max-w-md"
   return(
    <div className={styles}>
        <div className="flex justify-center items-center">
            <span className="text-lg font-semibold">
                 {message}
            </span>
        </div>
    </div>
   )
}
export default Toast;