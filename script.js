const fileInput = document.getElementById('file-upload');
const videoPreview = document.getElementById('video-preview');
const videoElement = document.getElementById('video');

fileInput.addEventListener('change', function() {
    const file = fileInput.files[0];
    if (file) {
        const videoURL = URL.createObjectURL(file);
        videoElement.src = videoURL;
        videoPreview.style.display = 'block';
    } else {
        videoPreview.style.display = 'none';
    }
});

document.getElementById('process-video').addEventListener('click', function() {
    alert('عملية معالجة الفيديو ستتم هنا.');
});

// إضافة معالج لإرسال النموذج
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('تم إرسال الرسالة! شكراً لك.');
});
