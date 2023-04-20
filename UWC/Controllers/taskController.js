const fs = require("fs");

exports.createTask = async (req, res) => {
  const jsonData = fs.readFileSync('./Data/TaskJanitor.json', 'utf-8');
  const data = JSON.parse(jsonData);
  const newArray = data.concat(req.body)
 
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
exports.createRoute= async (req,res)=>{
  const jsonData = fs.readFileSync('./Data/MCPs.json', 'utf-8');
  const data = JSON.parse(jsonData);
  console.log(data)
  const response= data.filter((item)=>item.id==req.body.data)
  res.status(200).json(response)
}

