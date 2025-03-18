export const mockItems = [
    {
        id: 0, 
        name: "당근마켓", 
        mainImage: "/images/당근.JPG",
        skill: ["Next.js", "Typescript", "Tailwind CSS", "Prisma", "Zod", "Cloudflare Image", "Cloudflare Stream"],
        architecture: null,
        images: ["/images/당근마켓 계정.png", "/images/당근마켓 홈1.png", "/images/당근마켓 홈2.png", "/images/동네생활.png", "/images/채팅.png", "/images/스트리밍.png", "/images/프로필.png"],
        description: [
            [
                "로그인"
            ],
            [
                "홈1"
            ],
            [
                "홈2"
            ],
            [
                "동네생활"
            ],
            [
                "채팅"
            ],
            [
                "스트리밍"
            ],
            [
                "프로필"
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