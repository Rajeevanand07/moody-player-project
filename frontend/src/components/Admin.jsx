import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(localStorage.getItem('token')?true:false);
  const [loading, setLoading] = useState(false);
  const {
    register: register1,
    handleSubmit: handleSubmit1,
    reset: reset1,
    formState: { errors: errors1 },
  } = useForm();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    reset: reset2,
    formState: { errors: errors2 },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("artist", data.artist);
    formData.append("mood", data.mood);
    formData.append("audio", data.audio[0]); // FileList -> File
    formData.append("image", data.image[0]);

    try {
      const res = await axios.post("https://moody-player-project.onrender.com/songs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Song added successfully");
      localStorage.removeItem("token");
      reset1();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleLogin = async (data) => {
    try {
      const res = await axios.post(
        "https://moody-player-project.onrender.com/admin/login",
        JSON.stringify({
          user: data.name,
          pass: data.pass,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success("Login successful");
      console.log(res.data.token);
      localStorage.setItem("token", res.data.token);
      setIsLogin(true);
      reset2();
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
    }
  };

  return (
    <>
      {isLogin ? (
        <div className="h-[100%] overflow-y-auto flex justify-center items-center">
          <div className="max-w-md mx-auto mt-8 p-6">
            <h2 className="text-4xl font-black pb-3 mb-5 text-center bg-gradient-to-l from-[#1db954] to-[#191414] bg-clip-text text-transparent">
              Add New Song
            </h2>

            <form onSubmit={handleSubmit1(onSubmit)} className="space-y-4">
              {/* Song Name Field */}
              <div>
                <input
                  type="text"
                  name="title"
                  required
                  className="w-full pb-2 border-0 border-b-2 border-gray-300 focus:border-[#1db954] outline-none text-lg bg-transparent placeholder-gray-500"
                  placeholder="Song name"
                  {...register1("title", { required: true })}
                />
              </div>

              {/* Artist Field */}
              <div>
                <input
                  type="text"
                  name="artist"
                  required
                  className="w-full pb-2 border-0 border-b-2 border-gray-300 focus:border-[#1db954] outline-none text-lg bg-transparent placeholder-gray-500"
                  placeholder="Artist"
                  {...register1("artist", { required: true })}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="mood"
                  required
                  className="w-full pb-2 border-0 border-b-2 border-gray-300 focus:border-[#1db954] outline-none text-lg bg-transparent placeholder-gray-500"
                  placeholder="Vibe"
                  {...register1("mood", { required: true })}
                />
              </div>

              {/* Song File Field */}
              <div>
                <input
                  type="file"
                  name="audio"
                  accept="audio/*"
                  required
                  className="w-full pb-2 border-0 border-b-2 border-gray-300 focus:border-[#1db954] outline-none text-lg bg-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#1db954] file:text-white hover:file:bg-[#1ed760]"
                  {...register1("audio", { required: true })}
                />
              </div>

              {/* Cover Image Field */}
              <div>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  required
                  className="w-full pb-2 border-0 border-b-2 border-gray-300 focus:border-[#1db954] outline-none text-lg bg-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#1db954] file:text-white hover:file:bg-[#1ed760]"
                  {...register1("image", { required: true })}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-[#1db954] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1ed760] focus:ring-2 focus:ring-[#1db954] focus:ring-offset-2 transition-all duration-200"
                >
                  {loading ? "Uploading..." : "Add Song"}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
          <div className="h-[100%] overflow-y-auto flex justify-center items-center">
            <div className="max-w-md mx-auto mt-8 p-6">
              <h2 className="text-4xl font-black pb-3 mb-5 text-center bg-gradient-to-l from-[#1db954] to-[#191414] bg-clip-text text-transparent">
                Login
              </h2>

              <form onSubmit={handleSubmit2(handleLogin)} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full pb-2 border-0 border-b-2 border-gray-300 focus:border-[#1db954] outline-none text-lg bg-transparent placeholder-gray-500"
                    placeholder="Name"
                    {...register2("name", { required: true })}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="pass"
                    required
                    className="w-full pb-2 border-0 border-b-2 border-gray-300 focus:border-[#1db954] outline-none text-lg bg-transparent placeholder-gray-500"
                    placeholder="Password"
                    {...register2("pass", { required: true })}
                  />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-[#1db954] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1ed760] focus:ring-2 focus:ring-[#1db954] focus:ring-offset-2 transition-all duration-200"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
      )}
    </>
  );
};

export default Admin;
