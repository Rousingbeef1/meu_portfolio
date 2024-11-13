'use client'

import { useState } from "react";

export default function SobreMim() {
    const [selecionado, setSelecionado] = useState<"historia" | "experiencia" | "suporte" | "projetos">("historia");

    return (
        <div id="sobremim" className="flex flex-col w-screen max-w-[1920px] mx-auto items-center justify-center my-96">
            <label className="text-[3.4375rem] font-montSerrant_bold my-16">Sobre mim</label>
            <div className="desktop:w-[90%] flex desktop:flex-row gap-4 mobile:flex-col items-center">
                <div className="flex flex-col desktop:w-[50%] mobile:w-[90%]">
                    {
                        selecionado == "historia" && <>
                            <label className="font-montSerrant_semibold text-8xl mobile:text-4xl">Mas afinal, quem sou eu?</label>
                            <p className="font-montSerrant_regular text-cinza_claro text-4xl mobile:text-2xl whitespace-normal">Sou desenvolvedor front-end com foco em web e mobile, atualmente estudando back-end. Meu objetivo é criar interfaces intuitivas e responsivaas, otimizar a experiência do usuário e desenvolver soluções completas integrando front e back-end, priorizando performance e segurança</p>
                        </>
                    }
                    {
                        selecionado == "experiencia" && <>
                            <label className="font-montSerrant_semibold text-8xl mobile:text-4xl">Mas afinal, quem sou eu?</label>
                            <p className="font-montSerrant_regular text-cinza_claro text-4xl mobile:text-2xl whitespace-normal">Sou desenvolvedor front-end com foco em web e mobile, atualmente estudando back-end. Meu objetivo é criar interfaces intuitivas e responsivaas, otimizar a experiência do usuário e desenvolver soluções completas integrando front e back-end, priorizando performance e segurança</p>
                        </>
                    }
                    {
                        selecionado == "suporte" && <>
                            <label className="font-montSerrant_semibold text-8xl mobile:text-4xl">Mas afinal, quem sou eu?</label>
                            <p className="font-montSerrant_regular text-cinza_claro text-4xl mobile:text-2xl whitespace-normal">Sou desenvolvedor front-end com foco em web e mobile, atualmente estudando back-end. Meu objetivo é criar interfaces intuitivas e responsivaas, otimizar a experiência do usuário e desenvolver soluções completas integrando front e back-end, priorizando performance e segurança</p>
                        </>
                    }
                    {
                        selecionado == "projetos" && <>
                            <label className="font-montSerrant_semibold text-8xl mobile:text-4xl">Mas afinal, quem sou eu?</label>
                            <p className="font-montSerrant_regular text-cinza_claro text-4xl mobile:text-2xl whitespace-normal">Sou desenvolvedor front-end com foco em web e mobile, atualmente estudando back-end. Meu objetivo é criar interfaces intuitivas e responsivaas, otimizar a experiência do usuário e desenvolver soluções completas integrando front e back-end, priorizando performance e segurança</p>
                        </>
                    }
                </div>
                <div className="desktop:w-[50%] mobile:w-[90%] grid grid-cols-2 gap-8 desktop:gap-x-16 desktop:p-8 desktop:px-16">
                    <button onClick={() => setSelecionado("historia")} className={`flex flex-col items-center justify-center gap-4 border ${selecionado == "historia" ? "bg-white text-black" : "border-rosa"} rounded-3xl py-8 active:scale-95 duration-150`}>
                        <label className="font-montSerrant_bold desktop:text-4xl mobile:text-2xl mobile:px-1">Minha História</label>
                        <label className="font-montSerrant_regular desktop:text-xl">Resumo</label>
                    </button>
                    <button onClick={() => setSelecionado("experiencia")} className={`flex flex-col items-center justify-center gap-4 border ${selecionado == "experiencia" ? "bg-white text-black" : "border-rosa"} rounded-3xl py-8 active:scale-95 duration-150`}>
                        <label className="font-montSerrant_bold desktop:text-4xl mobile:text-2xl mobile:px-1">Experiencia</label>
                        <label className="font-montSerrant_regular desktop:text-xl">3 anos</label>
                    </button>
                    <button onClick={() => setSelecionado("suporte")} className={`flex flex-col items-center justify-center gap-4 border ${selecionado == "suporte" ? "bg-white text-black" : "border-rosa"} rounded-3xl py-8 active:scale-95 duration-150`}>
                        <label className="font-montSerrant_bold desktop:text-4xl mobile:text-2xl mobile:px-1">Suporte Online</label>
                        <label className="font-montSerrant_regular desktop:text-xl">Atendimento 24/7</label>
                    </button>
                    <button onClick={() => setSelecionado("projetos")} className={`flex flex-col items-center justify-center gap-4 border ${selecionado == "projetos" ? "bg-white text-black" : "border-rosa"} rounded-3xl py-8 active:scale-95 duration-150`}>
                        <label className="font-montSerrant_bold desktop:text-4xl mobile:text-2xl mobile:px-1">Projetos</label>
                        <label className="font-montSerrant_regular desktop:text-xl">+ de 15 produtos</label>
                    </button>
                </div>
            </div>
        </div>
    )
}