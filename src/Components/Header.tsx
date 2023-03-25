import { Input } from "@nextui-org/react";

const Header = () => {
  return (
    <div className="flex justify-between gap-3 mx-[20px] my-[0px] items-center">
      <div className="flex flex-col md:flex-row  py-2 gap-2 px-4 cursor-pointer rounded-xl hover:bg-blue-50 ">
        {" "}
        <svg
          width="39"
          height="36"
          viewBox="0 0 39 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="m-auto"
        >
          <path
            d="M29.8398 16.9045C30.0314 17.2378 30.1322 17.6156 30.1322 18C30.1322 18.3845 30.0314 18.7622 29.8398 19.0955L25.531 26.5289C25.3385 26.8608 25.0622 27.1363 24.7298 27.3279C24.3975 27.5194 24.0206 27.6204 23.637 27.6206L15.0656 27.6206C14.6846 27.6177 14.3109 27.5155 13.9815 27.324C13.652 27.1326 13.3782 26.8585 13.187 26.5289L8.87818 19.0955C8.68663 18.7622 8.58582 18.3845 8.58582 18C8.58582 17.6156 8.68663 17.2378 8.87818 16.9045L11.2583 12.8001L16.5546 21.8575C16.6418 22.0126 16.7691 22.1413 16.9232 22.2302C17.0772 22.3191 17.2524 22.3649 17.4302 22.3628L21.2877 22.3628C21.4656 22.3649 21.6408 22.3191 21.7948 22.2302C21.9489 22.1413 22.0762 22.0126 22.1634 21.8575L24.0921 18.4899C24.1795 18.3386 24.2255 18.167 24.2255 17.9923C24.2255 17.8176 24.1795 17.646 24.0921 17.4947L15.3973 2.45046C15.0956 1.92868 14.662 1.49541 14.14 1.19412C13.618 0.892825 13.0259 0.7341 12.4232 0.733871L11.644 0.733871C10.9544 0.733608 10.2769 0.914936 9.6797 1.25961C9.08244 1.60428 8.58648 2.10015 8.24169 2.69734L0.526706 16.0404C0.181668 16.6372 -7.84862e-07 17.3145 -7.54727e-07 18.0039C-7.24593e-07 18.6933 0.181668 19.3705 0.526706 19.9673L8.2417 33.3104C8.58697 33.9069 9.08314 34.402 9.68036 34.746C10.2776 35.0899 10.9548 35.2707 11.644 35.27L27.074 35.27C27.7636 35.2703 28.441 35.089 29.0383 34.7443C29.6355 34.3996 30.1315 33.9037 30.4763 33.3066L38.1913 19.9635C38.5363 19.3666 38.718 18.6894 38.718 18C38.718 17.3106 38.5363 16.6334 38.1913 16.0366L30.4763 2.69348C30.1315 2.09629 29.6355 1.60042 29.0383 1.25575C28.441 0.911074 27.7636 0.729754 27.074 0.730014L20.5162 0.730014L29.8398 16.9045Z"
            fill="#475BE8"
          />
        </svg>
        <div className="text-[24px] font-bold justify-center hidden sm:block ">
          UWC 2.0
        </div>
      </div>
      <div className="w-[300px] hover:border-2 hover:rounded-[18px] hover:shadow-lg hidden 2sm:block">
        <Input fullWidth={true} placeholder="Search" color="secondary" />
      </div>
      <div className="flex  justify-center items-center  mr-4">
        <div className="hover:bg-blue-100 px-2 py-2 rounded-2xl cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 15.5C13.7239 15.5 13.5 15.7239 13.5 16C13.5 17.933 11.933 19.5 10 19.5C8.067 19.5 6.5 17.933 6.5 16C6.5 15.7239 6.27614 15.5 6 15.5H1.40408C0.90477 15.5 0.5 15.0952 0.5 14.5959C0.500001 14.3507 0.599614 14.116 0.775997 13.9456L1.80495 12.9518C2.29457 12.4789 2.57018 11.8268 2.56814 11.1461L2.55867 7.9931C2.54626 3.85842 5.89462 0.5 10.0293 0.5C14.1553 0.5 17.5 3.84473 17.5 7.97067L17.5 11.1716C17.5 11.8346 17.7634 12.4705 18.2322 12.9393L19.2322 13.9393C19.4037 14.1108 19.5 14.3433 19.5 14.5858C19.5 15.0907 19.0907 15.5 18.5858 15.5H14ZM8 15.5C7.72386 15.5 7.5 15.7239 7.5 16C7.5 17.3807 8.61929 18.5 10 18.5C11.3807 18.5 12.5 17.3807 12.5 16C12.5 15.7239 12.2761 15.5 12 15.5H8ZM17.1716 14.5C17.3738 14.5 17.5561 14.3782 17.6335 14.1913C17.7109 14.0045 17.6681 13.7894 17.5251 13.6464C16.8687 12.9901 16.5 12.0998 16.5 11.1716L16.5 7.97067C16.5 4.39702 13.603 1.5 10.0293 1.5C6.44807 1.5 3.54792 4.40887 3.55867 7.9901L3.56813 11.1431C3.57095 12.0833 3.19546 12.9844 2.52722 13.6442C2.38289 13.7867 2.33894 14.0022 2.41596 14.1899C2.49297 14.3775 2.67569 14.5 2.87851 14.5L17.1716 14.5Z"
              fill="#808191"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex gap-2 cursor-pointer hover:bg-blue-100 px-3 py-2 rounded-2xl tooltip">
          <div className="tooltipText rounded-xl flex flex-row-reverse  py-[10px] justify-around">
          <div className="">
          <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L21 3"
                stroke="#323232"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 12L17 12"
                stroke="#323232"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 9L9.41421 10.5858C8.63317 11.3668 8.63316 12.6332 9.41421 13.4142L11 15"
                stroke="#323232"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
            <p className="font-semibold hidden sm:block ">Logout</p>
          </div>
          <div className="max-w-[40px] max-h-[40px] rounded-full overflow-hidden">
            {/* <img src="" alt="error avt" /> */}
            <div className="w-[40px] h-[40px] bg-slate-500"></div>
          </div>
          <div className="hidden sm:block  ">
            <p className="text-[16px] font-semibold">lau sam tuuong</p>
            <p className="font-normal">back officer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;