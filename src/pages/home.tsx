import { FaReact } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { MdOutlineCss } from "react-icons/md";
import { FaNode } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import '../App.css'
import React from "react";

export default function Home() {
    return (
        <>
            <header>
                <nav className="flex py-4 flex-row w-3/5 m-auto justify-between">
                    <p className="text-2xl">Borges</p>
                    <div className="flex text-md flex-row justify-around w-4/6">
                        <a href="#" className="hover:border-b-terciary border-2    border-bgcolor1 transition-all ease-in-out   ">Início</a>
                        <a href="#about" className="hover:border-b-terciary border-2    border-bgcolor1 transition-all ease-in-out">Sobre</a>
                        <a href="#skills" className="hover:border-b-terciary border-2    border-bgcolor1 transition-all ease-in-out">Habilidades</a>
                        <a href="#project" className="hover:border-b-terciary border-2    border-bgcolor1 transition-all ease-in-out">Projetos</a>
                        <a href="#contact" className="hover:border-b-terciary border-2    border-bgcolor1 transition-all ease-in-out">Contato</a>
                    </div>
                </nav>
            </header>
            <main>
                <section className="flex flex-col">
                    <div>
                        <p>Olá</p>
                        <h1>Eu sou estudante de programação</h1>
                        <div>
                            <button>Me contrate</button>
                            <button>Download</button>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </section>
                <section>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <p>Sobre mim</p>
                        <p>Um <strong>talentoso</strong> jovem que pode solucionar os <strong>desafios</strong> da sua <strong>empresa!</strong></p>
                        <div>
                            <div>
                                <p>Nome:</p>
                                <p>Eduardo Borges</p>
                            </div>
                            <div>
                                <p>Data de nascimento:</p>
                                <p>31/10/2006</p>
                            </div>
                            <div>
                                <p>Endereço:</p>
                                <p>Rio Vermelho, Florianópolis SC</p>
                            </div>
                            <div>
                                <p>Email:</p>
                                <p>duduborges333969@gmail.com</p>
                            </div>
                            <div>
                                <p>Telefone:</p>
                                <p>+55 (51)98583-6686</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <h2>Minhas habilidades</h2>
                        <p></p>
                    </div>
                    <div>
                        <FaReact />
                        <BiLogoSpringBoot />
                        <RiTailwindCssFill />
                        <IoLogoJavascript />
                        <MdOutlineCss />
                        <FaNode />
                    </div>
                </section>
                <section>
                    <div>
                        <p>Meus projetos</p>
                        <p>Alguns projetos feitos por mim ou ainda em construção</p>
                    </div>
                    <div>
                        <div><img src="" alt="" /></div>
                        <div><img src="" alt="" /></div>
                        <div><img src="" alt="" /></div>
                        <div><img src="" alt="" /></div>
                    </div>
                </section>
                <section>
                    <div>
                        <h2>Fale comigo!</h2>
                        <p>dksadka</p>
                    </div>
                    <div>
                        <FaPhoneAlt />
                        <FaRegPaperPlane />
                    </div>
                </section>
            </main>
            <footer>

            </footer>
        </>
    )
}