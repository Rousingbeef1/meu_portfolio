import Card_produto from "./Card_projeto";
import Tecnologias from "./Tecnologias";

export default function Projetos() {
    const imge = require('../../../public/assets/projetos/portfolio_print.png')
    return (
        <>
            <h2 className="mx-auto w-fit text-3xl text-rosa">Projetos</h2>
           
            <section className="flex flex-col justify-center items-center bg-orange-400 py-8 gap-8">
                <h3 className="">Mais recentes</h3>
                <div className="flex flex-col md:flex-row   justify-center items-center bg-orange-400 py-8 gap-8">
                    <Card_produto
                        imagem={imge} nome={"Portfólio Designer"}
                        descricao={"Desenvolvimento de uma solução web responsiva para o designer Newton Campos, com foco em um layout minimalista e funcionalidade intuitiva."}
                        tecnologias={[]}>
                    </Card_produto>

                    <Card_produto
                        imagem={imge} nome={"Portfólio Designer"}
                        descricao={"Desenvolvimento de uma solução web responsiva para o designer Newton Campos, com foco em um layout minimalista e funcionalidade intuitiva."}
                        tecnologias={[]}>
                    </Card_produto>

                    <Card_produto
                        imagem={imge} nome={"Portfólio Designer"}
                        descricao={"Desenvolvimento de uma solução web responsiva para o designer Newton Campos, com foco em um layout minimalista e funcionalidade intuitiva."}
                        tecnologias={[`typescript`,`react`,`tailwind`,`git` ]}>
                    </Card_produto>
                </div>
            </section>

            <section className="flex flex-col md:flex-row justify-center items-center bg-orange-400 py-8 gap-8">

                <Card_produto
                    imagem={imge} nome={"Portfólio Designer"}
                    descricao={"Desenvolvimento de uma solução web responsiva para o designer Newton Campos, com foco em um layout minimalista e funcionalidade intuitiva."}
                    tecnologias={[]}>
                </Card_produto>

                <Card_produto
                    imagem={imge} nome={"Portfólio Designer"}
                    descricao={"Desenvolvimento de uma solução web responsiva para o designer Newton Campos, com foco em um layout minimalista e funcionalidade intuitiva."}
                    tecnologias={[]}>
                </Card_produto>

                <Card_produto
                    imagem={imge} nome={"Portfólio Designer"}
                    descricao={"Desenvolvimento de uma solução web responsiva para o designer Newton Campos, com foco em um layout minimalista e funcionalidade intuitiva."}
                    tecnologias={[]}>
                </Card_produto>

            </section>
        </>
    );
}