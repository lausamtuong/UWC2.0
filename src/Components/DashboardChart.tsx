import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
interface Iprops {
  title: string;
  color: string;
  text: string;
  data: number[];
}
const DashboardChart = (props: Iprops) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  let myChart: any;
  useEffect(() => {
    if (chartRef.current) {
      const myChartRef = chartRef.current.getContext("2d");
      if (!myChartRef) {
        throw new Error("Could not get chart context");
      }
      if (typeof myChart !== "undefined") {
        myChart.destroy();
      }
      myChart = new Chart(myChartRef, {
        type: "doughnut",
        data: {
          datasets: [
            {
              label: "values",
              data: props.data,
              backgroundColor: [props.color, "rgb(220,220,220)"],
              hoverOffset: 4,
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: 28,
          
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, []);

  return (
    <div className="flex flex-col rounded-xl items-center justify-center w-48 bg-white h-full">
      <div className="text-xl text-gray-400 font-bold">{props.title} </div>
      <div>
        <canvas id="myChart" ref={chartRef} style={{ width: "100px" }} />
      </div>
      <div className="flex justify-around w-full my-2">
        <div
          className={`text-[${props.text}]  px-4 bg-[#b0fad5] rounded-2xl font-bold flex gap-2 items-center`}
          style={{ color: props.text }}
        >
          <span className="font-bold text-[30px] pb-[17px] leading-[0px]">
            .
          </span>
          <span className={`font-bold `}>Assigned</span>
        </div>
        <div className="font-bold">{props.data[0]}</div>
      </div>
      <div className="flex justify-around w-full">
        <div className="px-4 text-gray-400 font-bold bg-[#b0fad5] rounded-2xl ">
          Not Assigned
        </div>
        <div className="font-bold">{props.data[1]}</div>
      </div>
    </div>
  );
};

export default DashboardChart;
