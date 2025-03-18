export const mockItems = [
    {
        id: 0, 
        name: "당근마켓", 
        mainImage: "/images/당근.JPG",
        skill: ["Next.js", "Typescript", "Tailwind CSS", "Prisma", "Zod", "Cloudflare Image", "Cloudflare Stream", "Supabase"],
        architecture: null,
        images: ["/images/당근마켓 계정.png", "/images/당근마켓 홈1.png", "/images/당근마켓 홈2.png", "/images/동네생활.png", "/images/채팅.png", "/images/스트리밍.png", "/images/프로필.png"],
        description: [
            [
                "회원가입과 로그인을 위해 useActionState를 사용하여 Server Action을 호출하고, 결과를 상태로 관리한다.",
                "Server Action에서 Zod를 통해 입력한 데이터를 검사하고, Prisma를 통해 데이터베이스를 제어한다.",
                "bcrypt를 통해 회원가입 시 입력한 비밀번호를 해싱하고, 로그인 시 입력한 비밀번호와 저장된 해시 비밀번호가 일치하는지 확인한다.",
                "iron-session을 통해 사용자의 세션을 관리하며, 로그인 시 세션에 로그인한 사용자의 ID를 담고, 리다이렉트를 수행한다.",
                "사용자가 GitHub을 통해 로그인을 시도하면, GitHub에서 code를 반환 받고, code를 통해 액세스 토큰을 요청한 후 GitHub 정보로 회원가입과 로그인을 수행한다."
            ],
            [
                "등록된 제품들을 Intersection Observer를 사용하여 스크롤이 특정 지점에 도달하면 Prisma를 통해 다음 제품을 불러오는 무한 스크롤 기능을 수행한다.",
                "input 태그에 이미지 등록 시 URL.createObjectURL(file)를 통해 이미지 미리보기를 제공하며, Cloudflare에 업로드할 URL을 제공받는다.",
                "제공받은 URL로 Cloudflare에 이미지를 저장하고, 저장된 이미지의 URL을 Form에 담아서 Server Action을 수행한다.",
                "Action에서 Zod를 통해 데이터를 검사한 후 Prisma를 통해 데이터를 저장하고, revalidateTag를 통해 Tag에 맞는 cache를 무효화하여 최신 데이터를 가져온다."
            ],
            [
                "동적 라우터를 통해 URL 파라미터 값에 맞춰 제품의 상세 정보를 제공하고, 제품의 소유자는 상품의 삭제, 수정을 제공하고, 다른 사용자라면 채팅 기능을 제공한다.",
                "모달은 내부 동작은 동일하며, Intercepting을 통해 페이지에 요청을 가로채서 제품 상세 페이지로 이동하지 않고, 모달을 제공한다.",
                "병렬 라우트를 통해 동적으로 여러 레이아웃을 관리하여, 기존 페이지 위에 새로운 모달의 페이지를 제공할 수 있다.",
                "Intercepting을 사용했기 URL은 변경이 되었기에, 새로고침 시 기존 제품 상세 페이지로 이동한다."
            ],
            [
                "게시글을 작성하기 위해 사용자가 입력한 데이터를 Server Action에서 Zod로 검사 후 Prisma로 데이터베이스에 저장한다.",
                "동적 라우터를 통해 URL 파라미터 값에 맞춰 게시글의 상세 정보를 제공하고, 토글의 형태로 좋아요를 제어할 수 있다.",
                "form의 onSubmit 이벤트를 캐치하여 함수를 수행하는데, 입력한 데이터를 해당 게시글의 댓글로 등록한다.",
                "비동기 데이터 처리를 최적화하는 hook인 useOptimistic으로 비동기 작업의 결과를 예측하여 데이터베이스에 적용되기 전에 UI를 즉시 반영하여 댓글이 작성된 것 처럼 보인다."
            ],
            [
                "세션을 통해 현재 사용자가 속한 채팅방 목록과 메시지의 대상, 최신 메시지, 읽지 않은 메시지의 수를 제공한다.",
                "동적 라우터를 통해 URL 파라미터 값에 맞춰 채팅방을 제공하고, 채팅방에 사용자가 접근하면 메시지를 읽을 처리한다.",
                "Supabase를 사용해 WebSocket 기반의 RealTimeChannel으로 채팅방에 포함된 사용자 간 메시지를 실시간으로 전송한다.",
            ],
            [
                "Cloudflare Stream URL에 스트림 ID를 파라미터로, Body에 API Key를 담아 POST 요청을 보낸 후 반환된 Stream 정보를 데이터베이스에 저장하여 스트리밍을 생성한다.",
                "동적 라우터를 통해 URL 파라미터 값에 맞춰 스트리밍의 정보를 제공하고, 해당 스트리밍의 URL과 Key를 제공한다.",
                "스트리밍은 URL과 Key를 통해 스트리밍 프로그램을 통해 실시간으로 방송한다."
            ],
            [
                "세션을 통해 현재 사용자의 정보를 UI로 제공하며, 사용자가 등록한 제품의 리스트를 제공한다.",
                "SNS 로그인이 아니라면 프로필 수정이 가능하며, 프로필 수정 페이지에 패스워드를 입력하여 접근한다.",
                "현재 사용자의 기존 정보를 제공하며, 사용자가 입력한 데이터는 수정되며, 입력하지 않은 데이터는 기존 데이터가 유지된다.",
                "이미지 변경 시 Cloudflare에서 새로운 이미지를 데이터베이스 저장한다."
            ]
        ],
        descriptionTitle: ["계정", "제품", "제품 상세", "동네생활", "채팅", "스트리밍", "프로필"],
        github: "https://github.com/LJunsu/carrot-market-reloaded",
        notion: "https://www.notion.so/Next-js-1-19037ccfd8c180e68b79f121ae1ad431?pvs=4",
        site: "https://carrot-market-reloaded-swart.vercel.app/"
    },
    {
        id: 1, 
        name: "Nexus", 
        mainImage: "/images/Nexus.jpg",
        skill: ["Spring", "Java", "JSP", "Javascript", "JQuery", "MyBatis", "Google Charts", "Chart.js", "DataTables"],
        architecture: "/images/Nexus아키텍처.png",
        images: ["/images/메인페이지.png", "/images/넥서스 정보마당.png", "/images/프로젝트 대시보드.png", "/images/타임라인.png", "/images/코드쉐어.png"],
        description: [
            [
                "Spring Framework를 사용하여 서버 사이드 애플리케이션을 구현",
                "Axios와 Fetch API를 활용하여 클라이언트와 서버 간 비동기 통신",
                "RESTful API 상호작용을 통해 실시간 데이터 업데이트",
                "MVC 패턴을 적용하여 애플리케이션의 구조를 분리"
            ], 
            [
                "비동기와 RESTful을 통한 클라이언트 사이드 렌더링",
                "Modal을 통해 게시글 CRUD",
                "댓글 및 대댓글 CRUD",
                "좋아요 및 조회수 기능"
            ], 
            [
                "그룹 및 프로젝트의 공지사항 리스트 제공",
                "프로젝트의 정보와 이슈 요약",
                "Chart.js를 통해 이슈의 진척상황을 카테고리 별 시각화"
            ], 
            [
                "Google Charts API를 통해 타임라인의 이슈 관리 및 시각화",
                "타임라인을 통해 이슈 CRUD"
            ], 
            [
                "WebSocket을 통해 페이지 별 실시간 코드 공유 및 참가자 리스트 제공",
                "Java Compiler API를 통해 입력한 Java 코드를 컴파일 및 결과 반환"
            ]
        ],
        descriptionTitle: [
            "",
            "정보마당 게시판",
            "프로젝트 대시보드",
            "이슈 타임라인",
            "코드쉐어"
        ],
        github: "https://github.com/LJunsu/Saas-Nexus-",
        notion: "",
        site: ""
    },
    {
        id: 2, 
        name: "Movie", 
        mainImage: "/images/movie2.png",
        skill: ["Next.js"],
        architecture: null,
        images: ["/images/movie1.png", "/images/movie2.png"],
        description: [["Fetch를 통해 API의 데이터를 불러와 영화 리스트 제공"], ["Route를 통해 상세 페이지로 이동", "Fetch를 통해 API의 데이터를 불러와 제공"]],
        descriptionTitle: ["리스트 페이지", "상세 페이지"],
        github: "https://github.com/LJunsu/Next.js-nomadcoder",
        notion: "https://www.notion.so/Next-js-18937ccfd8c180ef8f5df20f5474b961?pvs=4",
        site: "https://nextjs-movies-sepia-six.vercel.app/"
    },
    {
        id: 3, 
        name: "게시판 & 블로그", 
        mainImage: "/images/top3.JPG",
        skill: ["Spring Boot", "React", "Typescript", "MySql", "JPA", "JWT 토큰"],
        architecture: null,
        images: ["/images/top3.JPG", "/images/top3.JPG", "/images/게시물.png", "/images/로그인.JPG", "/images/마이페이지.JPG", "/images/보드디테일.JPG", "/images/댓글 및 좋아요.JPG"],
        description: [
            [
                "Spring Boot, React.js (TypeScript), MySQL을 활용하여 게시판형 블로그 애플리케이션입니다.",
                "Spring Boot로 RESTful API를 구축하고, MySQL을 이용해 데이터를 관리했습니다.",
                "프론트엔드는 React.js와 TypeScript를 사용해 반응형 UI를 구현했습니다.",
                "Axios를 통해 백엔드와의 데이터 연동을 처리하며, Spring Data JPA를 활용한 효율적인 데이터베이스 연동과 사용자 인증 시스템을 구현했습니다.",
            ],
            [
                "JPA를 통해 7일 이내에 작성된 게시물을 좋아요, 댓글, 조회수, 작성일을 기준으로 Top3 게시글 조회"
            ],
            [
                "전체 게시물을 페이지네이션을 통해 제공",
                "검색 시 생성된 검색 로그를 통해 검색 횟수가 많은 키워드의 인기 검색어를 제공"
            ],
            [
               "JWT 토큰을 통해 서명 검증으로 로그인" 
            ],
            [
                "사용자의 게시물 리스트 제공",
                "이름 및 프로필 이미지 수정"
            ],
            [
                "게시글 상세 페이지 및 작성, 수정"
            ],
            [
                "각 게시글 별 좋아요 및 댓글 리스트"
            ]
        ],
        descriptionTitle: ["", "TOP-3", "게시글 & 인기 검색어", "로그인", "프로필", "상세 게시글", "상세 게시글"],
        github: "https://github.com/LJunsu/Spring-React-mysql",
        notion: "",
        site: ""
    }
];