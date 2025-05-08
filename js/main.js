// 复制到剪贴板功能
function copyToClipboard(text) {
    // 创建临时输入框
    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.opacity = 0;
    input.value = text;
    document.body.appendChild(input);

    // 选择并复制文本
    input.select();
    document.execCommand('copy');

    // 移除临时输入框
    document.body.removeChild(input);

    // 显示复制成功提示
    showToast('复制成功！');
}

// 显示提示信息
function showToast(message) {
    // 创建提示元素
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    // 设置样式
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    toast.style.color = 'white';
    toast.style.padding = '10px 20px';
    toast.style.borderRadius = '4px';
    toast.style.zIndex = '1000';

    // 添加到页面
    document.body.appendChild(toast);

    // 2秒后移除提示
    setTimeout(() => {
        document.body.removeChild(toast);
    }, 2000);
}

// 搜索功能
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-btn');

    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                // 这里可以添加实际的搜索逻辑
                console.log('搜索:', searchTerm);
            }
        });

        // 回车键触发搜索
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }
}); 