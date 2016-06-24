(function(window) {

  function badGame(){
    window.alert("Game not found! redirecting you back to game list.");
    window.location = "/";
  }

  var game_id = window.location.hash.split("#").pop();

  var ref = new Firebase("https://spawn-hero-2.firebaseio.com/games").child(game_id);

  ref.on("value", function(snapshot) {
    var game_data = snapshot.val();

    if(game_data == null){
      badGame();
    } else {
      eval(game_data.code); // danger -_-
      lime.embed ("openfl-content", 920, 680, "FFFFFF");
    }

  }, badGame );

}(window));
