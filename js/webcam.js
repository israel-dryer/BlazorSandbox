function startVideo(src) {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then((stream) => {
            let video = document.getElementById(src);
            video.srcObject = stream;
            video.onloadedmetadata = (_) => video.onplay;
            video.style.transform = "scaleX(-1)";
        });
    }
}