import {useForm} from "react-hook-form";

interface IForm {
    email: string;
    password: string;
}

function Signup(){
    const {watch} = useForm<IForm>();

    console.log(watch())

    return (
        <div className="flex flex-col md:flex-row h-screen">
          
        </div>
      );
}

export default Signup