import { ApexOptions } from "apexcharts";
import { useState } from "react";
import Chart from "react-apexcharts";

export default function Charts() {
  const [chartData, setChartData] = useState<ApexOptions>({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    chart: {
      height: 350,
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  });
    return (
      <div>
        <Chart
          options={chartData}
          series={chartData.series}
          height={350}
          type="line"
        />

        <Chart
          options={chartData}
          series={chartData.series}
          height={350}
          type="bar"
        />

        <Chart
          options={chartData}
          series={chartData.series}
          height={350}
          type="area"
        />
      </div>
    );
}
