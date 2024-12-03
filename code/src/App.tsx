import ImgPrakerjaLogo from "./assets/img/logo-prakerja-white.svg";
import ImgAuthBg from "./assets/img/auth-bg.svg";
import ImgPeopleSm from "./assets/img/people-sm.png";
import ImgPeopleXs from "./assets/img/people-xs.png";

function App() {
  return (
    <div className="relative bg-[#4f8fda] h-dvh overflow-hidden">
      <header className="container mx-auto px-[20px] pt-[40px] max-w-[540px] md:max-w-[768px] lg:max-w-[1140px] mb-[3rem]">
        <a href="https://prakerja.go.id">
          <img
            className="h-[35px] md:h-[45px]"
            src={ImgPrakerjaLogo}
            height={45}
            alt="Logo Prakerja"
          />
        </a>
      </header>
      <div className="container mx-auto max-w-[540px] md:max-w-[768px] lg:max-w-[1140px] px-[20px]">
        <img
          className="absolute z-0 min-w-[550px] left-1/2 transform -translate-x-1/2 select-none"
          src={ImgAuthBg}
          alt="Background"
        />
        <section className="relative flex flex-col gap-6 p-[20px] md:p-[40px] mx-auto bg-white rounded-[10px] z-10 max-w-[420px] top-[250px] transform -translate-y-1/2">
          <div className="flex flex-col gap-5 text-center text-[#142B72] font-title">
            <header className="text-[28px] font-[500]">
              Dashboard Prakerja sedang dalam proses pemeliharaan
            </header>
            <section className="text-base">
              Dalam rangka peningkatan layanan, Dashboard Prakerja sedang dalam
              proses maintenance/pemeliharaan. Silahkan cek secara berkala atau
              kembali ke beranda.
            </section>
          </div>
          <a href="https://prakerja.go.id">
            <button className="bg-[#4A91DC] text-white text-sm font-bold w-full h-[42px] rounded-full">
              Kembali ke Beranda
            </button>
          </a>
        </section>
        <img
          className="invisible md:visible absolute top-[320px] w-[1000px] left-1/2 transform -translate-x-1/2 select-none"
          src={ImgPeopleSm}
          alt="People"
        />
        <img
          className="visible md:invisible absolute bottom-0  left-1/2 transform -translate-x-1/2 w-[120%] select-none"
          src={ImgPeopleXs}
          alt="People"
        />
      </div>
    </div>
  );
}

export default App;
