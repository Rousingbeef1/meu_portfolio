import Image from "next/image";
import icone from '../../../public/assets/nav/casinha.svg'
import segundoIcone from '../../../public/assets/nav/Group.svg'
import terceiroIcone from '../../../public/assets/nav/maleta icon 1.svg'
import quartoIcone from '../../../public/assets/nav/chat.svg'
import quintoIcone from '../../../public/assets/nav/perfil.svg'
import sextoIcone from '../../../public/assets/nav/contatos.svg'

export default function NavBar() {
    return (
        <nav className="grid grid-flow-col grid-col-6 justify-center items-center gap-4 w-80 py-2 fixed bottom-8 bg-[#DF78ED] opacity-70 mx-auto rounded-full z-10">
            <Image className="w-9 h" src={icone} alt={""} width={50} height={50}></Image>
            <Image className="w-9" src={segundoIcone} alt={""} width={50} height={50}></Image>
            <Image className="w-9" src={terceiroIcone} alt={""} width={50} height={50}></Image>
            <Image className="w-9" src={quartoIcone} alt={""} width={50} height={50}></Image>
            <Image className="w-9" src={quintoIcone} alt={""} width={50} height={50}></Image>
            <Image className="w-9" src={sextoIcone} alt={""} width={50} height={50}></Image>

        </nav>
    );
}