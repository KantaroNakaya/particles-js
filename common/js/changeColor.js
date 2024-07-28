document.getElementById('change-bg-button01').addEventListener('click', function() {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#86a10045';
    document.body.style.opacity = '1.0';
});
document.getElementById('change-bg-button02').addEventListener('click', function() {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#00a13345';
    document.body.style.opacity = '1.0';
});
document.getElementById('change-bg-button03').addEventListener('click', function() {
    document.body.style.backgroundImage = 'url("common/img/bg_01.png")';
    document.body.style.backgroundColor = 'rgba(255,255,255,0.8)';
    document.body.style.backgroundBlendMode = 'lighten';
});