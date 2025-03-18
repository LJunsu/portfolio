
export default function Background() {

    return (
        <div className="w-full flex justify-around gap-5">
            <div className="flex flex-col gap-5 lg:gap-10">
                <div className="text-xl font-bold lg:text-3xl">학력사항</div>

                <div className="h-100 flex gap-5">
                    <div className="relative w-3">
                        <div className="bg-gray-200 absolute rounded-full w-full h-full" />
                        <div className="bg-blue-400 absolute rounded-full w-full h-full" />
                    </div>

                    <ul className="flex flex-col justify-around gap-3">
                        <li>
                            <div className="text-xl font-bold lg:text-2xl">2017.02</div>
                            <div className="text-xs lg:text-base">계룡공업고등학교 졸업</div>
                        </li>

                        <li>
                            <div className="text-xl font-bold lg:text-2xl">2021.02</div>
                            <div className="text-xs lg:text-base">대덕대학교 전기전자과 졸업</div>
                        </li>

                        <li>
                            <div className="text-xl font-bold lg:text-2xl">2024.08</div>
                            <div className="text-xs lg:text-base">한남대학교 멀티미디어공학과 졸업</div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col gap-5 lg:gap-10">
                <div className="text-xl font-bold lg:text-3xl">자격정보</div>

                <div className="h-100 flex gap-5">
                    <div className="relative w-3">
                        <div className="bg-gray-200 absolute rounded-full w-full h-full" />
                        <div className="bg-blue-400 absolute rounded-full w-full h-full" />
                    </div>

                    <ul className="flex flex-col justify-around gap-3">
                        <li>
                            <div className="text-xl font-bold lg:text-2xl">2015.11</div>
                            <div className="text-xs lg:text-base">정보처리기능사</div>
                        </li>

                        <li>
                            <div className="text-xl font-bold lg:text-2xl">2016.07</div>
                            <div className="text-xs lg:text-base">전자기기기능사</div>
                        </li>

                        <li>
                            <div className="text-xl font-bold lg:text-2xl">2021.08</div>
                            <div className="text-xs lg:text-base">GTQ 1급</div>
                        </li>

                        <li>
                            <div className="text-xl font-bold lg:text-2xl">2022.09</div>
                            <div className="text-xs lg:text-base">웹디자인기능사</div>
                        </li>

                        <li>
                            <div className="text-xl font-bold lg:text-2xl">2024.03</div>
                            <div className="text-xs lg:text-base">정보처리기사 (필기)</div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col gap-5 lg:gap-10">
                <div className="text-xl font-bold lg:text-3xl">수상 및 교육정보</div>

                <div className="h-100 flex gap-5">
                    <div className="relative w-3">
                        <div className="bg-gray-200 absolute rounded-full w-full h-full" />
                        <div className="bg-blue-400 absolute rounded-full w-full h-full" />
                    </div>

                    <ul className="flex flex-col justify-around gap-3">
                        <li>
                            <div className="text-xl font-bold lg:text-2xl">2024.09</div>
                            <div className="text-xs lg:text-base">전자정부 표준 프레임워크 기반 풀-스택 과정</div>
                        </li>

                        <li>
                            <div className="text-xl font-bold lg:text-2xl">2023.12</div>
                            <div className="text-xs lg:text-base">유니버셜디자인공모전 특선</div>
                        </li>

                        <li>
                            <div className="text-xl font-bold lg:text-2xl">2023.09</div>
                            <div className="text-xs lg:text-base">경남 K-디자인 어워드 입선</div>
                        </li>

                        <li>
                            <div className="text-xl font-bold lg:text-2xl">2023.01</div>
                            <div className="text-xs lg:text-base">UI/UX반응형 웹디자인&웹퍼블리셔 과정</div>
                        </li>

                        <li>
                            <div className="text-xl font-bold lg:text-2xl">2020.11</div>
                            <div className="text-xs lg:text-base">국제로봇콘테스트 산업통상부장관상</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}