$(document).ready(function(){
  $("dbell-controller").remove();

  function ringDoorbell() {
    var doorbell = new Audio('media/doorbell.mp3');
    doorbell.play();
  }

  $("#ringDoorbell").on("click", function(){
    ringDoorbell();
  });

  $(document).on("keypress", function(event){
    if(event.key === "d"){
      ringDoorbell();
    }
  });
});
