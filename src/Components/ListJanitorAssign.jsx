import React, { useState,useEffect } from "react";
import { Avatar, Grid } from "@nextui-org/react";

const columns = [
  { key: "IdName", name: "Name & ID", width: 180 },
  { key: "address", name: "Address", width: 200 },
];



const ListJanitorAssign = () => {
  const [rows, setRows] = useState([
    { id: 0, name: "John Doe", address: "Quận 1", status: "None" },
    { id: 1, name: "Jane Smith", address: "Quận 3", status: "None" },
    { id: 2, name: "Bob Johnson", address: "Quận 5", status: "None" },
    { id: 3, name: "Kyle Walker", address: "Quận Bình Thạnh", status: "None" },
    { id: 4, name: "Ronaldo", address: "Quận Tân Phú", status: "None" },
    { id: 5, name: "Lewandoski", address: "Quận Bình Chánh", status: "None" },
    { id: 6, name: "LauSamTuong", address: "Quận 1", status: "None" }, 
    { id: 7, name: "LauSamTuong", address: "Quận 11", status: "None" }, 
    { id: 8, name: "LauSamTuong", address: "Quận 1", status: "None" }, 
    { id: 9, name: "LauSamTuong", address: "Quận 3", status: "None" }, 
    { id: 10, name: "LauSamTuong", address: "Quận 5", status: "None" }, 
    { id: 11, name: "LauSamTuong", address: "Quận 6", status: "None" }, 
    { id: 12, name: "LauSamTuong", address: "Quận 4", status: "None" }, 
    { id: 13, name: "LauSamTuong", address: "Quận Bình Tân", status: "None" }, 
    { id: 14, name: "LauSamTuong", address: "Quận Bình Chánh", status: "None" }, 
  ]);
  useEffect(() => {
    
    const arr2=JSON?.parse(localStorage.getItem('JAN'))
    function filterUniqueObjects(arr1, arr2) {
      const uniqueArr1 = arr1.filter((obj1) => !arr2.some((obj2) => obj2.id === obj1.id));
      const uniqueArr2 = arr2.filter((obj2) => !arr1.some((obj1) => obj1.id === obj2.id));
      return [...uniqueArr1, ...uniqueArr2];
    }
    setRows(()=>filterUniqueObjects(rows,arr2))

  }, []);
  const [selectedRows, setSelectedRows] = useState([]);
  const [janList, setJanList] = useState([]);
  function handleRowClick(order) {
    let flag = false;
    janList?.map((item) => {
      if (item.id === order) flag = true;
    });
    if (flag) {
      setJanList(
        janList.filter((selectedIndex, index) => selectedIndex.id !== order)
      );
  
      setSelectedRows(
        selectedRows.filter((selectedIndex) => selectedIndex !== order)
      );
    } else {
      setSelectedRows([...selectedRows, order]);
      setJanList([...janList, rows[order]]);
    }
   
  }
  localStorage.setItem("TEMP_JAN", JSON.stringify(janList)||"[]");


  
  

  return (
    <table>
      <thead>
        <tr>
          <th>
            <input
              className="rounded-2xl"
              type="checkbox"
              checked={selectedRows?.length === rows?.length}
              onChange={() => {
                if (selectedRows?.length === rows?.length) {
                  setSelectedRows([]);
                } else {
                  setSelectedRows(rows?.map((row, index) => index));
                }
              }}
            />
          </th>
          {columns?.map((column) => (
            <th key={column.key} style={{ width: column.width }}>
              {column.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row, index) => (
          <tr
            key={index}
            style={{
              backgroundColor: selectedRows.includes(index)
                ? "lightblue"
                : "transparent",
            }}
            onClick={() => handleRowClick(index)}
            className="my-3 border-b-stone-400 border-b-[1px] py-[10px]"
          >
            <td className="w-[60px]">
              <input
                type="checkbox"
                checked={selectedRows?.includes(index)}
                onChange={() => handleRowClick(index)}
              />
            </td>
            {columns?.map((column) => (
              <>
                {column.key == "IdName" ? (
                  <div className="flex items-center gap-2 my-5">
                    <Avatar
                      squared
                      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    />
                    <div className="">
                      <p>{row[column.key]}</p>
                      <p className="text-gray-400 ">#ID123</p>
                    </div>
                  </div>
                ) : (
                  <td key={column.key}>{row[column.key]}</td>
                )}
              </>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListJanitorAssign;
