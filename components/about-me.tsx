import Image from "next/image";
import Link from "next/link";
import Background from "./background";

export default function AboutMe() {

    return (
        <div className="w-full p-5 pb-20">
            <div className="flex flex-col gap-10">
                <div className="flex gap-10">
                    <Image
                        src="/images/이준수 증명사진.jpg"
                        alt="증명사진"
                        width={300} height={420}
                        loading="lazy"
                        className="rounded-2xl"
                    />

                    <ul className="flex flex-col justify-end gap-3 *:gap-1">
                        <li className="text-2xl font-bold">
                            함께 일하고 싶은 개발자
                        </li>

                        <li className="text-4xl font-bold mb-6">
                            이준수
                        </li>

                        <li className="flex">
                            <div>Email</div>
                            <div>:</div>
                            <Link href={"mailto:tpwo6537@naver.com"} target="_blank" rel="noopener noreferrer">tpwo6537@naver.com</Link>
                        </li>

                        <li className="flex">
                            <div>GitHub</div>
                            <div>:</div>
                            <Link href={"https://github.com/LJunsu"} target="_blank" rel="noopener noreferrer">https://github.com/LJunsu</Link>
                        </li>

                        <li className="flex">
                            <div>Notion</div>
                            <div>:</div>
                            <Link href={"https://bit.ly/4hAHPg9"} target="_blank" rel="noopener noreferrer">https://bit.ly/4hAHPg9</Link>
                        </li>
                    </ul>
                </div>

                <div className="border-b-1 my-10" />

                <Background />
            </div>
        </div>
    );
}