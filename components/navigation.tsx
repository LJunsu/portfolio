import { useSection } from "@/lib/SectionContext";
import Link from "next/link";

export default function Navigation() {
    const {onMoveBox} = useSection();

    return (
        <nav className="w-full fixed top-0 left-0 py-5 flex justify-center z-50
        bg-white/30 backdrop-blur-md shadow-md">
            <div className="w-4/5 flex justify-around">
                <div className="flex gap-5">
                    <Link
                    href={"https://github.com/LJunsu"}
                    target="_blank" rel="noopener noreferrer"
                    className="
                        relative after:absolute after:bottom-0 after:left-0
                        after:w-full after:h-[1px] after:bg-black after:scale-x-0
                        after:transition-transform after:ease-in-out
                        hover:after:scale-x-100
                    ">GitHub</Link>

                    <Link 
                    href={"https://www.notion.so/8fc88ba7294f4fe69ce6c5412d4a18fb?v=ba3408275fd545de98a936181c1b254d&pvs=4"}
                    target="_blank" rel="noopener noreferrer"
                    className="
                        relative after:absolute after:bottom-0 after:left-0
                        after:w-full after:h-[1px] after:bg-black after:scale-x-0
                        after:transition-transform after:ease-in-out
                        hover:after:scale-x-100
                    ">Notion</Link>
                </div>

                <div className="flex gap-5">
                    <div 
                    onClick={() => onMoveBox("aboutMe")}
                    className="
                        relative after:absolute after:bottom-0 after:left-0
                        after:w-full after:h-[1px] after:bg-black after:scale-x-0
                        after:transition-transform after:ease-in-out
                        hover:after:scale-x-100 cursor-pointer
                    ">About me</div>

                    <div 
                    onClick={() => onMoveBox("skill")}
                    className="
                        relative after:absolute after:bottom-0 after:left-0
                        after:w-full after:h-[1px] after:bg-black after:scale-x-0
                        after:transition-transform after:ease-in-out
                        hover:after:scale-x-100 cursor-pointer
                    ">Skill & Tools</div>

                    {/* <div 
                    onClick={() => onMoveBox("study")}
                    className="
                        relative after:absolute after:bottom-0 after:left-0
                        after:w-full after:h-[1px] after:bg-black after:scale-x-0
                        after:transition-transform after:ease-in-out
                        hover:after:scale-x-100 cursor-pointer
                    ">Study</div> */}

                    <div
                    onClick={() => onMoveBox("project")}
                    className="
                        relative after:absolute after:bottom-0 after:left-0
                        after:w-full after:h-[1px] after:bg-black after:scale-x-0
                        after:transition-transform after:ease-in-out
                        hover:after:scale-x-100 cursor-pointer
                    ">Project</div>
                </div>
            </div>
        </nav>
    );
}