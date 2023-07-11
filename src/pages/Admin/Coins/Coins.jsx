import React, { useEffect, useState } from "react";
import "./Coins.css";
import { Table } from "antd";
import axios from "axios";

const Coins = () => {
  const [dataSource, setDataSource] = useState([]);
  const [columns, setColumns] = useState([
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => <p>{name}</p>,
    },
    {
      title: "Current Price",
      dataIndex: "current_price",
      key: "current_price",
      render: (price) => `$${price.toFixed(2)}`,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => <img src={image} alt="Coin" />,
    },
  ]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&authuser=0"
      )
      .then((response) => {
        console.log(response.data);

        setDataSource(response.data);
      });
  }, []);

  return <Table dataSource={dataSource} columns={columns} />;
};

export default Coins;
