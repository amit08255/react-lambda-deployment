exports.handler = async (event) => {
  console.log("Received event:", event); // Debug requests
  const data = { id: 1, name: "Sample Data" };
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  };
};
