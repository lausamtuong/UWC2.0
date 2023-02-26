
import Link  from 'next/link'

const SignUp = () => {
  return (
    <div className="relative bg-white-color w-full h-[960px] text-left text-lg text-text-primary-color font-bold-37">
      <div className="absolute top-[231px] left-[179px] shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] flex flex-col items-start justify-start gap-[34px]">
        <div className="shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] flex flex-col items-start justify-start gap-[10px]">
          <b className="relative [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
            Welcome back UWC 2.0   
            <Link href="/">Home</Link>
          </b>
          <div className="relative text-base leading-[24px] text-nd-text-color">
            Welcome back! Please enter your details.
          </div>
        </div>
        <div className="shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] flex flex-col items-center justify-start gap-[30px] text-sm text-nd-text-color">
          <div className="shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] flex flex-col items-start justify-start gap-[20px]">
            <div className="shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] flex flex-col items-start justify-start gap-[20px]">
              <div className="flex flex-col items-end justify-start">
                <div className="shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] flex flex-col items-center justify-start gap-[15px]">
                  <div className="shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] w-[361px] flex flex-col items-end justify-start gap-[5px]">
                    <div className="self-stretch relative leading-[22px] font-medium">
                      Email
                    </div>
                    <div className="self-stretch rounded-base bg-white-color shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] flex flex-row py-[11px] px-3 items-start justify-start text-base text-text-primary-color border-[1px] border-solid border-divider-color">
                      <div className="flex-1 relative leading-[24px]">
                        uwcbkhcmut@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] w-[361px] flex flex-col items-end justify-start gap-[5px]">
                    <div className="self-stretch relative leading-[22px] font-medium">
                      Password
                    </div>
                    <div className="self-stretch rounded-base bg-white-color shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] flex flex-row py-[11px] px-3 items-start justify-start text-base text-text-primary-color border-[1px] border-solid border-divider-color">
                      <div className="flex-1 relative leading-[24px]">
                        123456789@asd
                      </div>
                    </div>
                  </div>
                  <div className="shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] w-[361px] flex flex-col items-end justify-start gap-[5px]">
                    <div className="self-stretch relative leading-[22px] font-medium">
                      Confirm Password
                    </div>
                    <div className="self-stretch rounded-base bg-white-color shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] flex flex-row py-[11px] px-3 items-start justify-start text-base text-text-primary-color border-[1px] border-solid border-divider-color">
                      <div className="flex-1 relative leading-[24px]">
                        123456789@asd
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-base bg-mediumslateblue shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] w-[362px] flex flex-row py-[11px] px-[154px] box-border items-start justify-center text-center text-base text-white-color">
                <div className="relative leading-[24px] font-semibold inline-block w-[134px] shrink-0 [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                  Sign Up
                </div>
              </div>
            </div>
            <div className="rounded-base bg-white-color shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] box-border w-[362px] flex flex-col py-[11px] px-3 items-center justify-start text-base text-text-primary-color border-[1px] border-solid border-divider-color">
              <div className="shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] flex flex-row items-start justify-start gap-[10px]">
                <img
                  className="relative w-7 h-7 shrink-0"
                  alt=""
                  src="../logo-icongoogle.svg"
                />
                <div className="relative leading-[24px] font-semibold [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">
                  Sign Up with Google
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <span>{`Have an account? `}</span>
            <span className="font-medium text-mediumslateblue">Log in!</span>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[0px] left-[720px] w-[720px] h-[960px] object-cover hidden"
        alt=""
        src="../simonehutsch2h3ouzkfsyunsplash-1@2x.png"
      />
      <img
        className="absolute top-[0px] left-[720px] w-[959.62px] h-[960px] object-cover"
        alt=""
        src="../amyshamblenjfhfjirnwceunsplash-1@2x.png"
      />
      <div className="absolute top-[24px] left-[30px] flex flex-row items-start justify-start text-[40px]">
        <div className="shadow-[0px_0px_0px_4px_rgba(255,_255,_255,_0.01)] w-[400px] h-[62px] shrink-0 flex flex-row items-center justify-center gap-[2px]">
          <img
            className="relative w-[38.72px] h-[34.54px] shrink-0"
            alt=""
            src="../vector.svg"
          />
          <div className="flex-1 flex flex-row py-0 px-2.5 items-center justify-start">
            <b className="flex-1 relative [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)]">{`UWC 2.0 `}</b>
          </div>
        </div>
      </div>
      <b className="absolute top-[123px] left-[179px] text-[64px] inline-block font-poppins text-black w-[300px] h-[134px] [text-shadow:0px_0px_0px_rgba(255,_255,_255,_0.01)] [-webkit-text-stroke:1px_#000]">{`Sign Up `}</b>
    </div>
  );
};

export default SignUp;
