// إنشاء العناصر المتحركة
function createFloatingElements() {
    const container = document.getElementById('animations-container');
    
    const roses = ['🌹', '🥀'];
    const hearts = ['❤️', '💕', '💖', '💗'];
    const balloons = ['🎈'];
    
    // إنشاء الورود
    setInterval(() => {
        const rose = document.createElement('div');
        rose.className = 'rose';
        rose.textContent = roses[Math.floor(Math.random() * roses.length)];
        rose.style.left = Math.random() * 100 + '%';
        rose.style.animationDuration = (8 + Math.random() * 4) + 's';
        rose.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(rose);
        
        setTimeout(() => rose.remove(), 14000);
    }, 800);
    
    // إنشاء القلوب
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (8 + Math.random() * 4) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 14000);
    }, 600);
    
    // إنشاء البالونات
    setInterval(() => {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.textContent = balloons[Math.floor(Math.random() * balloons.length)];
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.animationDuration = (10 + Math.random() * 5) + 's';
        balloon.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(balloon);
        
        setTimeout(() => balloon.remove(), 16000);
    }, 1000);
}

// عداد السنوات
function updateAge() {
    // يمكنك تغيير التاريخ هنا
    const birthDate = new Date('2010-01-01'); // مثال
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    document.getElementById('age').textContent = age;
}

// تشغيل الوظائف عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
    createFloatingElements();
    updateAge();
});