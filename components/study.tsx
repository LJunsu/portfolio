import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Study() {
    const circleRef = useRef(null);

    useEffect(() => {
        const circle = circleRef.current as HTMLDivElement | null;
        if(!circle) return;
        const articles = circle.querySelectorAll("article");
    
        const handleMouseEnter = () => {
          circle.style.animationPlayState = "paused";
        };
    
        const handleMouseLeave = () => {
          circle.style.animationPlayState = "running";
        };
    
        articles.forEach((el: Element) => {
          el.addEventListener("mouseenter", handleMouseEnter);
          el.addEventListener("mouseleave", handleMouseLeave);
        });
    
        return () => {
          articles.forEach((el: Element) => {
            el.removeEventListener("mouseenter", handleMouseEnter);
            el.removeEventListener("mouseleave", handleMouseLeave);
          });
        };
    }, []);

    return (
        <section 
            id="circle" ref={circleRef}
            className="
                absolute top-1/2 left-1/2 w-2/4 h-3/4
                -translate-x-1/2 -translate-y-1/2 transform-3d 
                *:cursor-pointer *:shadow-lg *:rounded-2xl animate-rotateY
        ">
            <article
                style={{ transform: 'rotateY(0deg) translateZ(-1200px)' }}
                className="
                    absolute top-0 left-0 w-full h-full bg-blue-300 block
                    backface-hidden *:rounded-2xl group
            ">
                <Image
                    src="/images/Frame 1.png"
                    alt="정보처리기사 필기"
                    width={1000} height={750}
                    loading="lazy"
                    className="w-full h-full object-fit"
                />
                
                <div className="
                    absolute top-0 left-0 size-full bg-black
                    opacity-0 transition-opacity duration-300 group-hover:opacity-40
                "/>
                
                <ul className="absolute top-3/4 left-1/2 -translate-x-1/2 flex gap-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <li className="size-[120px] rounded-full bg-white flex items-center justify-center p-3 animate-bounce [animation-delay:100ms]">
                        <Image
                            src="/images/computer-science.png"
                            alt="CS"
                            width={120} height={120}
                            loading="lazy"
                            className="p-2"
                        />
                    </li>
                </ul>
                
                <div className="w-full text-center absolute bottom-8 left-1/2 -translate-x-1/2 text-4xl font-bold transition-opacity duration-100 group-hover:opacity-0">
                    정보처리기사 필기
                </div>
            </article>

            <article 
                style={{ transform: 'rotateY(40deg) translateZ(-1200px)' }}
                className="
                    absolute top-0 left-0 w-full h-full bg-blue-300 block
                    backface-hidden *:rounded-2xl group
            ">
                <Image
                    src="/images/Frame 2.png"
                    alt="정보처리기사 실기"
                    width={1000} height={750}
                    loading="lazy"
                    className="w-full h-full object-fit"
                />

                <div className="
                    absolute top-0 left-0 size-full bg-black
                    opacity-0 transition-opacity duration-300 group-hover:opacity-40
                "/>
                
                <ul className="absolute top-3/4 left-1/2 -translate-x-1/2 flex gap-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <li className="size-[120px] rounded-full bg-white flex items-center justify-center p-3 animate-bounce [animation-delay:100ms]">
                        <Image
                            src="/images/computer-science.png"
                            alt="CS"
                            width={120} height={120}
                            loading="lazy"
                            className="p-2"
                        />
                    </li>
                </ul>

                <div className="w-full text-center absolute bottom-8 left-1/2 -translate-x-1/2 text-4xl font-bold transition-opacity duration-100 group-hover:opacity-0">
                    정보처리기사 실기
                </div>
            </article>

            <article 
                style={{ transform: 'rotateY(80deg) translateZ(-1200px)' }}
                className="
                    absolute top-0 left-0 w-full h-full bg-blue-300 block
                    backface-hidden *:rounded-2xl group
            ">
                <Image
                    src="/images/Frame 3.png"
                    alt="생활코딩 리액트"
                    width={1000} height={750}
                    loading="lazy"
                    className="w-full h-full object-fit"
                />

                <div className="
                    absolute top-0 left-0 size-full bg-black
                    opacity-0 transition-opacity duration-300 group-hover:opacity-40
                "/>
                
                <ul className="absolute top-3/4 left-1/2 -translate-x-1/2 flex gap-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <li className="size-[120px] rounded-full bg-white flex items-center justify-center p-3 animate-bounce [animation-delay:100ms]">
                        <Image
                            src="/images/React.png"
                            alt="React"
                            width={120} height={120}
                            loading="lazy"
                            className="p-2"
                        />
                    </li>
                </ul>
                
                <div className="w-full text-center absolute bottom-8 left-1/2 -translate-x-1/2 text-4xl font-bold transition-opacity duration-100 group-hover:opacity-0">
                    생활코딩 리액트
                </div>
            </article>

            <article 
                style={{ transform: 'rotateY(120deg) translateZ(-1200px)' }}
                className="
                    absolute top-0 left-0 w-full h-full bg-blue-300 block
                    backface-hidden *:rounded-2xl group
            ">
                <Image
                    src="/images/Frame 4.png"
                    alt="노마드코더 리액트"
                    width={1000} height={750}
                    loading="lazy"
                    className="w-full h-full object-fit"
                />

                <div className="
                    absolute top-0 left-0 size-full bg-black
                    opacity-0 transition-opacity duration-300 group-hover:opacity-40
                "/>
                
                <ul className="absolute top-3/4 left-1/2 -translate-x-1/2 flex gap-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <li className="size-[120px] rounded-full bg-white flex items-center justify-center p-3 animate-bounce [animation-delay:100ms]">
                        <Image
                            src="/images/React.png"
                            alt="React"
                            width={120} height={120}
                            loading="lazy"
                            className="p-2"
                        />
                    </li>
                </ul>

                <div className="w-full text-center absolute bottom-8 left-1/2 -translate-x-1/2 text-4xl font-bold transition-opacity duration-100 group-hover:opacity-0">
                    노마드코더 리액트
                </div>
            </article>

            <article 
                style={{ transform: 'rotateY(160deg) translateZ(-1200px)' }}
                className="
                    absolute top-0 left-0 w-full h-full bg-blue-300 block
                    backface-hidden *:rounded-2xl group
            ">
                <Image
                    src="/images/Frame 5.png"
                    alt="노마드코더 타입스크립트"
                    width={1000} height={750}
                    loading="lazy"
                    className="w-full h-full object-fit"
                />

                <div className="
                    absolute top-0 left-0 size-full bg-black
                    opacity-0 transition-opacity duration-300 group-hover:opacity-40
                "/>
                
                <ul className="absolute top-3/4 left-1/2 -translate-x-1/2 flex gap-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <li className="size-[120px] rounded-full bg-white flex items-center justify-center p-3 animate-bounce [animation-delay:100ms]">
                        <Image
                            src="/images/Typescript.png"
                            alt="TypeScript"
                            width={120} height={120}
                            loading="lazy"
                            className="p-2"
                        />
                    </li>
                </ul>

                <div className="w-full text-center absolute bottom-8 left-1/2 -translate-x-1/2 text-4xl font-bold transition-opacity duration-100 group-hover:opacity-0">
                    노마드코더 타입스크립트
                </div>
            </article>

            <article 
                style={{ transform: 'rotateY(200deg) translateZ(-1200px)' }}
                className="
                    absolute top-0 left-0 w-full h-full bg-blue-300 block
                    backface-hidden *:rounded-2xl group
            ">
                <Image
                    src="/images/Frame 6.png"
                    alt="스프링부트 리액트 타입스크립트"
                    width={1000} height={750}
                    loading="lazy"
                    className="w-full h-full object-fit"
                />

                <div className="
                    absolute top-0 left-0 size-full bg-black
                    opacity-0 transition-opacity duration-300 group-hover:opacity-40
                "/>
                
                <ul className="absolute top-3/4 left-1/2 -translate-x-1/2 flex gap-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <li className="size-[120px] rounded-full bg-white flex items-center justify-center p-3 animate-bounce [animation-delay:100ms]">
                        <Image
                            src="/images/Spring.png"
                            alt="Spring"
                            width={120} height={120}
                            loading="lazy"
                            className="p-2"
                        />
                    </li>

                    <li className="size-[120px] rounded-full bg-white flex items-center justify-center p-3 animate-bounce [animation-delay:200ms]">
                        <Image
                            src="/images/React.png"
                            alt="React"
                            width={120} height={120}
                            loading="lazy"
                            className="p-2"
                        />
                    </li>

                    <li className="size-[120px] rounded-full bg-white flex items-center justify-center p-3 animate-bounce [animation-delay:300ms]">
                        <Image
                            src="/images/Typescript.png"
                            alt="TypeScript"
                            width={120} height={120}
                            loading="lazy"
                            className="p-2"
                        />
                    </li>
                </ul>

                <div className="w-full text-center absolute bottom-8 left-1/2 -translate-x-1/2 text-4xl font-bold transition-opacity duration-100 group-hover:opacity-0">
                    스프링부트 + 리액트 + MySql
                </div>
            </article>

            <article 
                style={{ transform: 'rotateY(240deg) translateZ(-1200px)' }}
                className="
                    absolute top-0 left-0 w-full h-full bg-blue-300 block
                    backface-hidden *:rounded-2xl group
            ">
                <Image
                    src="/images/Frame 7.png"
                    alt="노마드코더 넥스트"
                    width={1000} height={750}
                    loading="lazy"
                    className="w-full h-full object-fit"
                />

                <div className="
                    absolute top-0 left-0 size-full bg-black
                    opacity-0 transition-opacity duration-300 group-hover:opacity-40
                "/>
                
                <ul className="absolute top-3/4 left-1/2 -translate-x-1/2 flex gap-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <li className="size-[120px] rounded-full bg-white flex items-center justify-center p-3 animate-bounce [animation-delay:100ms]">
                        <Image
                            src="/images/Nextjs.png"
                            alt="Next.js"
                            width={120} height={120}
                            loading="lazy"
                            className="p-2"
                        />
                    </li>

                    <li className="size-[120px] rounded-full bg-white flex items-center justify-center p-3 animate-bounce [animation-delay:200ms]">
                        <Image
                            src="/images/Typescript.png"
                            alt="TypeScript"
                            width={120} height={120}
                            loading="lazy"
                            className="p-2"
                        />
                    </li>
                </ul>

                <div className="w-full text-center absolute bottom-8 left-1/2 -translate-x-1/2 text-4xl font-bold transition-opacity duration-100 group-hover:opacity-0">
                    노마드코더 Next.js
                </div>
            </article>

            <article 
                style={{ transform: 'rotateY(280deg) translateZ(-1200px)' }}
                className="
                    absolute top-0 left-0 w-full h-full bg-blue-300 block
                    backface-hidden *:rounded-2xl group
            ">
                <Image
                    src="/images/Frame 8.png"
                    alt="노마드코더 넥스트 당근마켓"
                    width={1000} height={750}
                    loading="lazy"
                    className="w-full h-full object-fit"
                />

                <div className="
                    absolute top-0 left-0 size-full bg-black
                    opacity-0 transition-opacity duration-300 group-hover:opacity-40
                "/>

                <ul className="absolute top-3/4 left-1/2 -translate-x-1/2 flex gap-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <li className="size-[120px] rounded-full bg-white flex items-center justify-center p-3 animate-bounce [animation-delay:100ms]">
                        <Image
                            src="/images/Nextjs.png"
                            alt="Next.js"
                            width={120} height={120}
                            loading="lazy"
                            className="p-2"
                        />
                    </li>

                    <li className="size-[120px] rounded-full bg-white flex items-center justify-center p-3 animate-bounce [animation-delay:200ms]">
                        <Image
                            src="/images/Typescript.png"
                            alt="TypeScript"
                            width={120} height={120}
                            loading="lazy"
                            className="p-2"
                        />
                    </li>
                </ul>

                <div className="w-full text-center absolute bottom-8 left-1/2 -translate-x-1/2 text-4xl font-bold transition-opacity duration-100 group-hover:opacity-0">
                    노마드코더 넥스트 - 당근마켓
                </div>
            </article>

            <article 
                style={{ transform: 'rotateY(320deg) translateZ(-1200px)' }}
                className="
                    absolute top-0 left-0 w-full h-full bg-blue-300 block
                    backface-hidden *:rounded-2xl group
            ">
                <Image
                    src="/images/Frame 9.png"
                    alt="모던 자바스크립트 Deep Dive"
                    width={1000} height={750}
                    loading="lazy"
                    className="w-full h-full object-fit"
                />

                <div className="
                    absolute top-0 left-0 size-full bg-black
                    opacity-0 transition-opacity duration-300 group-hover:opacity-40
                "/>

                <ul className="absolute top-3/4 left-1/2 -translate-x-1/2 flex gap-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <li className="size-[120px] rounded-full bg-white flex items-center justify-center p-3 animate-bounce [animation-delay:100ms]">
                        <Image
                            src="/images/Javascript.png"
                            alt="Next.js"
                            width={120} height={120}
                            loading="lazy"
                            className="p-2"
                        />
                    </li>
                </ul>

                <div className="w-full text-center absolute bottom-8 left-1/2 -translate-x-1/2 text-4xl font-bold transition-opacity duration-100 group-hover:opacity-0">
                    모던 자바스크립트 Deep Dive
                </div>
            </article>
        </section>
    );
}