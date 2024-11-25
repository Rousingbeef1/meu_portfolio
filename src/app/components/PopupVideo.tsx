'use client'
import { Dispatch, SetStateAction } from "react";

interface Popup_props {
    titulo: string;
    descricao: string;
    video: string;
    setAberto: Dispatch<SetStateAction<boolean>>;
}

export default function Popup({ titulo, descricao, video, setAberto }: Popup_props) {
    return (
        <div className="w-screen h-screen bg-[#00000099] flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50">
            <div className="bg-cinza_escuro w-[75vw] max-w-[1440px] flex flex-row p-8 rounded-3xl relative animate-popup">
                <button onClick={() => setAberto(false)} className="absolute top-2 right-4 text-3xl text-[#3D3D3D]">X</button>
                <div className="w-[40%] flex justify-center">
                    <iframe
                        className="aspect-video w-full my-auto"
                        src={video}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div>
                <div className="w-[60%] flex flex-col p-4 px-8 gap-4">
                    <label className="font-montSerrant_regular text-rosa text-7xl">{titulo}</label>
                    <label className="font-montSerrant_regular text-white text-2xl">{descricao}</label>
                </div>
            </div>
        </div>
    )
}