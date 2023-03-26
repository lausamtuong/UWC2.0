import React from "react";
import { Avatar, Grid } from "@nextui-org/react";
type status = "done" | "working";
interface Iprops {
  role: string;
  status: status;
  name: string;
}
const EmployeeCard = (props: Iprops) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Avatar squared src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <div>
          <p className="font-semibold">{props.name}</p>

          <p>{props.role}</p>
        </div>
      </div>
      
        <div className={`px-3 py-2 ${props.status == "done"?"bg-green-200 ":"bg-orange-200"} rounded-2xl text-center`}>
          <div className={`font-bold ${props.status == "done"?" text-green-400 ":" text-orange-400"}`}>{props.status}</div>
        </div>
      
    </div>
  );
};

export default EmployeeCard;
