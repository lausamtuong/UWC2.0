const fs = require("fs");
exports.createTask = async (req, res) => {
  const jsonData = fs.readFileSync('./Data/TaskJanitor.json', 'utf-8');
  const data = JSON.parse(jsonData);
  const newArray = data.concat(req.body)
  console.log(123)
  fs.writeFileSync("./Data/TaskJanitor.json", JSON.stringify(newArray), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Data written to file");
  });
  console.log("Data written to file");
 // res.status(201).json(dataArray);
};

