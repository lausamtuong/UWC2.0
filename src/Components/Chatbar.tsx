import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
// import Link from "next/link";

export const chatBarMembers = [
  {
    id: "1",
    name: "Ha Trung Quyen",
    url: "",
    time: "1:30 PM",
    message: "Hello, I need photos for see...",
    to: "/Message/1",
  },
  {
    id: "2",
    name: "Dang Gia Thinh",
    url: "",
    time: "2:30 PM",
    message: "How can I help you",
    to: "/Message/2",
  },
  {
    id: "3",
    name: "Lau Sam Tuong",
    url: "",
    time: "3:30 PM",
    message: "Hello",
    to: "/Message/3",
  },
  {
    id: "4",
    name: "Nguyen Tan Hao",
    url: "",
    time: "9:00 AM",
    message: "Hello",
    to: "/Message/4",
  },
  {
    id: "5",
    name: "Ngo Nhat Thien",
    url: "",
    time: "7:13 AM",
    message: "Hi",
    to: "/Message/5",
  },
  {
    id: "6",
    name: "Nguyen Trong Vinh",
    url: "",
    time: "8:21 AM",
    message: "Hi man",
    to: "/Message/6",
  },
  {
    id: "7",
    name: "Nguyen Qui",
    url: "",
    time: "9:12 AM",
    message: "I need some info...",
    to: "/Message/7",
  },
  {
    id: "8",
    name: "Nguyen Trung Nghia",
    url: "",
    time: "9:12 AM",
    message: "Hello, I need photos for see...",
    to: "/Message/8",
  },
  {
    id: "9",
    name: "Pham Dang Truong",
    url: "",
    time: "9:12 AM",
    message: "Hello, I need photos for see...",
    to: "/Message/9",
  },
];

const Chatbar = ({handleActiveTab}) => {
  // const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const tabListRef = useRef(null);

  const handleTabClick = (index) => {
    setActiveTab(index);
    // router.push(`/Message/${index + 1}`);
  };

  useEffect(() => {
    handleActiveTab(activeTab);
  },[activeTab])

  console.log(activeTab);

  return (
    <div className="my-[20px] h-[450px] overflow-hidden overflow-y-scroll" ref={tabListRef}>
      {chatBarMembers.map((member, index) => (
        <div
          onClick={()=> handleTabClick(index)}
          key={index}
          className={`${activeTab === index ? 'bg-mediumslateblue': 'bg-white-color'} h-[75px] flex items-center justify-between px-[15px] rounded-[5px] hover:opacity-80 cursor-pointer`}
        >
          <div className="flex">
            <div className="w-[46px] h-[46px] bg-black mr-[10px] rounded-full"></div>
            <div className={`${activeTab === index ? 'text-white-color': 'text-text-primary-color'} font-manrope`}>
              <p className="font-semibold text-[16px]">{member.name}</p>
              <p className="font-normal text-[14px]">{member.message}</p>
            </div>
          </div>
          <div className={`${activeTab === index ? 'text-white-color': 'text-text-primary-color'} font-manrope font-medium -text[14px]`}>
            {member.time}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Chatbar;
