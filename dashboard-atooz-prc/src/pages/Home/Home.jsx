import React, { useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";

import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import { GrView } from "react-icons/gr";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import Footer from "../../components/Footer";
import FractionDigits from "../../components/FractionDigits";
import { useApiContext } from "../../context/ApiContext";

const Home = () => {
  // data fetching
  const {
    category,
    product,
    all_users,
    order,
    purchase,
    fetchCategory,
    fetchProduct,
    fetchAllUsers,
    fetchOrder,
    fetchPurchase,
  } = useApiContext();

  useEffect(() => {
    fetchCategory();
    fetchProduct();
    fetchAllUsers();
    fetchOrder();
    fetchPurchase();
  }, [fetchAllUsers, fetchCategory, fetchOrder, fetchProduct, fetchPurchase]);

  const reversedOrders = [...order].reverse();
  const reversedPurchase = [...purchase].reverse();
  const lastFiveOrders = reversedOrders.slice(0, 4);
  const lastFivePurchase = reversedPurchase.slice(0, 4);

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
              {/* <h1>300</h1> */}
              <h1>{product && product.length}</h1>
            </div>

            <div className="card">
              <div className="card-inner">
                <h3>CATEGORIES</h3>
                <BsFillGrid3X3GapFill className="card_icon" />
              </div>
              {/* <h1>12</h1> */}
              <h1>{category && category.length}</h1>
            </div>

            <div className="card">
              <div className="card-inner">
                <h3>CUSTOMERS</h3>
                <BsPeopleFill className="card_icon" />
              </div>
              {/* <h1>33</h1> */}
              <h1>{all_users && all_users.length}</h1>
            </div>

            <div className="card">
              <div className="card-inner ">
                <h3>TOTAL ORDER</h3>
                <BsFillBellFill className="card_icon" />
              </div>
              {/* <h1>42</h1> */}
              <h1>{order && order.length}</h1>
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

          <div className="table_section my-5">
            {/* Orders Table */}
            <div className="table_container">
              <table className="styled_table">
                <thead>
                  <tr>
                    <th colSpan="5" className="fs-4">
                      Order Details
                    </th>
                  </tr>
                  <tr>
                    <th>Order No</th>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Grand Total</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {lastFiveOrders.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.order_no}</td>
                        <td>{item.order_date}</td>
                        <td>{item.customer.name}</td>
                        <td className="text-end">
                          {FractionDigits(item.grand_total_amount)}
                        </td>
                        <td>
                          <Link to={`/order-view/${item.id}`}>
                            <GrView className="text-dark" />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}

                  <tr>
                    <td colSpan="5">
                      <Link to="/orders">
                        <button className="view_btn">View All Order</button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Purchases Table */}
            <div className="table_container">
              <table className="styled_table">
                <thead>
                  <tr>
                    <th colSpan="5" className="fs-4">
                      Purchase Details
                    </th>
                  </tr>
                  <tr>
                    <th>Purchase No</th>
                    <th>Date</th>
                    <th>Supplier</th>
                    <th>Grand Total</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {lastFivePurchase.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.purchase_no}</td>
                        <td>{item.purchase_date}</td>
                        <td>{item.supplier.name}</td>
                        <td className="text-end">
                          {FractionDigits(item.grand_total_amount)}
                        </td>
                        <td>
                          <Link to={`/purchase-view/${item.id}`}>
                            <GrView className="text-dark" />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}

                  <tr>
                    <td colSpan="5">
                      <Link to="/purchase">
                        <button className="view_btn">View All Purchase</button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      <hr />
      <Footer className="footer" />
    </div>
  );
};

export default Home;
