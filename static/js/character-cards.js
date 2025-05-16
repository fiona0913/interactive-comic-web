// Character Cards JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有角色卡片
    const characterCards = document.querySelectorAll('.character-card');
    
    // 为每个卡片添加点击事件监听器
    characterCards.forEach(card => {
        card.addEventListener('click', function() {
            // 切换翻转状态
            this.classList.toggle('flipped');
            
            // 调试信息
            console.log('Card clicked: ', this);
            console.log('Card has flipped class: ', this.classList.contains('flipped'));
        });
    });
}); 