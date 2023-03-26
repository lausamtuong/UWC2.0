import React, { useState } from "react";
import { Avatar, Grid } from "@nextui-org/react";

interface Column {
  key: string;
  name: string;
  width: number;
}

interface Row {
  [key: string]: any;
}

interface Props {
  columns: Column[];
  rows: Row[];
}
const columns = [
  { key: "IdName", name: "Name & ID", width: 180 },
  { key: "address", name: "Address", width: 200 },
];

const rows = [
  { id: 0, IdName: "John Doe", address: "john.doe@example.com" },
  { id: 1, IdName: "Jane Smith", address: "jane.smith@example.com" },
  { id: 2, IdName: "Bob Johnson", address: "bob.johnson@example.com" },
];
const ListJanitorAssign = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  function handleRowClick(index: number) {
    if (selectedRows.includes(index)) {
      setSelectedRows(
        selectedRows.filter((selectedIndex) => selectedIndex !== index)
      );
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  }

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
                   <p className='text-gray-400 '>#ID123</p>
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
