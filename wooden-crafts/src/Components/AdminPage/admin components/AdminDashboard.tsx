import React, { useEffect, useState } from "react";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  TagFilled,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartOptions,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Function to get recent orders (manually created static data)
function getOrders() {
  // Sample data for recent orders
  const ordersData = {
    products: [
      {
        title: "Alfonso Left Aligned Convertible Sofa Cum Bed",
        quantity: 2,
        discountedPrice: 20000,
      },
      { title: "Berlin 3 Seater Sofa", quantity: 1, discountedPrice: 15000 },
      {
        title: "Evaline Bed With Box Storage",
        quantity: 3,
        discountedPrice: 30000,
      },
      {
        title: "Eliana Fully Upholstered Bed Without Storage",
        quantity: 2,
        discountedPrice: 20000,
      },
      { title: "Berlin 3 Seater Sofa", quantity: 1, discountedPrice: 15000 },

      // More orders can be added here
    ],
  };
  return Promise.resolve(ordersData);
}

// Function to get revenue data (manually created static data)
function getRevenue() {
  // Sample data for revenue
  const revenueData = {
    carts: [
      { userId: 1, discountedTotal: 10000 },
      { userId: 2, discountedTotal: 5000 },
      { userId: 3, discountedTotal: 9020 },
      { userId: 4, discountedTotal: 6000 },
      { userId: 5, discountedTotal: 7050 },
      { userId: 6, discountedTotal: 3020 },
      { userId: 3, discountedTotal: 9200 },
      { userId: 4, discountedTotal: 5000 },
      { userId: 5, discountedTotal: 8050 },
      { userId: 6, discountedTotal: 4020 },
      { userId: 3, discountedTotal: 9090 },
      { userId: 4, discountedTotal: 10000 },
      { userId: 5, discountedTotal: 5030 },
      { userId: 6, discountedTotal: 720 },
      // More revenue data can be added here
    ],
  };
  return Promise.resolve(revenueData);
}

// Rest of the code remains the same as provided previously...

const AdminDashboard: React.FC = () => {
  return (
    <div className="active">
      <div className="admin-main-dashboard">
        <h1 className="heading">Wooden Crafts Stats</h1>
        <div className="dashboard-container">
          <div className="dashboard-stats">
            <br />

            <Space direction="horizontal">
              <DashboardCard
                icon={
                  <TagFilled
                    style={{
                      color: "orange",
                      backgroundColor: "rgba(255, 221, 0, 0.25)",
                      borderRadius: 20,
                      fontSize: 30,
                      padding: 10,
                    }}
                  />
                }
                title={"Orders"}
                value={"4000"}
              />
              <DashboardCard
                icon={
                  <ShoppingCartOutlined
                    style={{
                      color: "green",
                      backgroundColor: "rgba(0,255,0,0.25)",
                      borderRadius: 20,
                      fontSize: 30,
                      padding: 10,
                    }}
                  />
                }
                title={"Orders"}
                value={"4000"}
              />
              <DashboardCard
                icon={
                  <ShoppingOutlined
                    style={{
                      color: "blue",
                      backgroundColor: "rgba(0,0,255,0.25)",
                      borderRadius: 20,
                      fontSize: 30,
                      padding: 10,
                    }}
                  />
                }
                title={"Inventory"}
                value={"2800"}
              />
              <DashboardCard
                icon={
                  <UserOutlined
                    style={{
                      color: "purple",
                      backgroundColor: "rgba(0,255,255,0.25)",
                      borderRadius: 20,
                      fontSize: 30,
                      padding: 10,
                    }}
                  />
                }
                title={"Customer"}
                value={"2000"}
              />
              <DashboardCard
                icon={
                  <DollarCircleOutlined
                    style={{
                      color: "red",
                      backgroundColor: "rgba(255,0,0,0.25)",
                      borderRadius: 20,
                      fontSize: 30,
                      padding: 10,
                    }}
                  />
                }
                title={"Revenue"}
                value={"10000"}
              />
            </Space>
            <br />
            <br />
            <Space>
              <RecentOrders />
              <DashboardChart />
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

function DashboardCard({ title, value, icon }: any) {
  return (
    <Card style={{ width: "200px" }}>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

function RecentOrders() {
  const [dataSource, setDataSource] = useState<
    { title: string; quantity: number; discountedPrice: number }[]
  >([]); // Add the type for dataSource
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products); // Removed the splice to keep all products
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text className="sub-head">Recent Orders</Typography.Text>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
}

function DashboardChart() {
  const [reveneuData, setReveneuData] = useState<{
    labels: string[];
    datasets: { label: string; data: any[]; backgroundColor: string }[];
  }>({
    labels: [],
    datasets: [],
  }); // Add the type for reveneuData

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Revenue",
            data: data,
            backgroundColor: "#e54c00",
          },
        ],
      };

      setReveneuData(dataSource);
    });
  }, []);

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Change this to one of the valid values: "top", "center", "left", "right", "bottom", "chartArea", or undefined
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };

  return (
    <>
      <Typography.Text className="sub-head">Orders Revenue</Typography.Text>
      <Card style={{ width: 500, height: 328 }}>
        <Bar options={options} data={reveneuData} />
      </Card>
    </>
  );
}
