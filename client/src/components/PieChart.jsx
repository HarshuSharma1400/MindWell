import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [chartData, setChartData] = useState(null);
  const { user } = useSelector((state) => state.auth);

  const userId = user ? user._id : null;

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7643/phq9/result/${userId}`
        );

        const data = response.data.data;

        const severityCounts = data.reduce((acc, item) => {
          let severity = "";

          if (item.score <= 4) severity = "Minimal";
          else if (item.score <= 9) severity = "Mild";
          else if (item.score <= 14) severity = "Moderate";
          else if (item.score <= 19) severity = "Moderately Severe";
          else severity = "Severe";

          acc[severity] = (acc[severity] || 0) + 1;
          return acc;
        }, {});

        const labels = Object.keys(severityCounts);
        const values = Object.values(severityCounts);

        // 🌿 Soft pastel severity colors
        const severityColors = {
          Minimal: "#A8DADC",           // Soft Aqua
          Mild: "#81B29A",              // Calm Green
          Moderate: "#F4A261",          // Soft Orange
          "Moderately Severe": "#E76F51", // Muted Coral
          Severe: "#D62828",            // Deep Muted Red
        };

        const backgroundColors = labels.map(
          (label) => severityColors[label] || "#B0BEC5"
        );

        setChartData({
          labels,
          datasets: [
            {
              data: values,
              backgroundColor: backgroundColors,
              borderColor: "#FFFFFF",
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);

  const currentDate = new Date().toLocaleDateString();

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#2E2E2E",
          font: {
            size: 13,
          },
        },
      },
      tooltip: {
        backgroundColor: "#FFFFFF",
        titleColor: "#457B9D",
        bodyColor: "#2E2E2E",
        borderColor: "#E6EFF2",
        borderWidth: 1,
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border border-[#E6EFF2] p-6 text-center">
      {chartData ? (
        <>
          <Pie data={chartData} options={options} />
          <h2 className="mt-6 text-[#457B9D] font-semibold">
            Assessment Overview – {currentDate}
          </h2>
        </>
      ) : (
        <p className="text-[#6C757D]">Loading assessment data...</p>
      )}
    </div>
  );
};

export default PieChart;