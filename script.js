document.getElementById('submit-btn').addEventListener('click', function() {
    const videoUrl = document.getElementById('video-url').value;
    if (videoUrl) {
        alert(`تم إدخال رابط الفيديو: ${videoUrl}`);
        // هنا يمكنك إضافة الكود الخاص بتقسيم الفيديو وترجمته
    } else {
        alert('يرجى إدخال رابط الفيديو.');
    }
});

