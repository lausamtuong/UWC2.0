import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import { useRouter } from "next/router";
import { Avatar, Button,Input } from "@nextui-org/react";
const infoEmployee = () => {
  const router = useRouter();
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
              <div className="flex"><div className="font-bold">Họ và tên:</div> Trần văn A</div>
              <div className="flex"><div className="font-bold">ID:</div> Trần văn A</div>
              <div className="flex"><div className="font-bold">Năm sinh:</div> Trần văn A</div>
              <div className="flex"><div className="font-bold">Quê quán:</div> Trần văn A</div>
              <div className="flex"><div className="font-bold">Chức vụ:</div> Trần văn A</div>
              <div className="flex"><div className="font-bold">Email:</div> Trần văn A</div>
              <div className="flex"><div className="font-bold">Số điện thoại:</div> Trần văn A</div>
            </div>
          </div>
          <div className="flex flex-col items-center flex-1 gap-3">
            <div className="font-bold text-3xl text-blue-500"> Cập nhật thông tin</div>
            <Input label="Họ và tên*" placeholder="Nhập họ và tên mới" css={{width:"70%"}} />
            <Input label="Số điện thoại*" placeholder="Nhập Số điện thoại mới" css={{width:"70%"}} />
            <Input label="Email*" placeholder="Nhập Email mới" css={{width:"70%"}} />
            <Input label="Quê quán*" placeholder="Nhập Quê quán mới" css={{width:"70%"}} />
          <Button className='self-end mr-[100px]'>Hoàn tất</Button>

          </div>
        </div>
      </div>
    </>
  );
};

export default infoEmployee;
