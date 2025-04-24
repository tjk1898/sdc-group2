// 获取 content1、content2 和 content3 元素
const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
const content3 = document.querySelector('.content3');

// 将所有内容元素存储在一个数组中
const contents = [content1, content2, content3];

// 当前显示的内容索引
let currentIndex = 0;

// 显示指定索引的内容，并隐藏其他内容
function showContent(index) {
    contents.forEach((content, i) => {
        if (i === index) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
}

// 初始显示第一个内容
showContent(currentIndex);

// 每隔 5 秒切换一次内容
setInterval(() => {
    // 计算下一个索引
    currentIndex = (currentIndex + 1) % contents.length;
    // 显示下一个内容
    showContent(currentIndex);
}, 5000);