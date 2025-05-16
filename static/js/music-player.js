// Music Player JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    let isPlaying = false;

    // 设置音乐音量
    bgMusic.volume = 0.5;

    // 点击按钮切换音乐播放状态
    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            bgMusic.pause();
            musicToggle.classList.remove('playing');
        } else {
            bgMusic.play();
            musicToggle.classList.add('playing');
        }
        isPlaying = !isPlaying;
    });

    // 当音乐播放结束时重新开始播放
    bgMusic.addEventListener('ended', function() {
        bgMusic.play();
    });

    // 添加键盘快捷键控制音乐
    document.addEventListener('keydown', function(event) {
        // 按 M 键切换音乐播放状态
        if (event.key.toLowerCase() === 'm') {
            musicToggle.click();
        }
    });
}); 