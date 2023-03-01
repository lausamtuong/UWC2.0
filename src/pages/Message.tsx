import {useState} from 'react';
import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import Chatbar from "@/Components/Chatbar";
import {chatBarMembers} from "@/Components/Chatbar";
// import { useRouter } from 'next/router';


export default function Message() {
  // const router = useRouter();
  // const { id } = router.query;
  const [activeTab, setActiveTab] = useState(0); 
  const handleActiveTab = (item) => {
      setActiveTab(item);
  }

  console.log(activeTab)

  return (
    <>
      <Header />
      <Sidebar />
      <div className="ml-[30px] sm:ml-[250px] bg-slate-200  h-[85vh]">
        <div className="pl-[20px] pt-[28px] pr-[25px]">
          <h1 className="mb-[20px] font-manrope font-bold text-[25px]">
            Message
          </h1>
          <div className="bg-[#FCFCFC] rounded-[15px] h-[74vh] flex">
            <div className="flex-initial w-[407px]">
              <div className="pl-[20px] pt-[25px] pr-[40px]">
                  <input
                    type="text"
                    className="text-[16px] font-manrope font-regular bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                  />
                 <Chatbar handleActiveTab={handleActiveTab}/>
              </div>
            </div>
            <div className="flex-grow border-l-2">
              <div className="h-[90px] border-b-2 flex justify-between px-[20px] py-[25px]">
                <div className="flex">
                  <div className="rounded-full w-[46px] h-[46px] bg-[blue]">
                    {/* <img src="" /> */}
                  </div>
                  <div className="ml-[15px]">
                  <p className="font-semibold text-[16px] font-manrope">
                    {chatBarMembers.find((item, index) => activeTab === index)?.name}
                  </p>
                    <p className="font-normal text-[14px] font-manrope text-[#808191]">Active Now</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.18273 9.00943C2.0794 6.79522 3.19265 4.35157 5.31397 3.07877C6.3353 2.46598 7.65528 2.73192 8.35963 3.6924L9.92229 5.82331C10.5874 6.73027 10.6893 7.93307 10.1864 8.93904L9.77663 9.75849C9.65802 9.99571 9.63927 10.2701 9.7606 10.506C9.98164 10.9356 10.4524 11.6971 11.3592 12.6038C12.266 13.5106 13.0274 13.9814 13.4571 14.2024C13.6929 14.3237 13.9673 14.305 14.2045 14.1864L15.024 13.7766C16.0299 13.2737 17.2327 13.3756 18.1397 14.0407L20.2706 15.6034C21.2311 16.3077 21.497 17.6277 20.8842 18.649C19.6114 20.7704 17.1678 21.8836 14.9536 20.7803C13.0874 19.8504 10.7028 18.3114 8.17717 15.7858C5.65156 13.2602 4.11261 10.8756 3.18273 9.00943Z"
                      fill="#808191"
                    />
                  </svg>
                  <svg
                    className="mx-[20px]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H14C15.6569 19 17 17.6569 17 16V15.4286L18.8375 16.7411C20.1613 17.6866 22 16.7404 22 15.1136V8.88638C22 7.25963 20.1613 6.31339 18.8375 7.25891L17 8.57143V8C17 6.34315 15.6569 5 14 5H5Z"
                      fill="#808191"
                    />
                  </svg>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.25 9C8.25 9.41421 8.58579 9.75 9 9.75C9.41421 9.75 9.75 9.41421 9.75 9C9.75 8.58579 9.41421 8.25 9 8.25C8.58579 8.25 8.25 8.58579 8.25 9Z"
                      stroke="#808191"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.25 14.25C8.25 14.6642 8.58579 15 9 15C9.41421 15 9.75 14.6642 9.75 14.25C9.75 13.8358 9.41421 13.5 9 13.5C8.58579 13.5 8.25 13.8358 8.25 14.25Z"
                      stroke="#808191"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.25 3.75C8.25 4.16421 8.58579 4.5 9 4.5C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3C8.58579 3 8.25 3.33579 8.25 3.75Z"
                      stroke="#808191"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
