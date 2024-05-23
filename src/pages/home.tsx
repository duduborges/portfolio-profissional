import { FaReact } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { MdOutlineCss } from "react-icons/md";
import { FaNode } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import '../App.css'
import { SiLinkedin } from "react-icons/si";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()

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
            <main className="w-3/5 m-auto">
                <section className="flex flex-row  m-auto justify-around pt-40">
                    <div>
                        <p className="text-7xl text-terciary">Olá</p>
                        <h1 className="text-xl ">Eu sou estudante de programação</h1>
                        <div className="flex flex-row justify-around mt-14">
                            <button onClick={() => navigate("")} className="bg-terciary p-4 rounded-md flex justify-center items-center gap-2">Linkedin <SiLinkedin /> </button>
                            <button className="bg-terciary p-4 rounded-md">Download curriculo</button>
                        </div>
                    </div>
                    <div>
                        <img className="w-80 h-80 minhaimg  rounded-md" src="https://avatars.githubusercontent.com/u/84474594?v=4" alt="" />
                    </div>
                </section>
                <section className="flex flex-col mt-20">
                    <div className="flex justify-center text-7xl">
                        <p>Sobre mim</p>
                    </div>
                    <div className="flex flex-col mt-10">
                        <p className="text-2xl mb-4">Um <strong className="text-terciary">talentoso</strong> jovem que pode solucionar os <strong className="text-terciary">desafios da sua empresa!</strong></p>
                        <div className="flex flex-col text-xl">
                            <div className="flex flex-row gap-4">
                                <p>Nome:</p>
                                <p>Eduardo Borges</p>
                            </div>
                            <div className="flex flex-row gap-4">
                                <p>Data de nascimento:</p>
                                <p>31/10/2006</p>
                            </div>
                            <div className="flex flex-row gap-4">
                                <p>Endereço:</p>
                                <p>Rio Vermelho, Florianópolis SC</p>
                            </div>
                            <div className="flex flex-row gap-4">
                                <p>Email:</p>
                                <p>duduborges333969@gmail.com</p>
                            </div>
                            <div className="flex flex-row gap-4">
                                <p>Telefone:</p>
                                <p>+55 (51)98583-6686</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-row mt-10 justify-between">
                    <div>
                        <div>
                            <h2 className="text-xl">Minhas habilidades</h2>
                            <p></p>
                        </div>
                        <div className="flex my-5 flex-row">
                            <FaReact size={40} />
                            <BiLogoSpringBoot size={40} />
                            <RiTailwindCssFill size={40} />
                            <IoLogoJavascript size={40} />
                            <MdOutlineCss size={40} />
                            <FaNode size={40} />
                        </div>
                    </div>
                    <div className="text-right">

                        <div>
                            <p className="text-xl">Meus projetos</p>
                            <p className="text-secondary">Alguns projetos feitos por mim ou ainda em construção</p>
                        </div>
                        <div>
                            <div><img src="" alt="" /></div>
                            <div><img src="" alt="" /></div>
                            <div><img src="" alt="" /></div>
                            <div><img src="" alt="" /></div>
                        </div>
                    </div>

                </section>
                <section className="text-md">
                    <div>
                        <h2 className="text-2xl mt-10">Fale comigo!</h2>
                    </div>
                    <div>
                        <div className="mt-4 flex flex-row gap-4 items-center">
                            <FaPhoneAlt size={30} />
                            <p className="text-xl">51 985836686</p>
                        </div>
                        <FaRegPaperPlane />
                    </div>
                </section>

            </main>
            <footer>

            </footer>
        </>
    )
}