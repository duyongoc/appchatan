var socket = io("http://localhost:3000");


socket.on("server_send_list", function(data) {
    $("#ds").html('');

    data.map(function(data, index) {
        $("#ds").append('<div class = "hocvien"> ' + index + " | " + data.NAME + ' </div> <br>');
    });
});

$(document).ready(function() {

    $("#btnRegister").click(function() {
        socket.emit("send_student_information", {
            name: $("#txtHoTen").val(),
            email: $("#txtEmail").val(),
            phone: $("#txtSDT").val(),
        });
    });
});