import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";


const UpdateProfile = () => {
    const { user } = useContext(AuthContext)
    // console.log(user);

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {

        const name = data?.fullName

        const photoURL = data.photoURL

        console.log(name, photoURL);
        updateProfile(user, {
            displayName: name,
            photoURL: photoURL,

        })
            .then(() => toast.success("Updated Successfully"))
            .catch()


    }



    return (
        <div>
            <div className="hero  min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/ngN9WJD/3357683.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="w-full lg:m-10 max-w-md p-8 space-y-3 rounded-xl border bg-slate-950 shadow-2xl shadow-sky-800  font-sans mx-auto animate__animated animate__zoomIn" >

                    <h1 className="text-3xl font-bold text-center text-indigo-600">update Profile</h1>
                    {/* Input fields and the form started */}
                    <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-6">

                        <div className="space-y-2 text-sm relative">
                            <label htmlFor="username" className="block  text-indigo-600">
                                YourName
                            </label>
                            <input type="text" placeholder="Username" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring
                        "  {...register("fullName", { required: true })} />

                        </div>

                        <div className="space-y-2 text-sm">
                            <label htmlFor="photoURL" className="block  text-indigo-600">
                                photoURL

                            </label>
                            <input type="text" placeholder="photoURL" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "

                                {...register("photoURL")} />



                        </div>



                        <input className="text-white btn btn-success" type="submit" value="submit" />

                    </form>




                </div>
            </div>
        </div>


    );
};

export default UpdateProfile;