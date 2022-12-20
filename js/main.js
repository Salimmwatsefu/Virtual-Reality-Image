pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "i.jpeg",
    "autoLoad": true,
    "autoRotate": -4,
});
document.getElementById('music-toggle').addEventListener('click', function() {
    document.getElementById("myAudio").play();
});