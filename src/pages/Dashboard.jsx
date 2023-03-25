import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import DashboardChart from "@/Components/DashboardChart";
import ProgressDashboard from "@/Components/Progress";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Progress, Grid } from "@nextui-org/react";
export default function Dashboard() {
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
  });
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    setShowMap(true);
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <div className="ml-[30px] sm:ml-[250px] bg-slate-200  h-[85vh]">
        <div className="mx-[30px] flex flex-col h-full">
          <div className="flex items-center justify-between py-4 ">
            <p className="font-bold text-2xl">Dashboard</p>
            <div className="flex gap-4  ">
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

          <div className="flex mt-2 gap-4 ">
            <div className=" h-[230px] flex gap-4">
              <DashboardChart
                title="Routes"
                color="rgb(51,213,131)"
                text="emerald-400"
                data={[12,14]}
              ></DashboardChart>
              <DashboardChart
                title="Employees"
                color="rgb(11,0,255)"
                text="blue-600"
                data={[100,12]}
              ></DashboardChart>
              <DashboardChart
                title="MCPs"
                color="rgb(255,33,0)"
                text="red-600"
                data={[20,12]}
              ></DashboardChart>
            </div>
            <div className="flex-1 bg-white h-full px-2 py-2 ">
              <div className="flex justify-between">
                <p className="font-bold text-xl text-gray-400">MCPs status</p>
                <div className="">Area</div>
              </div>
              <Grid.Container sm={18} gap={1}>
                <Grid>
                  <ProgressDashboard
                    value={23}
                    color="success"
                    title="Chợ Bến Thành"
                  />
                  <ProgressDashboard
                    value={40}
                    color="success"
                    title="48 Cô Giang, Quận 1"
                  />
                  <ProgressDashboard
                    value={50}
                    color="warning"
                    title="Đinh Tiên Hoàng, Quận 1"
                  />
                  <ProgressDashboard
                    value={90}
                    color="error"
                    title="Lê Thánh Tôn, Quận 7"
                  />
                  <ProgressDashboard
                    value={80}
                    color="error"
                    title="Trường Sa, Quận Bình Thạnh"
                  />
                </Grid>
              </Grid.Container>
            </div>
          </div>
          <div className="flex mt-2 gap-4 flex-1">
            <div className="flex-1">{showMap && <MapWithNoSSR />}</div>
            <p>2</p>
          </div>
        </div>
      </div>
    </>
  );
}
