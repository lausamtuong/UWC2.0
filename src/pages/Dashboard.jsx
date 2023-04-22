import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import DashboardChart from "@/Components/DashboardChart";
import ProgressDashboard from "@/Components/Progress";
import ListJanitorAssign from "@/Components/ListJanitorAssign";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import {
  Button,
  Grid,
  Modal,
  Pagination,
  Dropdown,
  Textarea,
} from "@nextui-org/react";
import EmployeeCard from "../Components/EmployeeCard";
import Link from "next/link";
import axios from "axios";

export default function Dashboard() {
  const router = useRouter();
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
  });
  const [click, setClick] = useState(false);
  const [amount, setAmount] = useState({ janitor: 15, collector: 15 });
  const [list, setList] = useState([])
  const [assignTask, setAssignTask] = useState(false);
  const [scheduleJan, setScheduleJan] = useState("");
  const [mcp, setMCP] = useState("");
  const [troller, setTroller] = useState("");
  const [janTask, setJanTask] = useState([]);
  const [route, setRoute] = useState(false);
  const [janitor, setJanitor] = useState(0);
  const [mcpRoute, setMcpRoute] = useState([]);
  const [collector, setCollector] = useState(false);
  const [rest, setRest] = useState([])
  const handleAssignTask = () => setAssignTask(true);
  const handleRoute = () => setRoute(true);
  const closeHandler = () => {
    setAssignTask(false);
    setRoute(false);
    setJanitor(0);
    setCollector(0);
  };
  const handleJanitor = () => {
    setJanitor(1);
    // setAssignTask(false);
  };
  const handleCollector = () => {
    setCollector(1);
    // setAssignTask(false);
  };

  const handleJanTasks = async () => {
    axios.post("http://localhost:8080/api/tasks", janTask);
    setAmount((state) => {
      return {
        ...state,
        janitor: amount.janitor - janTask.length,
      };
    });
    alert("Assign Task thành công!");
    router.refresh();
  };
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    let janTemp = JSON.parse(window.localStorage.getItem("JAN"));
    setShowMap(true);
    setAmount((state) => {
      return {
        ...state,
        janitor: amount.janitor - janTemp?.length,
      };
    });
  }, []);
  useEffect(() => {
    const idTask = parseInt(Math.random() * 1000);
    const temp = janTask.map((item) => {
      return {
        ...item,
        idTask: parseInt(idTask),
        scheduleID: scheduleJan["currentKey"],
        mcpId: mcp["currentKey"],
        trollerID: troller["currentKey"],
        status: "working",
      };
    });
    setJanTask(
      janTask.map((item) => {
        return {
          ...item,
          idTask: parseInt(idTask),
          scheduleID: scheduleJan["currentKey"],
          mcpId: mcp["currentKey"],
          trollerID: troller["currentKey"],
          status: "working",
        };
      })
    )
    let temp1 = JSON.parse(localStorage.getItem("JAN_LIST"))
    let temp2 = JSON.parse(localStorage.getItem("JAN"))
    setList(
       temp1.map((item) => {
        if(temp2.map(obj => {
          if(obj.id === item.id) return {...item, status: "working"}
        }) )
       })
    )
    localStorage.setItem(
      "JAN",
      JSON.stringify(
        JSON.parse(localStorage.getItem("JAN") || "[]").concat(temp)
      ) || "[]"
    );
  }, [troller]);

  // console.log("asdjhad", JSON.parse(localStorage.getItem("JAN")))
  console.log("asdjakjshdasdhad", list)

  //timeline dropdown
  const selectedValue = useMemo(
    () =>
      Array.from(scheduleJan)
        .join(scheduleJan === "0001")
        .replace("0001", "Ca 1 - 2,4,6")
        .replace("0002", "Ca 2 - 2,4,6")
        .replace("0003", "Ca 1 - 3,5,7")
        .replace("0004", "Ca 2 - 3,5,7"),
    [scheduleJan]
  );
  //mcp dropdown
  const mcpValue = useMemo(
    () =>
      Array.from(mcp)
        .join(mcp === "mcp0001")
        .replace("mcp0001", "Quận 1")
        .replace("mcp0002", "Quận 2")
        .replace("mcp0003", "Quận 3")
        .replace("mcp0004", "Quận 5")
        .replace("mcp0005", "Quận Bình Thạnh")
        .replace("mcp0006", "Quận 9"),
    [mcp]
  );
  //troller dropdown
  const trollerValue = useMemo(
    () =>
      Array.from(troller)
        .join(troller === "troller0001")
        .replace("troller0001", "Troller 1")
        .replace("troller0002", "Troller 2")
        .replace("troller0003", "Troller 3"),
    [troller]
  );

  const handleCreateRoute = async () => {
    axios
      .post("http://localhost:8080/api/tasks/route", {
        data: mcp["currentKey"],
      })
      .then((response) => {
        let result = [];
        while (result.length < 5) {
          const randomIndex = Math.floor(Math.random() * response.data?.length);
          const randomElement = response.data[randomIndex];

          if (!result.includes(randomElement.name)) {
            result.push(randomElement.name);
          }
          setMcpRoute(result);
        }
      });
  };

  const handleStatusMCP = async (props) => {
    await axios
      .post("http://localhost:8080/api/tasks/route", {
        data:props,
      })
      .then((response) => {
          setMcpRoute(response.data)
        })
        
}


  console.log("janitor list assigned task: ", rest)
  // console.log("janitor list")
  


  return (
    <>
      <Header />
      <Sidebar />
      <div className="ml-[30px] sm:ml-[250px] bg-slate-200  h-[100vh]">
        <div className="mx-[30px] flex flex-col h-full">
          <div className="flex items-center justify-between py-2 ">
            <p className="font-bold text-2xl">Dashboard</p>
            <div className="flex gap-4  ">
              <div
                onClick={handleRoute}
                className="flex justify-between gap-2 cursor-pointer px-2 py-4 rounded-3xl bg-white hover:bg-slate-100"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
                    stroke="#222222"
                    stroke-width="2"
                  />
                  <path
                    d="M12 8L12 16"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 12L8 12"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>Create New Route</p>
              </div>

              <div
                onClick={handleAssignTask}
                className="flex justify-between gap-2 cursor-pointer px-2 py-4 rounded-3xl bg-white hover:bg-slate-100"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
                    stroke="#222222"
                    stroke-width="2"
                  />
                  <path
                    d="M12 8L12 16"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 12L8 12"
                    stroke="#222222"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>Assign task</p>
              </div>
            </div>
          </div>

          <div className="flex mt-2 gap-4 ">
            <div className=" h-[230px] flex gap-4 ">
              <DashboardChart
                title="Collectors"
                color="rgb(51,213,131)"
                text="rgb(51,213,131)"
                data={[2, 100]}
              ></DashboardChart>
              <DashboardChart
                title="Janitors"
                color="rgb(11,0,255)"
                text="blue"
                data={[15 - amount.janitor, amount.janitor]}
              ></DashboardChart>
              <DashboardChart
                title="MCPs"
                color="rgb(255,33,0)"
                text="red"
                data={[20, 12]}
              ></DashboardChart>
            </div>
            <div className="flex-1 bg-white max-h-[230px] overflow-y-scroll px-2 py-2 rounded-xl">
              <div className="flex justify-between">
                <p className="font-bold text-xl text-gray-400">MCPs status</p>
                <Dropdown>
                  <Dropdown.Button
                    color={"primary"}
                    flat
                    className="flex gap-22 "
                  >
                    <span className="text-black">{mcpValue||"Khu vực"}</span>
                  </Dropdown.Button>
                  <div className="" onClick={()=>console.log("11")}>
                  <Dropdown.Menu
                    color={"primary"}
                    variant="light"
                    aria-label="Actions"
                    selectionMode="single"
                    selectedKeys={mcp}
                    onSelectionChange={setMCP}
                    onAction={handleStatusMCP}
                  >
                   

                    <Dropdown.Item key="mcp0001">Quận 1</Dropdown.Item>
                    <Dropdown.Item key="mcp0002">Quận 2</Dropdown.Item>
                    <Dropdown.Item key="mcp0003">Quận 3</Dropdown.Item>
                    <Dropdown.Item key="mcp0004">Quận 5</Dropdown.Item>
                    <Dropdown.Item key="mcp0005">Quận Bình Thạnh</Dropdown.Item>
                    <Dropdown.Item key="mcp0006">Quận 9</Dropdown.Item>
                  </Dropdown.Menu>
                    </div>
                </Dropdown>
              </div>
              <Grid.Container sm={18} gap={1}>
                <Grid>
                {mcpRoute.map(item => (
                    <ProgressDashboard
                    value={parseInt(item.capacity?.split("%")[0])}
                    color={parseInt(item.capacity?.split("%")[0]) < 50 ? "success" : parseInt(item.capacity?.split("%")[0]) < 75 ? "warning" : "error"}
                    title={item.address + `, ${item.area}`}
                  />
                  ))}
                </Grid>
              </Grid.Container>
            </div>
          </div>
          <div className="flex mt-2 gap-4 flex-1">
            <div className="flex-1">{showMap && <MapWithNoSSR />}</div>
            <div className="rounded-xl max-h-[415px] overflow-y-auto min-w-[380px] px-6 py-4 bg-white flex flex-col gap-1">
              <div className="flex justify-between">
                <h2 className="text-gray-400 font-bold text-xl mb-[10px]">
                  Employees
                </h2>
                <Link href={"/Employee"}>
                  <Button flat color="primary" auto>
                    View all
                  </Button>
                </Link>
              </div>
              <EmployeeCard
                name="Sam Tuong"
                role="Back Officeer"
                status="done"
              />
              <EmployeeCard
                name="Sam Tuong"
                role="Back Officeer"
                status="working"
              />
              <EmployeeCard
                name="Sam Tuong"
                role="Back Officeer"
                status="done"
              />
              <EmployeeCard
                name="Sam Tuong"
                role="Back Officeer"
                status="working"
              />
              <EmployeeCard
                name="Sam Tuong"
                role="Back Officeer"
                status="working"
              />
              <EmployeeCard
                name="Sam Tuong"
                role="Back Officeer"
                status="done"
              />
              <EmployeeCard
                name="Sam Tuong"
                role="Back Officeer"
                status="working"
              />
              <EmployeeCard
                name="Sam Tuong"
                role="Back Officeer"
                status="working"
              />
            </div>
          </div>
        </div>
      </div>
      {/* modal for assign task*/}
      <Modal
        noPadding
        open={assignTask}
        onClose={closeHandler}
        css={{ background: "#cccccc" }}
      >
        <Modal.Body>
          <div className="py-10 flex flex-col items-center ">
            <div className="font-bold text-4xl pb-14">ASSIGN TASK</div>
            <div className="flex justify-center gap-8 pb-8">
              {" "}
              <Button
                css={{ width: "150px" }}
                onPress={handleJanitor}
                color="primary"
                auto
              >
                Janitor
              </Button>
              <Button
                flat
                onPress={handleCollector}
                css={{ width: "150px" }}
                color="primary"
                auto
              >
                Collector
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {janitor == 1 && (
        <Modal noPadding open={true} onClose={closeHandler} width="600px">
          <Modal.Body>
            <div className="flex flex-col items-center py-10 px-12">
              <div className="font-bold text-2xl mb-10">
                CHỌN DANH SÁCH JANITORS
              </div>
              <div className="min-w-[340px]">
                <ListJanitorAssign click={click} setRest={setRest} />
              </div>
              <div className=" mt-3 ">
                {/* <Pagination total={20} initialPage={1} size="xs" /> */}
              </div>
              <div className="flex w-full justify-end gap-5 mt-5">
                <Button
                  onPress={closeHandler}
                  flat
                  css={{ width: "120px" }}
                  color="primary"
                  auto
                >
                  Hủy
                </Button>
                <Button
                  css={{ width: "120px" }}
                  onPress={() => {
                    setJanTask(JSON.parse(localStorage.getItem("TEMP_JAN")));
                    setJanitor(2);
                    setClick((prev) => !prev);
                  }}
                  color="primary"
                  auto
                >
                  Tiếp tục
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
      {janitor == 2 && (
        <Modal noPadding open={true} onClose={closeHandler} width="680px">
          <Modal.Body>
            <div className="flex flex-col gap-4 justify-start py-10  px-6">
              <div className="font-bold text-4xl">ASSIGN TASK JANITOR</div>
              <div className="flex flex-wrap gap-[30px] ">
                <div className="flex flex-col gap-2  w-[280px] max-w-[290px]">
                  <p>
                    Chọn ca <span className="text-red-600">*</span>
                  </p>
                  <Dropdown>
                    <Dropdown.Button
                      color={"default"}
                      flat
                      className="flex gap-32 "
                    >
                      <span className="text-black">{selectedValue}</span>
                    </Dropdown.Button>
                    <Dropdown.Menu
                      color={"primary"}
                      variant="light"
                      aria-label="Actions"
                      selectionMode="single"
                      selectedKeys={scheduleJan}
                      onSelectionChange={setScheduleJan}
                      disallowEmptySelection
                    >
                      <Dropdown.Item key="0001">
                        {" "}
                        <div className="flex justify-between">
                          <div className="div">Ca 1</div>
                          <div className="div">7h-11 am</div>
                          <div className="div">Thứ 2,4,6</div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item key="0002">
                        {" "}
                        <div className="flex justify-between">
                          <div className="div">Ca 2</div>
                          <div className="div">1h-5h pm</div>
                          <div className="div">Thứ 2,4,6</div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item key="0003">
                        {" "}
                        <div className="flex justify-between">
                          <div className="div">Ca 1</div>
                          <div className="div">7h-11 am</div>
                          <div className="div">Thứ 3,5,7</div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item key="0004">
                        {" "}
                        <div className="flex justify-between">
                          <div className="div">Ca 2</div>
                          <div className="div">1h-5h pm</div>
                          <div className="div">Thứ 3,5,7</div>
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="flex flex-col gap-2 w-[250px] max-w-[250px]">
                  <p>
                    Chọn (MCPs) <span className="text-red-600">*</span>
                  </p>
                  <Dropdown>
                    <Dropdown.Button
                      color={"primary"}
                      flat
                      className="flex gap-30 "
                    >
                      <span className="text-black"> {mcpValue}</span>
                    </Dropdown.Button>
                    <Dropdown.Menu
                      color={"primary"}
                      variant="light"
                      aria-label="Actions"
                      selectionMode="single"
                      selectedKeys={mcp}
                      onSelectionChange={setMCP}
                    >
                      <Dropdown.Item key="mcp0001">Quận 1</Dropdown.Item>
                      <Dropdown.Item key="mcp0002">Quận 2</Dropdown.Item>
                      <Dropdown.Item key="mcp0003">Quận 3</Dropdown.Item>
                      <Dropdown.Item key="mcp0004">Quận 5</Dropdown.Item>
                      <Dropdown.Item key="mcp0005">
                        Quận Bình Thạnh
                      </Dropdown.Item>
                      <Dropdown.Item key="mcp0006">Quận 9</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="flex flex-col gap-2 w-[250px] max-w-[250px]">
                  <p>
                    Chọn xe đẩy <span className="text-red-600">*</span>
                  </p>
                  <Dropdown>
                    <Dropdown.Button
                      color={"primary"}
                      flat
                      className="flex gap-32 "
                    >
                      <span className="text-black">{trollerValue} </span>
                    </Dropdown.Button>
                    <Dropdown.Menu
                      color={"primary"}
                      variant="light"
                      aria-label="Actions"
                      selectionMode="single"
                      selectedKeys={troller}
                      onSelectionChange={setTroller}
                    >
                      <Dropdown.Item key="troller0001">Troller 1</Dropdown.Item>
                      <Dropdown.Item key="troller0002">Troller 2</Dropdown.Item>
                      <Dropdown.Item key="troller0003">Troller 3</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="w-[400px]">
                  <p className="mb-3">Ghi chú (nếu có) </p>
                  <Textarea
                    placeholder="Default Textarea"
                    css={{ width: "600px" }}
                  />
                </div>
                <div className="flex w-full justify-end gap-5 ">
                  <Button
                    onPress={closeHandler}
                    flat
                    css={{ width: "120px" }}
                    color="primary"
                    auto
                  >
                    Hủy bỏ
                  </Button>
                  <Button
                    css={{ width: "120px" }}
                    onPress={handleJanTasks}
                    color="primary"
                    auto
                  >
                    Xác nhận
                  </Button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
      {collector == 1 && (
        <Modal noPadding open={true} onClose={closeHandler} width="600px">
          <Modal.Body>
            <div className="flex flex-col items-center py-10 px-12">
              <div className="font-bold text-2xl mb-10">
                CHỌN DANH SÁCH COLLECTOR
              </div>
              <div className="min-w-[340px]">
                <ListJanitorAssign />
              </div>
              <div className=" mt-3 ">
                <Pagination total={20} initialPage={1} size="xs" />
              </div>
              <div className="flex w-full justify-end gap-5 mt-5">
                <Button
                  onPress={closeHandler}
                  flat
                  css={{ width: "120px" }}
                  color="primary"
                  auto
                >
                  Hủy
                </Button>
                <Button
                  css={{ width: "120px" }}
                  onPress={() => setCollector(2)}
                  color="primary"
                  auto
                >
                  Tiếp tục
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
      {collector == 2 && (
        <Modal noPadding open={true} onClose={closeHandler} width="660px">
          <Modal.Body>
            <div className="flex flex-col gap-4 justify-start py-10  px-6">
              <div className="font-bold text-4xl">ASSIGN TASK COLLECTOR</div>
              <div className="flex flex-wrap gap-[30px] ">
                <div className="flex flex-col gap-2  w-[250px] max-w-[240px]">
                  <p>
                    Chọn tuyến đường <span className="text-red-600">*</span>
                  </p>
                  <Dropdown>
                    <Dropdown.Button
                      color={"default"}
                      flat
                      className="flex gap-32 "
                    >
                      <span className="text-black">Chọn tuyến đường</span>
                    </Dropdown.Button>
                    <Dropdown.Menu
                      color={"primary"}
                      variant="light"
                      aria-label="Actions"
                    >
                      <Dropdown.Item key="new">Router 1</Dropdown.Item>
                      <Dropdown.Item key="copy">Router 1</Dropdown.Item>
                      <Dropdown.Item key="edit">Router 1</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="w-[400px]">
                  <p className="mb-3">Ghi chú (nếu có) </p>
                  <Textarea
                    placeholder="Default Textarea"
                    css={{ width: "600px" }}
                  />
                </div>
                <div className="flex w-full justify-end gap-5 ">
                  <Button
                    onPress={closeHandler}
                    flat
                    css={{ width: "120px" }}
                    color="primary"
                    auto
                  >
                    Hủy bỏ
                  </Button>
                  <Button css={{ width: "120px" }} color="primary" auto>
                    Xác nhận
                  </Button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
      {/* modal for create new route */}
      <Modal
        noPadding
        open={route}
        onClose={closeHandler}
        css={{ background: "#cccccc" }}
        width="700px"
      >
        <Modal.Body>
          <div className="py-10  px-6 w-[px]">
            <h2 className="text-poppins text-[32px]">Tạo tuyến đường mới</h2>
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2 w-[250px] max-w-[250px]">
                <p>
                  Chọn (MCPs) <span className="text-red-600">*</span>
                </p>
                <Dropdown>
                  <Dropdown.Button
                    color={"primary"}
                    flat
                    className="flex gap-32 "
                  >
                    <span className="text-black">{mcpValue||"Chọn MCPs"}</span>
                  </Dropdown.Button>
                  <Dropdown.Menu
                    color={"primary"}
                    variant="light"
                    aria-label="Actions"
                    selectionMode="single"
                    selectedKeys={mcp}
                    onSelectionChange={setMCP}
                  >
                    <Dropdown.Item key="mcp0001">Quận 1</Dropdown.Item>
                    <Dropdown.Item key="mcp0002">Quận 2</Dropdown.Item>
                    <Dropdown.Item key="mcp0003">Quận 3</Dropdown.Item>
                    <Dropdown.Item key="mcp0004">Quận 5</Dropdown.Item>
                    <Dropdown.Item key="mcp0005">Quận Bình Thạnh</Dropdown.Item>
                    <Dropdown.Item key="mcp0006">Quận 9</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Button
                css={{ width: "120px" }}
                // onPress={}
                color="primary"
                auto
                onClick={handleCreateRoute}
              >
                Generate Route
              </Button>
            </div>
            <div className="mt-[10px]">
              <p className="text-[14px]">(Số MCPs đã chọn: {}/7)</p>
            </div>
            <div className="my-[20px]">
              <p>
                {" "}
                <b>Tuyến đường gợi ý: </b> Deport - {mcpRoute.join(" - ")}
              </p>
            </div>
            <div className="flex w-full justify-end gap-5 ">
              <Button
                onPress={closeHandler}
                flat
                css={{ width: "100px" }}
                color="primary"
                auto
              >
                Hủy bỏ
              </Button>
              <Button
                css={{ width: "100px" }}
                // onPress={() => setJanitor(2)}
                color="primary"
                auto
              >
                Xác nhận
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
