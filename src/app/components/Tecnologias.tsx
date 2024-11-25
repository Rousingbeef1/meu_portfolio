'use client'
import { constants } from "buffer";
import Grid_de_tecnologias from "./Grid_de_tecnologias";
import Image from "next/image";


export default function Tecnologias() {
    

    const imagem = require('../../../public/assets/front/javascript.svg')
    const imagem2 = require('../../../public/assets/front/typescript.svg')
    const imagem3 = require('../../../public/assets/front/css.svg')
    const imagem4 = require('../../../public/assets/front/html.svg')
    const imagem5 = require('../../../public/assets/front/react.svg')
    const imagem6 = require('../../../public/assets/front/git.svg')
    const imagem7 = require('../../../public/assets/front/tailwind.svg')
    const imagem8 = require('../../../public/assets/front/react.svg')


    
    const imagens = [
        {titulo:'Javascript', foto:imagem},
        {titulo:'TypeScript',foto:imagem2},
        {titulo:'CSS', foto:imagem3},{titulo:'HTML',foto:imagem4},
        {titulo:'React', foto:imagem5},{titulo:'Git',foto:imagem6}, 
        {titulo:'TailWind',foto:imagem7},
        {titulo:'ReactNative',foto:imagem8}
    ]

    return (
        <section id="conhecimentos" className={`flex flex-col gap-11 h-auto mb-96 `}>
            <div>
                <h2 className="w-fit mx-auto font-montSerrant_bold text-4xl">Conhecimentos</h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-16 bg-red w-screen px-2">
                <div className="flex flex-col items-center gap-4">
                    <h3 className="text-[1.5vw] text-[#DF78ED]">Front-end</h3>
                    <div className="grid grid-flow-row grid-rows-1 grid-cols-1 md:grid-flow-col md:grid-cols-4 md:grid-rows-2 gap-4">

                        {imagens.map!((x) =>
                             <div className="flex flex-col justify-center items-center bg-[#161616] p-4  gap-2 aspect-square rounded-xl">
                                <p className=" text-[#DF78ED]">{x.titulo}</p>
                                <Image src={x.foto} alt={"1"}></Image>
                            </div>
                        
                        )}

                    </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <h3 className="text-[1.5vw] text-[#DF78ED]">Back-end</h3>
                    <div className="grid grid-flow-row grid-rows-1 grid-cols-1 md:grid-flow-col md:grid-cols-4 md:grid-rows-2 gap-4">

                        {imagens.map((x) =>
                            <div className="flex flex-col justify-center items-center bg-[#161616] p-4  gap-2 aspect-square rounded-xl">
                                <p className=" text-[#DF78ED]">{x.titulo}</p>
                                <Image src={x.foto} alt={"1"}></Image>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}