$(() => {
  // after DOM is ready, this code will run
  console.log("it's fine!");

  const socket = io();
  let msg = "";

  $("form").submit((e) => {
    e.preventDefault();
    msg = $("#msg").val();
    if (msg.length > 0) {
      socket.emit("msg", msg);
      $("#msg").val("");
    }
  });

  socket.on("msg", (msg) => {
    $("#messages").append(`<li class="list-group-item">${msg}</li>`);
  });
});
