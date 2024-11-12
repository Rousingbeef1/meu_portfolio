import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface Grid_Props {
    título: string;
    imagem?: StaticImport[];
    tamanho: number
}

export default function Grid(props: Grid_Props) {

    const listaImagens = props.imagem?.map((imagem) => (
        <div className=" flex justify-center flex-col items-center bg-[#161616] aspect-square rounded-lg bg-red">
            <h3 className=" font-montSerrant_regular text-[#DF78ED]">{props.título}</h3>
            <Image className='h-[5vh]' src={imagem} alt={'a'} width={100} height={100}/>
        </div>
    ));

    return (
        <section className="flex justify-center">
            <div className="w-[20vw] flex flex-col justify-center">
                <h3 className="w-fit mx-auto">{props.título}</h3>
                <div className={`grid grid-cols-${props.tamanho} grid-rows-2 gap-4 w-[400px]`}>
                    {listaImagens}
                </div>
            </div>
        </section>
    );
}