


document.addEventListener('DOMContentLoaded', function() {
    var isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

    if (!isMobile) {
        document.addEventListener('mousemove', function(event) {
            // 마우스의 위치 값 가져오기
            var mouseX = event.clientX;
            var mouseY = event.clientY;

            // 배경 이미지의 위치 조정
            var body = document.querySelector('body');
            var bgX = -(mouseX / body.clientWidth * 100 - 60); // 가로 위치 계산
            var bgY = -(mouseY / body.clientHeight * 100 - 60); // 세로 위치 계산
            body.style.backgroundPosition = `${bgX}% ${bgY}%`;
        });
    }
});


