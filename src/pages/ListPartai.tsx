import { useEffect, useState } from "react";
import Onyet from "../assets/img/onyet.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { API } from "../config/api";

export default function ListPartai(props: any) {
  const [partais, setPartais] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/partais");
        setPartais(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(partais);

  return (
    <>
      <Navbar
        userSignIn={props.userSignIn}
        setUserSignIn={props.setUserSignIn}
      />
      <section className=" bg-white h-screen">
        <div className="container mx-auto px-4 lg:text-start text-xs lg:text-base py-52">
          <h1 className="text-center text-5xl font-bold mb-14">LIST PARTAI</h1>
          <div className="">
            <table className="mx-auto	">
              <thead className=" bg-slate-200">
                <tr>
                  <th className="border border-black lg:w-20  ...">No. Urut</th>
                  <th className="border border-black lg:p-2 lg:w-52 ...">
                    Logo
                  </th>
                  <th className="border border-black lg:p-2 lg:w-52 ...">
                    Ketua Umum
                  </th>
                  <th className="border border-black lg:p-2 p-1 ...">
                    Visi & Misi
                  </th>
                  <th className="border border-black lg:p-2  ...">Alamat</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {partais?.map((p: any, i: any) => {
                  // let logo = URL.createObjectURL(p.logo);

                  return (
                    <tr key={i}>
                      <td className="border border-black lg:p-2 text-center font-bold  ...">
                        {i + 1}
                      </td>
                      <td className="border border-black lg:p-2 ...">
                        <img src={Onyet} className="w-20 mx-auto" alt="" />
                      </td>
                      <td className="border border-black lg:p-2 ... align-text-top">
                        {p.name}
                      </td>
                      <td className="border border-black lg:p-2 align-text-top ...">
                        <ul className="list-disc ms-5">
                          <li>{p.vm}</li>
                        </ul>
                      </td>
                      <td className="border border-black lg:p-2 p-2 ... align-text-top">
                        {p.address}
                      </td>
                    </tr>
                  );
                })}
                {/* <tr>
                  <td className="border border-black lg:p-2 text-center font-bold  ...">
                    1
                  </td>
                  <td className="border border-black lg:p-2 ...">
                    <img src={Onyet} className="w-20 mx-auto" alt="" />
                  </td>
                  <td className="border border-black lg:p-2 ... align-text-top">
                    Cintara surya Paloh
                  </td>
                  <td className="border border-black lg:p-2 align-text-top ...">
                    <ul className="list-disc ms-5">
                      <li>Memindahkan Indonesia ke Isekai</li>
                      <li>Nonton anime 3x sehari.</li>
                      <li>Melakukan peresapan pada budaya jepang</li>
                    </ul>
                  </td>
                  <td className="border border-black lg:p-2 p-2 ... align-text-top">
                    Kerajaan Black Clover
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
