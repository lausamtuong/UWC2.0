import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import DashboardChart from "@/Components/DashboardChart";
import ProgressDashboard from "@/Components/Progress";
import ListJanitorAssign from "@/Components/ListJanitorAssign";
import { useState, useEffect } from "react";
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
export default function Dashboard() {
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
  });
  const [assignTask, setAssignTask] = useState(false);
  const [route, setRoute] = useState(false);
  const [janitor, setJanitor] = useState(0);
  const [collector, setCollector] = useState(false);
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
  const [showMap, setShowMap] = useState(false);
  useEffect(() => {
    setShowMap(true);
  }, []);

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
                title="Routes"
                color="rgb(51,213,131)"
                text="rgb(51,213,131)"
                data={[12, 14]}
              ></DashboardChart>
              <DashboardChart
                title="Employees"
                color="rgb(11,0,255)"
                text="blue"
                data={[100, 12]}
              ></DashboardChart>
              <DashboardChart
                title="MCPs"
                color="rgb(255,33,0)"
                text="red"
                data={[20, 12]}
              ></DashboardChart>
            </div>
            <div className="flex-1 bg-white h-full px-2 py-2 rounded-xl">
              <div className="flex justify-between">
                <p className="font-bold text-xl text-gray-400">MCPs status</p>
                <Dropdown>
                  <Dropdown.Button
                    color={"primary"}
                    flat
                    className="flex gap-4 w-[10px]"
                  >
                    <span className="text-black"> Khu vực</span>
                  </Dropdown.Button>
                  <Dropdown.Menu
                    color={"primary"}
                    variant="light"
                    aria-label="Actions"
                  >
                    <Dropdown.Item key="new">Quận 1</Dropdown.Item>
                    <Dropdown.Item key="copy">Quận 2</Dropdown.Item>
                    <Dropdown.Item key="edit">Quận 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Grid.Container sm={18} gap={1}>
                <Grid>
                  <ProgressDashboard
                    value={23}
                    color="success"
                    title="Chợ Bến Thành"
                  />
                  <ProgressDashboard
                    value={40}
                    color="success"
                    title="48 Cô Giang, Quận 1"
                  />
                  <ProgressDashboard
                    value={50}
                    color="warning"
                    title="Đinh Tiên Hoàng, Quận 1"
                  />
                  <ProgressDashboard
                    value={90}
                    color="error"
                    title="Lê Thánh Tôn, Quận 7"
                  />
                  <ProgressDashboard
                    value={80}
                    color="error"
                    title="Trường Sa, Quận Bình Thạnh"
                  />
                </Grid>
              </Grid.Container>
            </div>
          </div>
          <div className="flex mt-2 gap-4 flex-1">
            <div className="flex-1">{showMap && <MapWithNoSSR />}</div>
            <div className="rounded-xl h-full min-w-[380px] px-6 py-4 bg-white flex flex-col gap-1">
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
                  onPress={() => setJanitor(2)}
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
        <Modal noPadding open={true} onClose={closeHandler} width="660px">
          <Modal.Body>
            <div className="flex flex-col gap-4 justify-start py-10  px-6">
              <div className="font-bold text-4xl">ASSIGN TASK JANITOR</div>
              <div className="flex flex-wrap gap-[30px] ">
                <div className="flex flex-col gap-2  w-[250px] max-w-[240px]">
                  <p>
                    Chọn ca <span className="text-red-600">*</span>
                  </p>
                  <Dropdown>
                    <Dropdown.Button
                      color={"default"}
                      flat
                      className="flex gap-32 "
                    >
                      <span className="text-black">Chọn ca</span>
                    </Dropdown.Button>
                    <Dropdown.Menu
                      color={"primary"}
                      variant="light"
                      aria-label="Actions"
                    >
                      <Dropdown.Item key="new">
                        {" "}
                        <div className="flex justify-between">
                          <div className="div">Ca 1</div>
                          <div className="div">7h-11 am</div>
                          <div className="div">Thứ 2,4,6</div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item key="new">
                        {" "}
                        <div className="flex justify-between">
                          <div className="div">Ca 2</div>
                          <div className="div">1h-5h pm</div>
                          <div className="div">Thứ 2,4,6</div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item key="new">
                        {" "}
                        <div className="flex justify-between">
                          <div className="div">Ca 1</div>
                          <div className="div">7h-11 am</div>
                          <div className="div">Thứ 3,5,7</div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item key="new">
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
                    Chọn nơi làm việc (MCPs){" "}
                    <span className="text-red-600">*</span>
                  </p>
                  <Dropdown>
                    <Dropdown.Button
                      color={"primary"}
                      flat
                      className="flex gap-32 "
                    >
                      <span className="text-black">
                        {" "}
                        Chọn nơi làm việc (MCPs)
                      </span>
                    </Dropdown.Button>
                    <Dropdown.Menu
                      color={"primary"}
                      variant="light"
                      aria-label="Actions"
                    >
                      <Dropdown.Item key="new">Quận 1</Dropdown.Item>
                      <Dropdown.Item key="copy">Quận 2</Dropdown.Item>
                      <Dropdown.Item key="edit">Quận 3</Dropdown.Item>
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
                      <span className="text-black"> Chọn xe đẩy</span>
                    </Dropdown.Button>
                    <Dropdown.Menu
                      color={"primary"}
                      variant="light"
                      aria-label="Actions"
                    >
                      <Dropdown.Item key="new">Troller 1</Dropdown.Item>
                      <Dropdown.Item key="copy">Troller 2</Dropdown.Item>
                      <Dropdown.Item key="edit">Troller 3</Dropdown.Item>
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
                    onPress={() => setJanitor(2)}
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
                    <span className="text-black">
                      {" "}
                      Chọn nơi làm việc (MCPs)
                    </span>
                  </Dropdown.Button>
                  <Dropdown.Menu
                    color={"primary"}
                    variant="light"
                    aria-label="Actions"
                  >
                    <Dropdown.Item key="new">Quận 1</Dropdown.Item>
                    <Dropdown.Item key="copy">Quận 2</Dropdown.Item>
                    <Dropdown.Item key="edit">Quận 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Button
                css={{ width: "120px" }}
                // onPress={}
                color="primary"
                auto
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
                <b>Tuyến đường gợi ý: </b> Deport - MCP1 - MCP3 - MCP2 -MCP4 -
                MCP5 - MCP 1 (10km)
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
