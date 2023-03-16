$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    const taskList = $("#taskList");
    const taskDescription = $("#txtTaskDescription").val();

    const newTask = $(`<li>${taskDescription}</li>`);
    newTask.appendTo(taskList);

    $("li").click(function () {
      $(this).addClass("taskCompleted");
    });

    $("#txtTaskDescription").val("");
  });
});
