import { Header } from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import Maps from "../Components/Map";


export default function Dashboard() {
  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const zoom = 10;
  return (
    <>
      <Header />
      <Sidebar />
      <div className="ml-[30px] sm:ml-[250px] bg-slate-200  h-[85vh]">
        <div className="mx-[30px]">
          <div className="flex justify-between items-center py-4 ">
            <p className="font-bold text-2xl">Dashboard</p>
            <div className="flex gap-4 ">
              <div className="flex justify-between gap-2 cursor-pointer px-2 py-4 rounded-3xl bg-white hover:bg-slate-100">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
                    stroke="#222222"
                    stroke-width="2"
                  />
                  <path
                    d="M12 8L12 16"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 12L8 12"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>Create New Route</p>
              </div>

              <div className="flex justify-between gap-2 cursor-pointer px-2 py-4 rounded-3xl bg-white hover:bg-slate-100">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
                    stroke="#222222"
                    stroke-width="2"
                  />
                  <path
                    d="M12 8L12 16"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 12L8 12"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>Assign task</p>
              </div>
            </div>
          </div>
         
          <div className="flex mt-2 gap-4">
            <div className="w-[700px] bg-white h-[270px]"></div>
            <div className="flex-1 bg-white h-[270px]"></div>
          </div>
          <div className="flex mt-2 gap-4">
            <Maps/>
            <p>2</p>
          </div>
        </div>
      </div>
    </>
  );
}
