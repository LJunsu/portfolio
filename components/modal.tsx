import { mockItems } from "@/data/mockData";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface ModalProps {
    showNumber: number;
    clickModal: () => void;
}
export default function Modal({showNumber, clickModal}: ModalProps) {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const project = mockItems[showNumber];

    return (
        <div 
            onClick={clickModal}
            className="fixed top-0 left-0 w-screen h-screen bg-black/40"
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                className="
                w-3/4 h-5/6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-white max-h-[80vh] overflow-auto rounded-2xl
            ">
                <Image
                    src="/images/close-x.svg"
                    alt="close"
                    width={30} height={30}
                    onClick={clickModal} 
                    className="fixed top-5 right-5 cursor-pointer transition-transform duration-200 ease-out hover:scale-120"
                />
                
                <div className="w-full p-12 flex flex-col gap-12">
                    <div className="flex gap-10">
                        <Image
                            src={project.mainImage}
                            alt={project.name}
                            width={600} height={350}
                            loading="lazy"
                            className="w-1/2 rounded-2xl object-cover"
                        />

                        <div className="w-1/2 flex flex-col gap-6">
                            <div className="text-3xl font-bold">
                                {project.name}
                            </div>

                            <div className="flex w-full gap-6">
                                <div className="w-1/2 flex flex-col gap-3">
                                    <div className="text-2xl pb-3 border-gray-300 border-b-1">Link</div>

                                    <ul className="flex flex-col flex-wrap gap-3 *:text-[1rem]">
                                        {project.github
                                        ? (
                                            <li>
                                                <Link
                                                    href={project.github}
                                                    target="_blank" rel="noopener noreferrer"
                                                    className="relative after:absolute after:bottom-0 after:left-0
                                                        after:w-full after:h-[1px] after:bg-black after:scale-x-0
                                                        after:transition-transform after:ease-in-out
                                                        hover:after:scale-x-100"
                                                >GitHub →</Link>
                                            </li>
                                        )
                                        : null}        

                                        {project.notion
                                        ? (
                                            <li>
                                                <Link
                                                    href={project.notion}
                                                    target="_blank" rel="noopener noreferrer"
                                                    className="relative after:absolute after:bottom-0 after:left-0
                                                        after:w-full after:h-[1px] after:bg-black after:scale-x-0
                                                        after:transition-transform after:ease-in-out
                                                        hover:after:scale-x-100"
                                                >Notion →</Link>
                                            </li>
                                        )
                                        : null}            

                                        {project.site
                                        ? (
                                            <li>
                                                <Link
                                                    href={project.site}
                                                    target="_blank" rel="noopener noreferrer"
                                                    className="relative after:absolute after:bottom-0 after:left-0
                                                        after:w-full after:h-[1px] after:bg-black after:scale-x-0
                                                        after:transition-transform after:ease-in-out
                                                        hover:after:scale-x-100"
                                                >Site →</Link>
                                            </li>
                                        )
                                        : null}                       
                                    </ul>
                                </div>

                                <div className="w-1/2 flex flex-col gap-3">
                                    <div className="text-2xl pb-3 border-gray-300 border-b-1">Skill</div>

                                    <ul className="flex flex-col flex-wrap gap-1 *:text-[1rem]">                                
                                        {project.skill.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {project.architecture
                    ? (
                        <div className="w-full">
                            <div className="text-2xl pb-3 border-gray-300 border-b-1">시스템 아키텍처</div>

                            <Image
                                src={project.architecture}
                                alt=""
                                width={1200} height={500}
                                className="w-full"
                            />
                        </div>
                    )
                    : null}

                    <div className="w-full">  
                        {project.images?.map((item, index) => (
                            <div key={index} className="flex flex-col gap-12">
                                <div className="text-2xl pt-12 border-gray-300 border-b-1" />

                                <div key={index} className="flex gap-10">
                                    {!item.endsWith('.mp4') ?
                                    <Image
                                        src={item} alt=""
                                        width={1200} height={600}
                                        className="w-1/2 max-h-[600px] object-contain"
                                    />
                                    : 
                                    <video width="1200" height="600" controls className="w-1/2 max-h-[600px] object-contain">
                                        <source src={item} type="video/mp4" />
                                        브라우저가 video 태그를 지원하지 않습니다.
                                    </video>}


                                    <div className="w-1/2 flex flex-col gap-3 text-lg">
                                        <div className="text-2xl font-bold">
                                            {project.descriptionTitle[index]}
                                            </div>

                                        {project.description[index].map((desc, descIndex) => (
                                            <span key={descIndex} className="text-[16px]">{desc}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}