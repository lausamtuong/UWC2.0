import React from "react";
import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "../../assets/StyledBadge";
import { IconButton } from "../../assets/IconButton";
import { EyeIcon } from "../../assets/EyeIcon";
import { EditIcon } from "../../assets/EditIcon";
import { DeleteIcon } from "../../assets/DeleteIcon";
import { Pagination } from "@nextui-org/react";
import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import { useRouter } from 'next/navigation';
const Employee = () => {
  const router = useRouter();
  const columns = [
    { name: "Tên & ID", uid: "name" },
    { name: "Phương tiện", uid: "vehicle" },
    { name: "Vai trò", uid: "role" },
    { name: "Tuyến đường", uid: "route" },
    { name: "Khu vực", uid: "area" },
    { name: "Trạng thái", uid: "status" },
    { name: "Chỉnh sửa", uid: "actions" },
  ];
  const users = [
    {
      id: 1,
      name: "Tony Reichert",
      vehicle: "Xe tải 1",
      role: "collector",
      route: "Route 1",
      area: "Khu vực 1",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "tony.reichert@example.com",
    },

    {
      id: 2,
      name: "Tony Reichert",
      vehicle: "Xe tải 1",
      role: "janitor",
      route: "Route 1",
      area: "Khu vực 1",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "tony.reichert@example.com",
    },
  ];
  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User squared src={user.avatar} name={cellValue} css={{ p: 0 }}>
            {user.email}
          </User>
        );
      case "status":
        return <StyledBadge type={user.status}>{cellValue}</StyledBadge>;
      case "role":
        return cellValue == "collector" ? (
          <div className="px-2 flex gap-2 items-center max-w-[130px] justify-center py-1 bg-blue-300 rounded-2xl">
            <span className="text-4xl text-blue-700 font-bold leading-[0] mb-[20px]">
              .
            </span>
            <div className="font-bold text-blue-700">{cellValue}</div>
          </div>
        ) : (
          <div className="px-2 flex gap-2 items-center max-w-[130px] justify-center py-1 bg-fuchsia-300 rounded-2xl">
            <span className="text-4xl text-fuchsia-700 font-bold leading-[0] mb-[20px]">
              .
            </span>
            <div className="font-bold text-fuchsia-700">{cellValue}</div>
          </div>
        );
      case "actions":
        return (
          <Row justify="center" align="center">
            
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit user">
                <IconButton onClick={() =>  router.push(`Employee/${user.id}`)}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => console.log("Delete user", user.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <>
      <Header />
      <Sidebar />
      <div className="ml-[250px]">
        <Table
          selectionMode="multiple"
          aria-label="Example table with custom cells"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column
                key={column.uid}
                hideHeader={column.uid === "actions"}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body items={users}>
            {(item) => (
              <Table.Row>
                {(columnKey) => (
                  <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                )}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
        <div className="flex mt-4 justify-end">
          <Pagination total={20} initialPage={1} />;
        </div>
      </div>
    </>
  );
};

export default Employee;
