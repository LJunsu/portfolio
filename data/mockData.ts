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
                "회원가입과 로그인을 위해 useActionState를 사용하여 Server Action을 호출하고, 결과를 상태로 관리합니다.",
                "Server Action에서 Zod를 통해 입력한 데이터를 검사하고, Prisma를 통해 데이터베이스를 제어합니다.",
                "회원가입 시 bcrypt를 사용하여 비밀번호를 해싱하고, 로그인 시에는 입력된 비밀번호와 저장된 해시 비밀번호가 일치하는지 확인합니다.",
                "iron-session을 통해 사용자의 세션을 관리하고, 로그인 시 세션에 로그인한 사용자의 ID를 저장하며 리다이렉트를 수행합니다.",
                "GitHub 로그인을 통해 사용자가 GitHub에서 반환한 code를 통해 액세스 토큰을 요청하고, 이를 이용해 회원가입과 로그인을 수행합니다."
            ],
            [
                "Intersection Observer를 활용하여 사용자가 스크롤을 내리면 Prisma를 통해 추가 제품을 불러오는 무한 스크롤 기능을 구현합니다.",
                "input 태그에 이미지 등록 시 URL.createObjectURL(file)을 사용하여 이미지 미리보기를 제공하고, Cloudflare에 업로드할 URL을 받아 저장합니다.",
                "Cloudflare에 이미지를 업로드하고, 저장된 이미지의 URL을 Form에 담아 Server Action을 통해 처리합니다.",
                "Zod를 사용해 데이터를 검증하고, Prisma를 통해 데이터를 저장하며, revalidateTag를 통해 캐시를 무효화하여 최신 데이터를 가져옵니다."
            ],
            [
                "동적 라우터를 사용하여 URL 파라미터에 맞는 제품 상세 정보를 제공하고, 제품의 소유자는 상품의 삭제 및 수정 기능을 제공하며, 다른 사용자는 채팅 기능을 이용할 수 있습니다.",
                "모달은 내부 동작이 동일하지만, Intercepting을 통해 페이지 요청을 가로채어 제품 상세 페이지로 이동하지 않고 모달을 띄웁니다.",
                "병렬 라우트를 통해 동적으로 여러 레이아웃을 관리하며, 기존 페이지 위에 새로운 모달 페이지를 제공합니다.",
                "Intercepting을 사용하여 URL이 변경되기 때문에 새로 고침 시 기존 제품 상세 페이지로 이동할 수 있습니다."
            ],
            [
                "게시글 작성을 위해 사용자가 입력한 데이터를 Server Action에서 Zod로 검사 후, Prisma를 사용해 데이터베이스에 저장합니다.",
                "동적 라우터를 통해 URL 파라미터에 맞는 게시글 상세 정보를 제공하며, 토글 형태로 좋아요를 제어할 수 있습니다.",
                "form의 onSubmit 이벤트를 처리하여 사용자가 입력한 데이터를 게시글의 댓글로 등록합니다.",
                "useOptimistic 훅을 사용해 비동기 작업의 결과를 예측하고 UI에 즉시 반영하여 댓글 작성이 완료된 것처럼 보이도록 합니다."
            ],
            [
                "세션을 통해 현재 사용자가 속한 채팅방 목록, 메시지 대상, 최신 메시지, 읽지 않은 메시지의 수를 제공합니다.",
                "동적 라우터를 통해 URL 파라미터에 맞는 채팅방을 제공하고, 채팅방에 사용자가 접근하면 메시지를 읽은 처리합니다.",
                "Supabase의 WebSocket 기반 RealTimeChannel을 활용해 채팅방에 포함된 사용자 간의 실시간 메시지 전송을 구현합니다."
            ],
            [
                "Cloudflare Stream의 URL에 스트림 ID를 파라미터로 제공하고, API Key를 Body에 담아 POST 요청을 보낸 후, 반환된 Stream 정보를 데이터베이스에 저장하여 스트리밍을 생성합니다.",
                "동적 라우터를 사용하여 URL 파라미터에 맞는 스트리밍 정보를 제공하고, 스트리밍 URL과 Key를 통해 실시간 방송을 진행합니다."
            ],
            [
                "세션을 통해 사용자의 정보를 UI에 제공하고, 사용자가 등록한 제품 리스트를 확인할 수 있습니다.",
                "SNS 로그인이 아니면 프로필 수정이 가능하며, 프로필 수정 페이지에서 패스워드를 입력하여 접근할 수 있습니다.",
                "기존 사용자의 정보를 제공하며, 사용자가 수정한 데이터만 변경되고, 입력하지 않은 데이터는 기존 상태를 유지합니다.",
                "이미지 변경 시 Cloudflare에서 새로운 이미지를 업로드하고, 그 URL을 데이터베이스에 저장합니다."
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
                "Spring Framework를 사용하여 서버 사이드 애플리케이션을 구현합니다.",
                "Axios와 Fetch API를 활용하여 클라이언트와 서버 간 비동기 통신을 처리합니다.",
                "RESTful API를 사용하여 실시간 데이터 업데이트를 관리합니다.",
                "MVC 패턴을 적용하여 애플리케이션의 구조를 효율적으로 분리합니다."
            ], 
            [
                "비동기 처리와 RESTful API를 통해 클라이언트 사이드 렌더링을 구현합니다.",
                "Modal을 사용하여 게시글의 CRUD 기능을 제공합니다.",
                "댓글과 대댓글의 CRUD 기능을 구현하며, 사용자 상호작용을 처리합니다.",
                "좋아요 및 조회수 기능을 추가하여 사용자 참여를 유도합니다."
            ], 
            [
                "그룹 및 프로젝트의 공지사항 리스트를 제공하며, 프로젝트의 이슈를 카테고리별로 요약하여 보여줍니다.",
                "Chart.js를 활용해 이슈 진척 상황을 시각적으로 표현하고 관리합니다."
            ], 
            [
                "Google Charts API를 사용하여 타임라인의 이슈를 시각화하고, 이슈 CRUD 기능을 제공합니다.",
                "타임라인을 통해 프로젝트 진행 상황을 관리합니다."
            ], 
            [
                "WebSocket을 통해 실시간 코드 공유와 참가자 리스트를 제공합니다.",
                "Java Compiler API를 활용하여 사용자가 입력한 Java 코드를 실시간으로 컴파일하고, 결과를 반환합니다."
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
        description: [["Fetch를 사용하여 영화 API 데이터를 불러와 영화 리스트를 제공합니다."], ["Route를 통해 상세 페이지로 이동하고, Fetch로 API 데이터를 불러와 제공됩니다."]],
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
                "Spring Boot와 React.js(TypeScript)를 활용해 게시판형 블로그 애플리케이션을 구축했습니다.",
                "Spring Boot로 RESTful API를 개발하고, MySQL을 이용해 데이터를 관리했습니다.",
                "React.js와 TypeScript를 사용하여 반응형 UI를 구현했습니다.",
                "Axios로 백엔드와 데이터를 연동하며, Spring Data JPA를 활용해 효율적인 데이터베이스 연동과 사용자 인증 시스템을 구현했습니다."
            ],
            [
                "JPA를 활용해 7일 이내에 작성된 게시물을 좋아요, 댓글, 조회수, 작성일 등을 기준으로 Top3 게시글을 조회합니다."
            ],
            [
                "전체 게시물을 페이지네이션을 통해 제공하며, 검색 시 생성된 검색 로그를 기반으로 인기 검색어를 제공합니다."
            ],
            [
               "JWT 토큰을 사용해 서명 검증으로 로그인 기능을 구현합니다."
            ],
            [
                "사용자가 작성한 게시물 리스트와 프로필을 제공합니다.",
                "사용자가 이름 및 프로필 이미지를 수정할 수 있습니다."
            ],
            [
                "게시글 상세 페이지에서는 게시글의 작성 및 수정 기능을 제공합니다."
            ],
            [
                "게시글마다 좋아요 및 댓글 리스트를 제공합니다."
            ]
        ],
        descriptionTitle: ["", "TOP-3", "게시글 & 인기 검색어", "로그인", "프로필", "상세 게시글", "상세 게시글"],
        github: "https://github.com/LJunsu/Spring-React-mysql",
        notion: "",
        site: ""
    },
    {
        id: 4, 
        name: "TodoList", 
        mainImage: "/images/todoList_1.PNG",
        skill: ["Next.js", "Typescript"],
        architecture: null,
        images: ["/images/todoList_1.PNG", "/images/todoList_2.PNG", "/images/todoList_3.PNG", "/images/todoList_4.PNG", "/images/todoList_vd.mp4"],
        description: [
            [
                "Todo의 생성과 삭제, 완료 여부를 제어할 수 있습니다.",
                "Todo의 리스트를 제공하며, 각 Todo의 완료 상태를 확인할 수 있습니다."
            ],
            [
                "클라이언트 컴포넌트에서 Action을 활용해 Todo 항목을 생성합니다.",
                "사용자 입력 데이터에 대해 Zod를 이용해 유효성 검사를 수행합니다.",
                "에러 처리 및 상태 관리를 위해 useActionState 훅을 사용하여 사용자에게 즉각적인 피드백을 제공합니다.",
                "root 페이지는 서버 컴포넌트로 구성되어 있으며, 생성 컴포넌트와 리스트 컴포넌트 간의 실시간 데이터 동기화를 위해 Zustand와 useFormStatus를 활용해 상태를 효율적으로 전달합니다."
            ],
            [
                "선택한 카테고리에 따라 해당 Todo 리스트를 필터링하여 화면에 출력합니다.",
                "사용자는 Todo 항목을 선택한 후 'Complete' 또는 'Delete' 버튼을 통해 상태를 변경할 수 있습니다.",
                "각 Todo의 상태는 체크 아이콘으로 시각적으로 구분되며, 카테고리별로 리스트를 쉽게 탐색할 수 있습니다."
            ],
            [
                "카테고리별로 Todo 데이터를 필터링한 후, 해당 항목 수를 기준으로 페이지네이션 로직을 동적으로 계산하여 렌더링합니다.",
                "전체 페이지 수를 limit 단위로 그룹화하여 2차원 배열로 관리하고, useState와 useEffect를 통해 현재 페이지 그룹을 동적으로 설정합니다.",
                "현재 페이지에 따라 해당 그룹을 계산하여 화면에 보여줄 페이지 번호들을 결정합니다.",
                "전체 페이지 번호를 limit 단위로 슬라이싱하여 페이지 그룹을 만들어 반환합니다."
            ],
            [
                "Todo 항목을 드래그하여 카테고리(Active, Completed)로 이동하면 상태를 변경할 수 있습니다.",
                "Todo 항목과 카테고리를 useRef를 통해 저장하고, 해당 값은 컴포넌트가 리렌더링되어도 유지되며, 빠르게 반응와 메모리 지속성을 가집니다.",
                "zustand를 통해 드래그 여부를 전역적으로 파악하며, 드래그 상태에 따라 스타일을 변화합니다.",
                "onDragStart, onDragOver, onDragLeave, onDrop 등 이벤트를 통해 드래그 동작을 구현합니다.",
            ]
        ],
        descriptionTitle: ["TodoList", "Todo 추가", "Todo 카테고리", "페이지네이션", "드래그 및 실행"],
        github: "https://github.com/LJunsu/Todo-List-NextJS-App",
        notion: "",
        site: ""
    },
        {
        id: 5, 
        name: "NewsAndStock", 
        mainImage: "/images/NewsAndStock.PNG",
        skill: ["Next.js", "Typescript"],
        architecture: null,
        images: ["/images/NewsAndStock.PNG"],
        description: [
            [

            ]
        ],
        descriptionTitle: ["newsAndStock"],
        github: "https://github.com/LJunsu/NewsAndStock",
        notion: "",
        site: ""
    }
];