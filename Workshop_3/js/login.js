$(document).ready(function () {
    $("#btnSubmit").click(function () {
        var userName = $("#userName").val();
        var password = $("#password").val();

        validate(userName,password);
    })
})

function validate(userName,password) {
    $.ajax
    ({

    type: "GET",
    url: "http://localhost:3000/employees",
    dataType: 'json',
    async: false,
    data: '{"userName": "' + userName + '", "password" : "' + password + '"}',
    success:  function (data, textStatus, jqXHR) {
        alert('User: ' + data.user + ' authenticated:' +  data.authentication);}

    })
}















