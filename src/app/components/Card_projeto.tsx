'use client'
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";
import Popup from "./PopupVideo";

interface PropsCard {
    imagem: StaticImport
    nome: string,
    descricao: string,
    tecnologias: string[]
}

export default function Card_produto({ imagem, nome, descricao, tecnologias }: PropsCard) {

    const [popup, setPopup] = useState(false);

    return (
        <>
            <div className="aspect-3/4 bg-[#161615] w-80 p-4 rounded-2xl relative pb-8">
                <Image className="rounded-2xl h-1/2" src={imagem!} alt={""} ></Image>
                <p className="font-montSerrant_bold text-rosa py-2 text-2xl">{nome}</p>
                <p className="font-montSerrant_regular">{descricao}</p>
                <p className="py-2">Tecnologias:</p>
                <div className="flex bg-black w-fit rounded-full px-2 py-0.5 gap-1">{
                    tecnologias.map((e, index) => {
                        return (
                            <Image className="size-6" key={index} width={1080} height={1080} src={`/assets/front/${e}.svg`} alt={""}></Image>
                        )
                    })
                }
                </div>
                <button onClick={() => setPopup(true)} className="absolute bottom-2 font-montSerrant_bold text-[#df78ed]">Ver mais</button>
            </div>
            {
                popup && <Popup
                    titulo={"UX/UI Designer"}
                    descricao={"Ofereço serviços a cerca de 3 anos focados em criar interfaces intuitivas e atraentes, garantindo uma experiência do usuário eficiente e agradável"}
                    video={"https://www.youtube.com/embed/ngFG3ANI1Ao?si=HurQDm0jZIPgCk-Z"}
                    setAberto={setPopup}
                />
            }
        </>
    );
}