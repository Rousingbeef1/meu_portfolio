import Card_produto from "./Card_projeto";
import Tecnologias from "./Tecnologias";

export default function Projetos() {
    const imge = require('../../../public/assets/projetos/portfolio_print.png')
    return (
        <>

            <section className="flex flex-col justify-center items-center py-8 gap-8">
                <label id="projetos" className="mx-auto w-screen text-[3.4375rem] text-white text-center">Projetos</label>
                <div className="w-[55%] mx-auto">
                    <label className="text-rosa text-4xl">Mais recentes</label>

                    <div className="flex flex-col md:flex-row   justify-center items-center py-8 gap-8">
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
                            tecnologias={[`typescript`, `react`, `tailwind`, `git`]}>
                        </Card_produto>
                    </div>
                </div>
            </section>
            <div className="w-[55%] mx-auto">
                <label className="w-[50%] text-rosa text-4xl">Todos os Projetos</label>

                <section className="flex flex-col md:flex-row justify-center items-center py-8 gap-8">

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
            </div>
        </>
    );
}