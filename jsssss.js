$(document).ready(function () {
    var stt = 0;
    var endImg = $("img.slide:last").attr("idx");

    $("button").click(function () {
        stt = $(this).attr("idx");

        changeImg(stt);
    });

    $("#next").click(function () {
        if (++stt > endImg) {
            stt = 0;
        }

        changeImg(stt);
    });

    $("#prev").click(function () {
        if (--stt < 0) {
            stt = endImg;
        }

        changeImg(stt);
    });

    var interval;
    var timer = function () {
        interval = setInterval(function () {
            $("#next").click();
        }, 5000);
    };
    timer();
});


// Ẩn tất cả slide hình ảnh và hiển thị hình ảnh có chỉ mục "stt"
// Xóa tất cả nút đang hoạt động và đặt "hoạt động" cho nút có chỉ mục "stt"
// Đặt lại bộ hẹn giờ khi thay đổi hình ảnh
function changeImg(stt) {
    $("img.slide").hide();
    $("img.slide").eq(stt).fadeIn(500);
    $("button").removeClass("active");
    $("button").eq(stt).addClass("active");

    clearInterval(interval);
    timer();
};