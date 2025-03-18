"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "./modal";

export default function Project() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showNumber, setShowNumber] = useState<number>(0);
    const clickModal = () => {
        setShowModal(!showModal);
    }

    return (
        <div className="relative w-full p-5 flex flex-col gap-10 pb-20">
            <div className="absolute top-20 left-1/2 -translate-x-1/2 flex">
                <p className="text-3xl font-bold text-center">Project</p>
            </div>

            <ul className="w-3/4 flex flex-wrap gap-5 mt-40 mx-auto">
                <li className="w-[calc(50%-1.25rem)] bg-[#F5F4F2] shadow-2xl rounded-2xl overflow-hidden group cursor-pointer">
                    <div onClick={() => {
                        setShowNumber(0);
                        clickModal();
                    }}>
                        <div className="overflow-hidden rounded-t-2xl">
                            <Image
                                src="/images/당근.JPG"
                                alt="당근마켓"
                                width={540} height={300}
                                loading="lazy"
                                className="w-full h-[300px] p-3 object-cover rounded-2xl transition-transform duration-300 ease-out group-hover:scale-110"
                            />
                        </div>

                        <div className="flex justify-between p-5">
                            <div className="text-2xl">당근마켓</div>
                            <div className="flex items-center">Next.js / Typescript</div>
                        </div>
                    </div>
                </li>

                <li className="w-[calc(50%-1.25rem)] bg-[#F5F4F2] shadow-2xl rounded-2xl overflow-hidden group cursor-pointer">
                    <div onClick={() => {
                        setShowNumber(1);
                        clickModal();
                    }}>
                        <div className="overflow-hidden rounded-t-2xl">
                            <Image
                                src="/images/Nexus.jpg"
                                alt="Nexus"
                                width={540} height={300}
                                loading="lazy"
                                className="w-full h-[300px] p-3 object-cover rounded-2xl transition-transform duration-300 ease-out group-hover:scale-110"
                            />
                        </div>

                        <div className="flex justify-between p-5">
                            <div className="text-2xl">Nexus</div>
                            <div className="flex items-center">Spring / JSP</div>
                        </div>
                    </div>
                </li>

                <li className="w-[calc(50%-1.25rem)] bg-[#F5F4F2] shadow-2xl rounded-2xl overflow-hidden group cursor-pointer">
                    <div onClick={() => {
                        setShowNumber(2);
                        clickModal();
                    }}>
                        <div className="overflow-hidden rounded-t-2xl">
                            <Image
                                src="/images/movie.JPG"
                                alt="Movie"
                                width={540} height={300}
                                loading="lazy"
                                className="w-full h-[300px] p-3 object-cover rounded-2xl transition-transform duration-300 ease-out group-hover:scale-110"
                            />
                        </div>

                        <div className="flex justify-between p-5">
                            <div className="text-2xl">Movie</div>
                            <div className="flex items-center">Next.js</div>
                        </div>
                    </div>
                </li>

                <li className="w-[calc(50%-1.25rem)] bg-[#F5F4F2] shadow-2xl rounded-2xl overflow-hidden group cursor-pointer">
                    <div onClick={() => {
                        setShowNumber(3);
                        clickModal();
                    }}>
                        <div className="overflow-hidden rounded-t-2xl">
                            <Image
                                src="/images/로그인.JPG"
                                alt="스프링부트 리액트 타입스크립트"
                                width={540} height={300}
                                loading="lazy"
                                className="w-full h-[300px] p-3 object-cover rounded-2xl transition-transform duration-300 ease-out group-hover:scale-110"
                            />
                        </div>

                        <div className="flex justify-between p-5">
                            <div className="text-2xl">게시판 & 블로그</div>
                            <div className="flex items-center">SpringBoot / React / Typescript / JPA</div>
                        </div>
                    </div>
                </li>
            </ul>

            {
                showModal && <Modal showNumber={showNumber} clickModal={clickModal} />
            }
        </div>
    );
}