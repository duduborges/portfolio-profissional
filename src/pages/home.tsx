import { FaReact, FaWhatsapp } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { MdOutlineCss, MdOutlineMailOutline } from "react-icons/md";
import { FaNode } from "react-icons/fa";
import '../App.css'
import { SiLinkedin } from "react-icons/si";
import React from "react";
import jogoDaVelha from "../assets/jogo-da-velha.png"
import anotaSenai from "../assets/anota-senai.png"
import dataCloud from "../assets/datacloud.png"
import curriculo from "../../curriculo.pdf"


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
            <main className="w-3/5 m-auto">
                <section className="flex flex-row  m-auto justify-around pt-56">
                    <div>
                        <p className="text-7xl text-terciary">Olá</p>
                        <h1 className="text-xl w-96 ">Me chamo Eduardo Borges e sou desenvolvedor front-end e esse é meu portfólio</h1>
                        <div className="flex flex-row justify-around mt-14">
                            <a target="_blank" href="https://www.linkedin.com/in/eduardo-borges-cambraia/"><button className="cursor-pointer bg-terciary p-4 rounded-md flex justify-center items-center gap-2">Linkedin <SiLinkedin /> </button></a>
                            <a target="_blank" href={curriculo} download={curriculo}><button className="bg-terciary p-4 rounded-md">Download curriculo</button></a>
                        </div>
                    </div>
                    <div>
                        <img className="w-80 h-80 minhaimg  rounded-md" src="https://avatars.githubusercontent.com/u/84474594?v=4" alt="" />
                    </div>
                </section>
                <section className="flex flex-col mt-72">
                    <div id="about" className="flex justify-center text-7xl">
                        <p>Sobre mim</p>
                    </div>
                    <div className="flex  flex-col mt-10">
                        <p className="text-2xl mb-4">Um <strong className="text-terciary">talentoso</strong> jovem que pode solucionar os <strong className="text-terciary">desafios da sua empresa!</strong></p>
                        <div className="flex gap-1 flex-col text-xl">
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
                <section className="flex flex-row my-10  justify-between">
                    <div id="skills" className="flex flex-col justify-between">
                        <div>

                            <div>
                                <h2 className="text-xl">Minhas habilidades</h2>
                            </div>
                            <div className="flex my-5  gap-5 flex-row">
                                <FaReact className="flutuando" size={40} />
                                <BiLogoSpringBoot className="flutuando" size={40} />
                                <RiTailwindCssFill className="flutuando" size={40} />
                                <IoLogoJavascript className="flutuando" size={40} />
                                <MdOutlineCss className="flutuando" size={40} />
                                <FaNode className="flutuando" size={40} />
                            </div>
                            <hr />
                        </div>

                        <div>
                            <div className="my-3"><img className="w-80 shadow-sm shadow-gray-500" src={dataCloud} alt="" />
                                <p>DataCloud, sistema para coleta de dados de supermercados (privado)</p></div>
                        </div>
                    </div>
                    <div id="project" className="text-right">

                        <div>
                            <p className="text-xl">Meus projetos</p>
                            <p className="text-secondary ">Alguns projetos feitos por mim ou ainda em construção</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="my-3">
                                <a href="https://jogo-da-velha-next-pi.vercel.app/"><img className="cursor-pointer w-80 shadow-sm shadow-gray-500" src={jogoDaVelha} alt="" /></a>
                                <p>Jogo da velha em next</p>
                            </div>
                            <div className="my-3">
                                <a href="https://anotasenai.vercel.app/"><img className=" cursor-pointer w-80 shadow-sm shadow-gray-500" src={anotaSenai} alt="" /></a>
                                <p>Anota Senai, sistema de anotações (banco de dados em construção)</p>
                            </div>
                        </div>
                    </div>

                </section>


            </main>
            <footer id="contact" className="flex flex-col text-left border-teal-50 border border-x-0 border-b-0  py-5 items-center  shadow-2xl   w-full">
                <div >
                    <h2 className="text-2xl flex justify-center  shadow-white ">Fale comigo!</h2>
                </div>
                <div>
                    <a target="_blank" href="https://wa.me/5551985836686">
                        <div className="mt-4 flex  flex-row gap-4 ">
                            <FaWhatsapp size={30} />
                            <p className="text-xl">51 985836686</p>
                        </div>
                    </a>
                    <a target="_blank" href="mailto:duduborges333969@gmail.com">
                        <div className="mt-4 flex flex-row gap-4  items-center">
                            <MdOutlineMailOutline size={30} />
                            <p className="text-xl">duduborges333969@gmail.com</p>
                        </div>
                    </a>
                </div>
                <div className="w-full text-right pr-6">
                    Eduardo Borges &copy;
                </div>
            </footer>
        </>
    )
}