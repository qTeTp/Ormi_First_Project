# [Ormi_First_Project(YouTube Clone)](https://qtetp.github.io/Ormi_First_Project/html/mainPage.html)

## 👩‍💻 프로젝트 개요

- 진행 기간
    - 2025년 07월 21일(월) ~ 2025년 08월 05일(화)
- 요구사항
    1. 메인 화면
        - 상단 네비게이션 바 (로고, 검색창, 사용자 아이콘)
            1. 로고 클릭시 홈페이지 상단 리로드
            2. 검색창에서 키워드로 해당 검색 가능 (추가 구현 사항으로, 검색 기능은 구현되지 않아도 됨)
            3. 사용자 아이콘 클릭시 계정 정보 (표시된 UI 전부 구현, 사용자 <정보 UI 클릭시 특정 링크로의 연결은 구현되지 않아도 됨)
        - 좌측 사이드바 (홈, 구독 아이콘 포함)
            1. 홈 클릭시 홈페이지 상단 리로드
            2. 구독 아이콘 클릭시 구독 관련 페이지 (실제 유투브상의 구독 페이지와 같은 UI 로 구현)
        - 영상 썸네일 카드 영역 카드 8개 이상
        - 썸네일, 영상 제목, 채널명, 조회수, 업로드 날짜 표시
        - 마우스 호버 시 카드 애니메이션 (확대 등)
    2. 영상 상세 페이지 구현 및 URL 구조 설계
        - 각 영상 클릭 시 video.html?videoId=1 형식의 페이지로 이동
        - JS로 videoId 파라미터 읽기
        - 상세 페이지에는 다음 정보 표시
            1. 영상 iframe (YouTube 임베드)
            2. 제목, 채널명, 조회수, 업로드일
            3. 설명 영역
    3. 사용자 인터랙션 (아래 기능 중 2가지 이상 구현)
        1. 댓글 작성 기능 (로컬 저장 X 가능)
        2. 좋아요 / 싫어요 버튼 상태 반영
        3. 우측 재생 목록 반응형 디자인
- 시연 영상
- 프로젝트 타임라인
    
    <img width="1527" height="537" alt="Image" src="https://github.com/user-attachments/assets/f596301d-9907-42a0-8d30-58f88ed14482" />
    
- UI 구성도
    
    <img width="1421" height="877" alt="Image" src="https://github.com/user-attachments/assets/59364421-80c6-4de4-9d71-dacf2d890637" />

    <img width="1415" height="670" alt="Image" src="https://github.com/user-attachments/assets/e60ddbc6-9345-4e4a-8628-5eb443348904" />
    

## 🔍 주요 기능

- 좌/우측 동적 사이드바

<img width="1920" height="1112" alt="Image" src="https://github.com/user-attachments/assets/0068a408-2ca5-4550-8cb8-9ee2bf9d9e1d" />

- 영상 썸네일 호버 시 이미지 확대

<img width="1347" height="679" alt="Image" src="https://github.com/user-attachments/assets/7a0a651e-f896-498e-8726-75e22eb90d96" />

- 구독 페이지

<img width="1920" height="945" alt="Image" src="https://github.com/user-attachments/assets/952ab562-2a3e-4c3c-ba35-471ef11a485a" />

- iframe 임베딩

<img width="1920" height="1518" alt="Image" src="https://github.com/user-attachments/assets/d45af286-a244-4a49-9bee-8f60028041d9" />

- 영상 페이지 추천 영상 반응형

<img width="1041" height="1725" alt="Image" src="https://github.com/user-attachments/assets/cc75454c-479f-4fe8-b659-5f2afb8129db" />

- 좋아요 구현

<img width="1385" height="359" alt="Image" src="https://github.com/user-attachments/assets/30b26465-eb74-4383-8ee3-8053ba476ea6" />

- 댓글 기능 구현

<img width="1340" height="270" alt="Image" src="https://github.com/user-attachments/assets/5c0885d8-6e1c-4b6e-8db6-72ed23098a1c" />

## 🧱 폴더 구조

```
/Ormi_First_Project/
├── html/
│ ├── mainPage.html
│ ├── navBar.html
│ ├── subscribeGrid.html
│ ├── subscribePage.html
│ ├── videoDetail.html
│ ├── videoGrid.html
│ └── videoPage.html
├── css/
│ ├── mainPage.css
│ ├── navBar.css
│ ├── reset.css
│ ├── videoDetail.css
│ └── videoGrid.css
├── js/
│ ├── mainPage.js
│ ├── navBar.js
│ ├── subscribeGrid.js
│ ├── subscribePage.js
│ ├── videoDetail.js
│ ├── videoGrid.js
│ └── videoPage.js
├── json/
│ └── videos.json
├── icons/
├── imgs/
├── favicon.ico
└── README.md
```
## 🎯 문제 상황 및 해결 방법

- 배포 시 부트스트랩이 적용되지 않음
    - 부트스트랩을 네비바엔 적용하여 개발했었는데 배포 후 적용되지 않는 문제 발생
    - 해결 : 부트스트랩 경로 선언 코드를 상단으로 올려 해결
    
    ```
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
            <link rel="shortcut icon" type="image/x-icon" href="favicon.ico?" />
            <link rel="stylesheet" href="css/navBar.css" />
            <link rel="stylesheet" href="css/reset.css" />
    ```
    
- 배포 시 경로 문제
    - 로컬에서 개발시에 상대 경로로 적용해서 모든 파일을 관리했는데 깃허브 배포 시엔 절대 경로를 사용하여 경로가 모두 틀어짐
    - 해결 : 배포 시엔 레포지토리명으로 절대경로 base 값을 넣고 개발 시엔 현위치를 base 값으로 넣어서 해결
    
    ```
            <!-- 배포 시 -->
            <base href="/Ormi_First_Project/" />
            <!-- 개발 시 -->
            <base href="/" />
    ```
