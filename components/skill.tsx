
export default function Skill() {

    return (
        <div className="relative w-full p-5 pb-20 flex flex-col gap-10">
            <div className="absolute top-20 left-1/2 -translate-x-1/2 flex">
                <p className="text-3xl font-bold text-center">Skill & Tools</p>
            </div>

            <div className="flex flex-col gap-5 mt-40">
                <div>
                    <p className="text-xl font-bold text-blue-600">프로그래밍 언어</p>
                    <p>Java / JSP / HTML · CSS · JavaScript / TypeScript</p>
                </div>

                <div>
                    <p className="text-xl font-bold text-blue-600">프레임워크 & 데이터 관리</p>
                    <p>Spring / React / Next.js / jQuery / MyBatis / JPA / Prisma</p>
                </div>

                <div>
                    <p className="text-xl font-bold text-blue-600">데이터 포맷 & 통신</p>
                    <p>AJAX / JSON / XML / WebSocket</p>
                </div>

                <div>
                    <p className="text-xl font-bold text-blue-600">UI & 데이터 시각화</p>
                    <p>Tailwind CSS / Google Charts / Chart.js / DataTables</p>
                </div>

                <div>
                    <p className="text-xl font-bold text-blue-600">협업 툴</p>
                    <p>SVN / redmine / Slack</p>
                </div>

                <div>
                    <p className="text-xl font-bold text-blue-600">데이터베이스 & 인프라</p>
                    <p>Oracle DB / MySQL / Cloudflare / Vercel</p>
                </div>

                <div>
                    <p className="text-xl font-bold text-blue-600">개발 도구 & 환경</p>
                    <p>Eclipse / VS Code / Maven / GitHub / StarUML / Figma / Photoshop / Illustrator</p>
                </div>
            </div>
        </div>
    );
}