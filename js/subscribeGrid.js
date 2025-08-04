const container = document.querySelector('.video-grid');

// 페치로 불러옴
fetch('json/Videos.json')
    .then((res) => res.json())
    .then((videos) => {
        const subscribeVideos = videos.filter((video) => video.channelName === '코딩애플');
        subscribeVideos.forEach((video) => {
            const card = document.createElement('div');
            card.className = 'video-card';

            card.innerHTML = `
                <a href="videoPage.html?id=${video.id}">
                    <img src="${video.thumbnail}" class="thumbnail" />
                    <div class="video-info">
                        <img src="${video.profileImg}" class="channel-icon" />
                        <div class="video-text">
                            <h6>${video.title}</h6>
                            <p>${video.channelName}</p>
                            <p>조회수 ${video.views} • ${video.uploadDate}</p>
                        </div>
                    </div>
                </a>
            `;
            container.appendChild(card);
        });
    })
    .catch((err) => console.error('fetch error:', err));
