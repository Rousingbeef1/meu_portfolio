import Link from "next/link";

export default function Habilidades() {
    return (
        <>
        
        <h2 className="text-4xl mx-auto text-center mb-16">HABILIDADES</h2>
        <section className="mx-auto flex flex-col justify-center items-center md:flex-row md:items-center gap-16 
         h-auto bg-green-500 mb-80">
            
            <div className=" relative flex flex-col justify-center bg-[#161616] rounded-xl aspect-3/5 w-72 p-6 ">
                <h2 className=" text-4xl font-montSerrant_bold text-[#df78ed]" >Website <br/>Dev</h2>
                <Link className="absolute bottom-6 text-[#df78ed]" href={"/"}>Ver mais</Link>
            </div>
            <div className=" relative flex flex-col justify-center bg-[#161616] rounded-xl aspect-3/5 w-72 p-6 ">
                <h2 className="text-4xl font-montSerrant_bold text-[#df78ed]">Mobile<br/> Dev</h2>
                <Link className="absolute bottom-6 text-[#df78ed]" href={"/"}>Ver mais</Link>

            </div>
            <div className=" relative flex flex-col justify-center bg-[#161616] rounded-xl aspect-3/5 w-72 p-6 ">
                <h2 className="text-4xl font-montSerrant_bold text-[#df78ed]">UX/UI <br/>Design</h2>
                <Link className="absolute bottom-6 font-montSerrant_bold text-[#df78ed]" href={"/"}>Ver mais</Link>

            </div>
        </section>
        </>
    );
}