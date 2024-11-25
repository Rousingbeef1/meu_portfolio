'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

export default function Depoimentos() {

    const depoimentos = [
        {
            nome: "Newton Neto",
            sub: "Cliente",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis odio nisi, sed pharetra mauris hendrerit ac. Nulla vitae tempus neque, vitae placerat purus. In hac habitasse.",
            foto: "perfil.svg"
        },
        {
            nome: "Newton Neto",
            sub: "Cliente",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis odio nisi, sed pharetra mauris hendrerit ac. Nulla vitae tempus neque, vitae placerat purus. In hac habitasse.",
            foto: "perfil.svg"
        },
        {
            nome: "Newton Neto",
            sub: "Cliente",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis odio nisi, sed pharetra mauris hendrerit ac. Nulla vitae tempus neque, vitae placerat purus. In hac habitasse.",
            foto: "perfil.svg"
        },
        {
            nome: "Newton Neto",
            sub: "Cliente",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis odio nisi, sed pharetra mauris hendrerit ac. Nulla vitae tempus neque, vitae placerat purus. In hac habitasse.",
            foto: "perfil.svg"
        }
    ]

    return (
        <div className="flex flex-col w-screen max-w-[1920px] mx-auto items-center justify-center">
            <label className="text-[3.4375rem] font-montSerrant_bold my-16">Depoimentos</label>
            <div className="w-screen flex items-center justify-center">
                <Swiper
                    direction="horizontal"
                    className="w-[90vw]"
                    slidesPerView={window.innerWidth > 767 ? 2.2 : 1.2}
                >
                    {depoimentos.map((i, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center justify-center gap-4 border border-rosa rounded-3xl py-8 desktop:mx-32">
                                <Image className="w-[30%] aspect-square" width={720} height={720} src={`/assets/${i.foto}`} alt="foto" />
                                <label className="font-montSerrant_bold text-3xl text-rosa">{i.nome}</label>
                                <label className="font-montSerrant_regular text-3xl text-white">{i.sub}</label>
                                <p className="font-montSerrant_regular text-2xl text-cinza_claro px-4 text-center">{i.descricao}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}