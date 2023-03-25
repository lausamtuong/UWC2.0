import React from "react";
import { Progress, Grid } from "@nextui-org/react";
interface Iprops{
  value:number;
  color:Partial<"primary"|string>;
  title:string;
}
const ProgressDashboard = (props:Iprops) => {
  return (
    <div>
     <div className="flex justify-between">
      <p className="font-semibold text-[16px]">{props.title}</p>
      <div className="font-semibold text-[16px]">{props.value}%</div>
     </div>
          <Progress value={props.value} size="sm" color={props.color} />
    </div>
  );
};

export default ProgressDashboard;
