document.getElementById('submit-btn').addEventListener('click', function() {
    const videoUrl = document.getElementById('video-url').value;
    const videoId = extractVideoID(videoUrl);
    
    if (videoId) {
        // عرض الفيديو
        const videoContainer = document.getElementById('video-container');
        videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
    } else {
        alert('يرجى إدخال رابط فيديو يوتيوب صالح.');
    }
});

// دالة لاستخراج معرف الفيديو من رابط يوتيوب
function extractVideoID(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
