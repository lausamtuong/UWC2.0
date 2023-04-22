import Header from "@/Components/Header";
import { useState } from "react";
import Sidebar from "@/Components/Sidebar";
import { useRouter } from "next/router";
import { Avatar, Button, Dropdown, Input, Textarea } from "@nextui-org/react";
const infoEmployee = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const { id } = router.query;
  return (
    <>
      <Header />
      <Sidebar />
      <div className="ml-[300px]">
        <div className="font-bold text-3xl mb-5">Employee Edit</div>
        <div className="flex ">
          <div className="flex flex-col items-center  gap-6 max-w-[400px]">
            {" "}
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
              css={{ size: "200px" }}
            />
            <Button>Cập nhật ảnh</Button>
            <div className="flex flex-wrap gap-5">
              <div className="flex">
                <div className="font-bold">Họ và tên:</div> Trần văn A
              </div>
              <div className="flex">
                <div className="font-bold">ID:</div> Trần văn A
              </div>
              <div className="flex">
                <div className="font-bold">Năm sinh:</div> Trần văn A
              </div>
              <div className="flex">
                <div className="font-bold">Quê quán:</div> Trần văn A
              </div>
              <div className="flex">
                <div className="font-bold">Chức vụ:</div> Trần văn A
              </div>
              <div className="flex">
                <div className="font-bold">Email:</div> Trần văn A
              </div>
              <div className="flex">
                <div className="font-bold">Số điện thoại:</div> Trần văn A
              </div>
            </div>
          </div>
          {step == 1 && (
            <div className="flex flex-col items-center flex-1 gap-3">
              <Button
                css={{ width: "120px" }}
                flat
                onPress={() => router.push("/Employee")}
                color="primary"
                auto
                className="self-end mr-[30px]"
              >
                {"<-"} Back
              </Button>
              <div className="font-bold text-3xl text-blue-500">
                {" "}
                Cập nhật thông tin
              </div>
              <Input
                label="Họ và tên*"
                placeholder="Nhập họ và tên mới"
                css={{ width: "70%" }}
              />
              <Input
                label="Số điện thoại*"
                placeholder="Nhập Số điện thoại mới"
                css={{ width: "70%" }}
              />
              <Input
                label="Email*"
                placeholder="Nhập Email mới"
                css={{ width: "70%" }}
              />
              <Input
                label="Quê quán*"
                placeholder="Nhập Quê quán mới"
                css={{ width: "70%" }}
              />
              <Button
                onPress={() => setStep(2)}
                className="self-end mr-[100px]"
              >
                Tiếp tục
              </Button>
            </div>
          )}

          {step == 2 && id == "1" && (
            <div className="flex flex-col items-center flex-1 gap-3">
              <Button
                css={{ width: "120px" }}
                flat
                onPress={() => setStep(1)}
                color="primary"
                auto
                className="self-end mr-[30px]"
              >
                {"<-"} Back
              </Button>
              <div className="font-bold text-3xl text-blue-500">
                {" "}
                Cập nhật Công việc
              </div>
              <div className="flex flex-wrap gap-5">
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
                <div className="flex w-full justify-end pr-[30px] ">
                  <Button
                    css={{ width: "120px" }}
                    // onPress={() => setJanitor(2)}
                    color="primary"
                    auto
                  >
                    Cập nhật
                  </Button>
                </div>
              </div>
            </div>
          ) }{step == 2 && id == "2" &&  (
            <div className="flex flex-col items-center flex-1 gap-3">
              <Button
                css={{ width: "120px" }}
                flat
                onPress={() => setStep(1)}
                color="primary"
                auto
                className="self-end mr-[30px]"
              >
                {"<-"} Back
              </Button>
              <div className="font-bold text-3xl text-blue-500">
                {" "}
                Cập nhật Công việc
              </div>
              <div className="flex flex-wrap gap-5">
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
          
                <div className="w-[400px]">
                  <p className="mb-3">Ghi chú (nếu có) </p>
                  <Textarea
                    placeholder="Default Textarea"
                    css={{ width: "600px" }}
                  />
                </div>
                <div className="flex w-full justify-end pr-[30px] ">
                  <Button
                    css={{ width: "120px" }}
                    // onPress={() => setJanitor(2)}
                    color="primary"
                    auto
                  >
                    Cập nhật
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default infoEmployee;
