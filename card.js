window.onload = function () {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            removeActiveClasses();
            panel.classList.add('active');

            // 如果是第五个图片，5秒后跳转
            if (panel === panels[4]) {
                setTimeout(() => {
                    window.location.href = 'index1.html';
                }, 2000); 
            }
        });

        const messageInput = panel.querySelector('.message-board input');
        const submitButton = panel.querySelector('.message-board button');
        const messagesDiv = panel.querySelector('.messages');

        submitButton.addEventListener('click', () => {
            const message = messageInput.value;
            if (message) {
                const messageElement = document.createElement('p');
                messageElement.textContent = message;
                messagesDiv.appendChild(messageElement);
                messageInput.value = '';
            }
        });
    });

    function removeActiveClasses() {
        panels.forEach(panel => {
            panel.classList.remove('active');
        });
    }

    const showMoreBtn = document.getElementById('show-more-btn');
    const cardWalls = document.querySelectorAll('.card-wall');
    showMoreBtn.addEventListener('click', () => {
        cardWalls.forEach(cardWall => {
            cardWall.style.display = 'flex';
        });
        const lastCardWall = cardWalls[cardWalls.length - 1];
        window.scrollTo({
            top: lastCardWall.offsetTop,
            behavior: 'smooth'
        });
    });

    window.onload = function () {
        const panels = document.querySelectorAll('.panel');
        panels.forEach(panel => {
            panel.addEventListener('click', () => {
                removeActiveClasses();
                panel.classList.add('active');
    
                // 如果是第五个图片，5秒后跳转
                if (panel === panels[4]) {
                    setTimeout(() => {
                        window.location.href = 'index1.html';
                    }, 2000); 
                }
            });
    
            const messageInput = panel.querySelector('.message-board input');
            const submitButton = panel.querySelector('.message-board button');
            const messagesDiv = panel.querySelector('.messages');
    
            submitButton.addEventListener('click', () => {
                const message = messageInput.value;
                if (message) {
                    const messageElement = document.createElement('p');
                    messageElement.textContent = message;
                    messagesDiv.appendChild(messageElement);
                    messageInput.value = '';
                }
            });
        });
    
        function removeActiveClasses() {
            panels.forEach(panel => {
                panel.classList.remove('active');
            });
        }
    
        const showMoreBtn = document.getElementById('show-more-btn');
        const cardWalls = document.querySelectorAll('.card-wall');
        showMoreBtn.addEventListener('click', () => {
            cardWalls.forEach(cardWall => {
                cardWall.style.display = 'flex';
            });
            const lastCardWall = cardWalls[cardWalls.length - 1];
            window.scrollTo({
                top: lastCardWall.offsetTop,
                behavior: 'smooth'
            });
        });
    
        // 整面滚动效果
        const sections = [document.querySelector('.container'), ...cardWalls];
        let currentSectionIndex = 0;
    
        window.addEventListener('wheel', function (e) {
            e.preventDefault();
            if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
                currentSectionIndex++;
            } else if (e.deltaY < 0 && currentSectionIndex > 0) {
                currentSectionIndex--;
            }
    
            const targetSection = sections[currentSectionIndex];
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    };

    // 节流函数
    function throttle(func, time) {
        let timer = null;
        return function (...args) {
            if (!timer) {
                func.apply(this, args);
                timer = setTimeout(() => {
                    timer = null;
                }, time);
            }
        };
    }

    // 滚动函数
    function smoothScrollTo(targetTop) {
        const startTop = window.scrollY;
        const distance = targetTop - startTop;
        const duration = 500; 
        let startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const scrollTop = startTop + distance * easeInOutQuad(progress / duration);
            window.scrollTo(0, scrollTop);
            if (progress < duration) {
                requestAnimationFrame(step);
            } else {
                isScrolling = false;
            }
        }

        isScrolling = true;
        requestAnimationFrame(step);
    }

    // 缓动函数
    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    window.addEventListener('wheel', throttle(function (e) {
        if (isScrolling) return;
        e.preventDefault();
        if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
        } else if (e.deltaY < 0 && currentSectionIndex > 0) {
            currentSectionIndex--;
        }

        const targetSection = sections[currentSectionIndex];
        smoothScrollTo(targetSection.offsetTop);
    }, throttleTime));
}
showMoreBtn.addEventListener('click', () => {
    cardWalls.forEach(cardWall => {
        cardWall.style.display = 'flex';
    });
    const lastCardWall = cardWalls[cardWalls.length - 1];
    window.scrollTo({
        top: lastCardWall.offsetTop,
        behavior: 'smooth'
    });
    // 隐藏按钮
    showMoreBtn.style.display = 'none';
});
// 获取弹幕容器
const danmuContainer = document.createElement('div');
danmuContainer.classList.add('danmu-container');
document.body.appendChild(danmuContainer);

// 生成弹幕函数
function createDanmu(text) {
    const danmu = document.createElement('div');
    danmu.classList.add('danmu');
    danmu.textContent = text;

    // 设置弹幕的随机垂直位置
    const randomTop = Math.random() * (window.innerHeight - 20);
    danmu.style.top = `${randomTop}px`;

    // 设置弹幕的随机动画时长
    const randomDuration = Math.random() * 10 + 5; // 5 - 15 秒
    danmu.style.animationDuration = `${randomDuration}s`;

    // 将弹幕添加到容器中
    danmuContainer.appendChild(danmu);

    // 动画结束后移除弹幕
    danmu.addEventListener('animationend', () => {
        danmuContainer.removeChild(danmu);
    });
}

// 示例：每隔 2 秒生成一条弹幕
setInterval(() => {
    const randomText = `弹幕消息 ${Math.floor(Math.random() * 100)}`;
    createDanmu(randomText);
}, 2000);
