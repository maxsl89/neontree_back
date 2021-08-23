const catchAsync = require("./../utils/catchAsync");
const axios = require("axios");

const instance = axios.create({
  baseURL: "https://nodes.guru/",
  headers: { "Content-Type": "application/json" },
});

exports.getInfo = catchAsync(async (req, res, next) => {
  let response = {    
        };
  try {
    const res = await instance.get(
      `api/nym/mixnode?q=punk10uf6767p5k8rr9pctm6e8k7fz9z9rcvzfkalsv&limit=6`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );      

    response.identity_key = res.data.metrics.identity_key;
    response.host = res.data.metrics.host;
    response.version = res.data.metrics.version;
    response.total_bond = res.data.metrics.total_bond;
    response.most_recent_ipv4 = res.data.connection.most_recent_ipv4;
    response.most_recent_ipv6 = res.data.connection.most_recent_ipv6;
    response.last_hour_ipv4 = res.data.connection.last_hour_ipv4;
    response.last_hour_ipv6 = res.data.connection.last_hour_ipv6;
    response.last_day_ipv4 = res.data.connection.last_day_ipv4;
    response.last_day_ipv6 = res.data.connection.last_day_ipv6;
    response.rewards = res.data.rewards;
    response.delegators = res.data.delegators;  

    
  } catch (error) {
    console.error(error);
  }

  res.status(201).json({
    status: "success",
    data: {
      data: response,
    },
  });
});
