import { useState } from "react";
import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import Chatbar from "@/Components/Chatbar";
import { chatBarMembers } from "@/Components/Chatbar";
// import { useRouter } from 'next/router';

export default function Message() {
  // const router = useRouter();
  // const { id } = router.query;
  const [activeTab, setActiveTab] = useState(0);
  const handleActiveTab = (item: any) => {
    setActiveTab(item);
  };

  console.log(activeTab);

  return (
    <>
      <Header />
      <Sidebar />
      <div className="ml-[30px] sm:ml-[250px] bg-slate-200  h-[100vh]">
        <div className="pl-[20px] pt-[28px] pr-[25px]">
          <h1 className="mb-[20px] font-manrope font-bold text-[25px]">
            Message
          </h1>
          <div className="bg-[#FCFCFC] rounded-[15px] h-[85vh] flex ">
            <div className="flex-initial w-[407px]">
              <div className="pl-[20px] pt-[25px] pr-[40px]">
                <input
                  type="text"
                  className="text-[16px] font-manrope font-regular bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                />
                <Chatbar handleActiveTab={handleActiveTab} />
              </div>
            </div>
            <div className="flex-grow border-l-2 flex flex-col h-full">
              <div className="h-[90px] border-b-2 flex justify-between px-[20px] py-[25px]">
                <div className="flex">
                  <div className="rounded-full w-[46px] h-[46px] bg-[blue]">
                    {/* <img src="" /> */}
                  </div>
                  <div className="ml-[15px]">
                    <p className="font-semibold text-[16px] font-manrope">
                      {
                        chatBarMembers.find(
                          (item, index) => activeTab === index
                        )?.name
                      }
                    </p>
                    <p className="font-normal text-[14px] font-manrope text-[#808191]">
                      Active Now
                    </p>
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
              <div className="flex justify-center">
                <p className="text-[14px]">
                  {
                    chatBarMembers.find((item, index) => activeTab === index)
                      ?.time
                  }
                </p>
              </div>
              <div className="flex items-start px-[20px] py-[25px] h-[70vh]">
                <div className="rounded-full w-[46px] h-[46px] bg-[blue]">
                  {/* <img src="" /> */}
                </div>
                <div className="w-fit p-[10px] border-2 border-nd-text-color border-opacity-30 rounded-[10px] mx-[10px]">
                  <p className="text-[14px]">
                    {
                      chatBarMembers.find((item, index) => activeTab === index)
                        ?.message
                    }
                  </p>
                </div>
                <div>
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
              <div className=" p-[10px] flex border-t-2">
                <div className="flex justify-between items-center w-full rounded-[10px] bg-[#E4E4E4]">
                  <input
                    className="w-4/5 p-[10px] rounded-[10px] text-[14px] bg-[#E4E4E4] focus:outline-0"
                    type="text"
                    placeholder="Write message down here..."
                  />
                  <div className="flex">
                    <svg
                    className="mx-[5px]"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_30_2202)">
                        <path
                          d="M9 17.25C4.4475 17.25 0.75 13.5525 0.75 9C0.75 4.4475 4.4475 0.75 9 0.75C13.5525 0.75 17.25 4.4475 17.25 9C17.25 13.5525 13.5525 17.25 9 17.25ZM9 2.25C5.28 2.25 2.25 5.28 2.25 9C2.25 12.72 5.28 15.75 9 15.75C12.72 15.75 15.75 12.72 15.75 9C15.75 5.28 12.72 2.25 9 2.25Z"
                          fill="#808191"
                        />
                        <path
                          d="M12.0001 12.75C11.7751 12.75 11.5501 12.645 11.4001 12.45C11.3776 12.4275 10.4476 11.25 9.00005 11.25C7.53755 11.25 6.60755 12.4425 6.60005 12.45C6.35255 12.78 5.88005 12.84 5.55005 12.5925C5.22005 12.345 5.15255 11.88 5.40005 11.55C5.45255 11.475 6.77255 9.75 9.00005 9.75C11.2276 9.75 12.5476 11.475 12.6001 11.55C12.8476 11.88 12.7801 12.3525 12.4501 12.6C12.3151 12.705 12.1576 12.75 12.0001 12.75Z"
                          fill="#808191"
                        />
                        <path
                          d="M6.75745 7.5C6.34495 7.5 6.00745 7.1625 6.00745 6.75C6.00745 6.3375 6.33745 6 6.74995 6H6.75745C7.16995 6 7.50745 6.3375 7.50745 6.75C7.50745 7.1625 7.16995 7.5 6.75745 7.5Z"
                          fill="#808191"
                        />
                        <path
                          d="M11.2574 7.5C10.8449 7.5 10.5074 7.1625 10.5074 6.75C10.5074 6.3375 10.8374 6 11.2499 6H11.2574C11.6699 6 12.0074 6.3375 12.0074 6.75C12.0074 7.1625 11.6699 7.5 11.2574 7.5Z"
                          fill="#808191"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_30_2202">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <svg
                    className="mx-[5px]"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_30_2203)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.58151 2.06303C10.4302 1.24332 11.5669 0.789745 12.7468 0.799998C13.9267 0.810251 15.0554 1.28351 15.8897 2.11785C16.724 2.95218 17.1973 4.08084 17.2075 5.26073C17.2178 6.44061 16.7642 7.57732 15.9445 8.42603L15.9354 8.43533L13.6855 10.6852C13.2293 11.1416 12.6803 11.4945 12.0757 11.72C11.4711 11.9456 10.8251 12.0384 10.1815 11.9923C9.53783 11.9462 8.91164 11.7623 8.34537 11.4529C7.77909 11.1435 7.28598 10.7159 6.89947 10.1992C6.65137 9.86754 6.71912 9.39753 7.05081 9.14942C7.3825 8.90132 7.85251 8.96908 8.10062 9.30076C8.35829 9.64524 8.68703 9.93027 9.06455 10.1365C9.44206 10.3428 9.85952 10.4654 10.2886 10.4962C10.7177 10.5269 11.1484 10.465 11.5514 10.3146C11.9545 10.1643 12.3205 9.929 12.6246 9.62476L12.6247 9.62467L14.8699 7.37953C15.4136 6.8142 15.7144 6.0583 15.7076 5.27376C15.7008 4.48717 15.3853 3.73473 14.829 3.17851C14.2728 2.62228 13.5204 2.30678 12.7338 2.29994C11.9489 2.29312 11.1927 2.59417 10.6273 3.1384L9.34133 4.41687C9.04758 4.70891 8.57271 4.70752 8.28067 4.41378C7.98863 4.12003 7.99002 3.64516 8.28376 3.35312L9.57376 2.07062L9.58151 2.06303Z"
                          fill="#808191"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.92439 6.27996C6.52897 6.05444 7.17499 5.96157 7.81862 6.00767C8.46224 6.05376 9.08843 6.23774 9.65471 6.54712C10.221 6.8565 10.7141 7.28405 11.1006 7.80077C11.3487 8.13245 11.2809 8.60247 10.9493 8.85057C10.6176 9.09868 10.1476 9.03092 9.89945 8.69923C9.64178 8.35476 9.31304 8.06973 8.93552 7.86347C8.55801 7.65722 8.14055 7.53456 7.71146 7.50383C7.28238 7.4731 6.8517 7.53501 6.44865 7.68537C6.04559 7.83572 5.67959 8.07099 5.37545 8.37523L3.13022 10.6205C2.58644 11.1858 2.28565 11.9417 2.29247 12.7262C2.29931 13.5128 2.61481 14.2653 3.17104 14.8215C3.72726 15.3777 4.4797 15.6932 5.26629 15.7001C6.05082 15.7069 6.80672 15.4061 7.37205 14.8623L8.6497 13.5847C8.94259 13.2918 9.41746 13.2918 9.71036 13.5847C10.0033 13.8776 10.0033 14.3524 9.71036 14.6453L8.42786 15.9278L8.41856 15.937C7.56985 16.7567 6.43314 17.2103 5.25326 17.2C4.07337 17.1897 2.94471 16.7165 2.11038 15.8822C1.27604 15.0478 0.802781 13.9192 0.792529 12.7393C0.782276 11.5594 1.23585 10.4227 2.05556 9.57397L2.0647 9.56467L4.3146 7.31477C4.31463 7.31473 4.31457 7.3148 4.3146 7.31477C4.77078 6.85845 5.31985 6.50547 5.92439 6.27996Z"
                          fill="#808191"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_30_2203">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <button className="p-[10px]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_30_2205)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.0303 0.96967C17.3232 1.26256 17.3232 1.73744 17.0303 2.03033L8.78033 10.2803C8.48744 10.5732 8.01256 10.5732 7.71967 10.2803C7.42678 9.98744 7.42678 9.51256 7.71967 9.21967L15.9697 0.96967C16.2626 0.676777 16.7374 0.676777 17.0303 0.96967Z"
                        fill="#475BE8"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.0303 0.969668C17.2341 1.1734 17.3031 1.47582 17.2079 1.74776L11.9579 16.7478C11.8563 17.038 11.5878 17.2368 11.2806 17.2494C10.9733 17.2619 10.6895 17.0856 10.5646 16.8046L7.6818 10.3182L1.1954 7.43536C0.914389 7.31046 0.738092 7.02668 0.750627 6.71943C0.763163 6.41217 0.961991 6.14369 1.25224 6.0421L16.2522 0.792104C16.5242 0.696925 16.8266 0.76594 17.0303 0.969668ZM3.53331 6.83295L8.55461 9.06464C8.72428 9.14005 8.85995 9.27572 8.93536 9.44539L11.167 14.4667L15.2775 2.72248L3.53331 6.83295Z"
                        fill="#475BE8"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_30_2205">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
