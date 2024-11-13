import Link from "next/link";
import NavBar from "./components/NavBar";
import Tecnologias from "./components/Tecnologias";
import Habilidades from "./components/Habilidades";
import Projetos from "./components/Projetos";
import SobreMim from "./components/Sobre_mim";
import Depoimentos from "./components/Depoimentos";

export default function Home() {
  return (
    <>
      <div id="home" className="flex justify-center items-center h-screen bg-[url('/assets/bg.png')] bg-contain bg-center">
        <NavBar></NavBar>
        <div className="flex flex-col justify-center ">
          <h1 className="text-center font-montSerrant_semibold text-[2vw]">Luccas Souza</h1>
          <span className=" font-montSerrant_regular text-center text-[1.2vw] mb-2">Desenvolvedor</span>
          <div className="flex justify-center gap-8 ">

            <Link className="rounded-xl text-[1vw] border-2 border-[#DF78ED] px-8 py-4" href={""}>Currículo</Link>
            <Link className="rounded-xl text-[1vw] border-2 border-[#DF78ED] px-8 py-4" href={""}>Github</Link>

          </div>
        </div>
      </div>
      <Tecnologias></Tecnologias>
      <Habilidades></Habilidades>
      <Projetos></Projetos>
      <SobreMim></SobreMim>
      <Depoimentos></Depoimentos>
    </>
  );
}
