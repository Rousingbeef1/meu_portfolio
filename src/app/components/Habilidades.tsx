'use client'
import { useState } from "react";
import Popup from "./Popup";

export default function Habilidades() {

    const [uxui, setUxui] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [web, setWeb] = useState(false);

    return (
        <>

            <h2 className="text-4xl mx-auto text-center mb-16">HABILIDADES</h2>
            <section className="mx-auto flex flex-col justify-center items-center md:flex-row md:items-center gap-16 h-auto bg-green-500 mb-80">

                <div className=" relative flex flex-col justify-center bg-[#161616] rounded-xl aspect-3/5 w-72 p-6 ">
                    <h2 className=" text-4xl font-montSerrant_bold text-[#df78ed]" >Website <br />Dev</h2>
                    <button onClick={() => setWeb(true)} className="absolute bottom-6 text-[#df78ed]">Ver mais</button>
                </div>
                <div className=" relative flex flex-col justify-center bg-[#161616] rounded-xl aspect-3/5 w-72 p-6 ">
                    <h2 className="text-4xl font-montSerrant_bold text-[#df78ed]">Mobile<br /> Dev</h2>
                    <button onClick={() => setMobile(true)} className="absolute bottom-6 text-[#df78ed]">Ver mais</button>
                </div>
                <div className=" relative flex flex-col justify-center bg-[#161616] rounded-xl aspect-3/5 w-72 p-6 ">
                    <h2 className="text-4xl font-montSerrant_bold text-[#df78ed]">UX/UI <br />Design</h2>
                    <button onClick={() => setUxui(true)} className="absolute bottom-6 font-montSerrant_bold text-[#df78ed]">Ver mais</button>
                </div>
                {
                    uxui && <Popup
                        titulo={"UX/UI Designer"}
                        descricao={"Ofereço serviços a cerca de 3 anos focados em criar interfaces intuitivas e atraentes, garantindo uma experiência do usuário eficiente e agradável"}
                        topicos={[
                            "Crio protótipos interativos.",
                            "Otimizo a interação dos usuários com a interface.",
                            "Analiso as necessidades dos usuários.",
                            "Desenvolvo wireframes.",
                            "Garanto interfaces adaptáveis."
                        ]}
                        setAberto={setUxui} 
                    />
                }
                {
                    mobile && <Popup
                        titulo={"UX/UI Designer"}
                        descricao={"Ofereço serviços a cerca de 3 anos focados em criar interfaces intuitivas e atraentes, garantindo uma experiência do usuário eficiente e agradável"}
                        topicos={[
                            "Crio protótipos interativos.",
                            "Otimizo a interação dos usuários com a interface.",
                            "Analiso as necessidades dos usuários.",
                            "Desenvolvo wireframes.",
                            "Garanto interfaces adaptáveis."
                        ]}
                        setAberto={setMobile} 
                    />
                }
                {
                    web && <Popup
                        titulo={"UX/UI Designer"}
                        descricao={"Ofereço serviços a cerca de 3 anos focados em criar interfaces intuitivas e atraentes, garantindo uma experiência do usuário eficiente e agradável"}
                        topicos={[
                            "Crio protótipos interativos.",
                            "Otimizo a interação dos usuários com a interface.",
                            "Analiso as necessidades dos usuários.",
                            "Desenvolvo wireframes.",
                            "Garanto interfaces adaptáveis."
                        ]}
                        setAberto={setWeb} 
                    />
                }
            </section>
        </>
    );
}