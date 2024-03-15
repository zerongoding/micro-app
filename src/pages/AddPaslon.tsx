import { useEffect, useState } from "react";
import Onyet from "../assets/img/onyet.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { API } from "../config/api";

export default function AddPaslon(props: any) {
  const navigate = useNavigate();


  const [paslon, setPaslon] = useState({
    name: "",
    no_urut: "",
    vm: "",
    image: "",
  });

  const handleOnSubmit = async (e: any) => {
    try {
      e.preventDefault();
      await API.post("/paslon", paslon);
      alert("Add Paslon succses!");
      navigate("/list-paslon");
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (e: any) => {
    if (e.target.type === "file") {
      setPaslon({
        ...paslon,
        [e.target.name]: e.target.files[0],
      });
    }
    // Create image url for preview

    setPaslon({
      ...paslon,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Navbar
        userSignIn={props.userSignIn}
        setUserSignIn={props.setUserSignIn}
      />
      <section className=" bg-white h-screen pt-52">
        <div className="container mx-auto">
          <h1 className="text-center font-bold text-2xl lg:mb-10 lg:text-5xl">
            Add Paslon
          </h1>

          <form
            onSubmit={handleOnSubmit}
            className="grid grid-cols-3 px-4 gap-5 lg:w-[1000px] mx-auto"
          >
            <div className="flex flex-col gap-2 items-center lg:items-start">
              {/* {image && ( */}
              <div className=" w-full mt-2">
                <img
                  // src={URL.createObjectURL(image)}
                  src={Onyet}
                  alt="Preview"
                  className="w-full"
                />
              </div>
              {/* )} */}
              <label
                htmlFor="image"
                className="block text-lg font-medium text-gray-700 w-full mb-2 cursor-pointer"
              >
                <span className="bg-black text-white p-1 w-full text-center lg:py-3 text-xs lg:text-base rounded inline-block">
                  Upload Image
                </span>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  className="hidden"
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="col-span-2 flex flex-col justify-between">
              <div>
                <label className="font-semibold text-sm lg:text-xl" htmlFor="name">
                  Nama
                </label>
                <input
                  onChange={handleOnChange}
                  className=" lg:h-12 border-2 w-full rounded-lg border-lime-700"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <div>
                <label className="font-semibold text-sm lg:text-xl" htmlFor="no_urut">
                  Nomer Ururt
                </label>
                <input
                id="no_urut"
                name="no_urut"
                  onChange={handleOnChange}
                  className="lg:h-12 border-2 w-full rounded-lg border-lime-700"
                  type="text"
                />
              </div>
              <div>
                <label className="font-semibold text-sm lg:text-xl" htmlFor="vm">
                  Visi & Misi
                </label>
                <textarea
                  onChange={handleOnChange}
                  className="border-2  lg:h-52 lg:resize-none w-full rounded-lg  border-lime-700"
                  name="vm"
                  id="vm"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="col-span-3 text-white py-2 rounded-lg"
              style={{ background: "rgba(94, 90, 0, 1)" }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
