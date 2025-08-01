// 우측 추천 영상 불러오기
async function loadRecommendations(currentVideoId) {
    const res = await fetch('./videos.json');
    const videos = await res.json();

    const recommendations = videos.filter((v) => v.id !== currentVideoId);

    const container = document.getElementById('recommendationsList');
    container.innerHTML = ''; // 초기화

    recommendations.forEach((video) => {
        const card = document.createElement('div');
        card.className = 'recommendation-card';
        card.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}" class="thumbnail" />
         
            <div class="recommendation-info">
                <h6>${video.title}</h6>
                <p>${video.channelName}</p>
                <p>${video.views} 조회수</p>
            </div>
        `;
        card.addEventListener('click', () => {
            window.location.href = `videoDetail.html?id=${video.id}`;
        });
        container.appendChild(card);
    });
}

// 영상 불러오기
async function loadVideoDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('id');

    const res = await fetch('./videos.json');
    const videos = await res.json();
    const video = videos.find((v) => v.id == videoId);
    if (!video) return;

    // 좋아요/싫어요 상태 변수
    let liked = false;
    let disliked = false;

    // 댓글 리스트 복사본 (화면에서만 사용)
    let comments = video.commentsList ? [...video.commentsList] : [];

    document.getElementById('videoPlayer').src = video.embedUrl;
    document.getElementById('videoMeta').innerHTML = `
        <h3>${video.title}</h3>
      
        <div class="channel-info-bar">
            <div class="channel-owner">
                <a href="#" class="channel-img">
                    <img src="${video.profileImg}" alt="${video.channelName}" />
                </a>
                <div class="channel-name">
                    <p style="font-size:16px">${video.channelName}</p>
                    <p style="font-size:12px; color:grey;">구독자 ${video.subscribeCount}</p>
                </div>
                <a class="btn btn-light rounded-pill subscribe-button" href="#" style="font-size:14px">구독</a>
            </div>

            <div class="channel-actions">
                <button class="likeButton">
                    <img src="./icons/Like.svg" alt="좋아요" style="width: 20px; height: 20px; ">
                    <span style="font-size:15px; margin-right:4px">${video.likes}</span>
                    
                </button>
                <button class="dislikeButton">
                    <img src="./icons/DisLike.svg" alt="싫어요" style="width: 20px; height: 20px; ">
                </button>
                <button class="shareButton">
                    <img src="./icons/Share.svg" alt="공유" style="width: 20px; height: 20px; ">
                    <span style="font-size:15px; margin-right:4px">공유</span>
                </button>
                <button class="moreButton">
                    <img src="./icons/More.svg" alt="더보기" style="width: 20px; height: 20px;     vertical-align: middle;">
                </button>
        
            </div>
        </div>
      
        <!--영상 조회수 기간 설명-->
        <div class="video-info">
            <p>조회수 ${video.views} &nbsp; ${video.uploadDate}</p>
            <p>${video.videoDetail}</p>
        </div>
  
    `;

    function renderComments() {
        document.getElementById('commentsList').innerHTML = `
            <h5>댓글 ${comments.length}개</h5>
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:16px;">
                <img src="./imgs/my_profile.gif"
                    
                " alt="내 프로필" style="width:36px; height:36px; border-radius:50%; object-fit:cover;">
                <input id="commentInput" type="text" placeholder="댓글 추가..." style="flex:1; padding:8px; background-color: transparent; color:#fff;">
                <button id="addCommentBtn" class="btn btn-blue rounded-pill" style="height:36px;">등록</button>
            </div>
            <div id="commentsArea">
                ${
                    comments.length
                        ? comments
                              .map(
                                  (c) => `
                            <div style="display:flex; align-items:flex-start; gap:10px; margin-bottom:14px;">
                                <img src="${c.profileImg}" alt="${c.username}" style="width:36px; height:36px; border-radius:50%; object-fit:cover;">
                                <div>
                                    <strong style="color:#fff;">${c.username}</strong><br>
                                    <span style="color:#ccc;">${c.commentText}</span>
                                </div>
                            </div>
                        `
                              )
                              .join('')
                        : '<p style="color:#aaa;">댓글이 없습니다.</p>'
                }
            </div>
        `;
        // 댓글 등록 이벤트
        document.getElementById('addCommentBtn').onclick = () => {
            const input = document.getElementById('commentInput');
            const text = input.value.trim();
            if (text) {
                comments.unshift({
                    username: 'User', // 임시 닉네임
                    commentText: text,
                    profileImg: './imgs/my_profile.gif', // 내 프로필 이미지
                });
                input.value = '';
                renderComments();
            }
        };
    }
    renderComments();

    // 추천 영상도 로드
    loadRecommendations(videoId);
}

loadVideoDetail();
