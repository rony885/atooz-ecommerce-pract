import React from "react";
// import styled from "styled-components";
import "./home.css";
import Footer from "../../components/Footer";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const Home = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    // <Wrapper>
    <div className="layout">
      <div className="hone_wrapper">
        <main className="main-container">
          <div className="main-title">
            <h3>DASHBOARD</h3>
          </div>

          <div className="main-cards">
            <div className="card">
              <div className="card-inner">
                <h3>PRODUCTS</h3>
                <BsFillArchiveFill className="card_icon" />
              </div>
              <h1>300</h1>
            </div>

            <div className="card">
              <div className="card-inner">
                <h3>CATEGORIES</h3>
                <BsFillGrid3X3GapFill className="card_icon" />
              </div>
              <h1>12</h1>
            </div>

            <div className="card">
              <div className="card-inner">
                <h3>CUSTOMERS</h3>
                <BsPeopleFill className="card_icon" />
              </div>
              <h1>33</h1>
            </div>

            <div className="card">
              <div className="card-inner ">
                <h3>ALERTS</h3>
                <BsFillBellFill className="card_icon" />
              </div>
              <h1>42</h1>
            </div>
          </div>

          <div className="charts">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </main>
      </div>
      <hr />
      <Footer className="footer" />
    </div>
    // </Wrapper>
  );
};
// const Wrapper = styled.section`
//   .grid-container {
//     display: grid;
//     grid-template-columns: 250px 1fr;
//     grid-template-rows: 60px 1fr;
//     grid-template-areas:
//       "sidebar header"
//       "sidebar main";
//     height: 100vh;
//   }
//   .layout {
//     display: flex;
//     flex-direction: column;
//     overflow-y: auto;
//     height: calc(100vh - 60px);
//   }

//   .hone_wrapper {
//     flex: 1;
//   }

//   .footer {
//     padding: 10px 20px;
//   }
//   .main-title h3 {
//     color: #000 !important;
//   }

//   @media screen and (max-width: 1024px) {
//     .card-inner > .card_icon {
//       font-size: 20px;
//     }
//     .card-inner h3 {
//       font-size: 15px !important;
//     }
//   }
//   @media screen and (max-width: 768px) {
//     .card-inner h3 {
//       font-size: 18px !important;
//     }
//   }
// `;

export default Home;
