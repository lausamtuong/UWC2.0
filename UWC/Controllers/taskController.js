const fs = require("fs");
const dataArray = require("../Data/TaskCollector.json");
exports.createTask = async (req, res) => {
 // Parse the JSON data into a JavaScript object
  //Add the new object to the array
  dataArray.push(req.body.data);
  fs.writeFile("./Data/TaskCollector.json", JSON.stringify(dataArray), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Data written to file");
  });
  console.log("Data written to file");
  res.status(201).json(dataArray);
};
