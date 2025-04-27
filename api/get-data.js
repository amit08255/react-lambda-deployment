exports.handler = async (event) => {
  console.log("Received event:", event); // Debug requests
  const data = { id: 1, name: "Sample Data" };
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Or specify your React app's domain here
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "OPTIONS,GET",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
};
