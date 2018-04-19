(function(){

  var $pic = $("#pic");

  $(document).keypress((e) => {
    e.preventDefault();
    var key = e.which + "";
    console.log("key:", key);
    // w=119 a=97 s=115 f=102 g=103
    if (key === "119") {
      var catSound = document.getElementById("catSound");
      catSound.play()
      //w = cat
      console.log('w = cat');
      $("#pic").attr("src", "img/cat.jpg");

    } else if(key === "97") {
      var duckSound = document.getElementById("duckSound");
      duckSound.play()
      console.log('a = duck');
      //a = duck
      $("#pic").attr("src", "img/duck.jpeg");
    } else if(key === "115") {
      var dogSound = document.getElementById("dogSound");
      dogSound.play()
      console.log('s = dog');
      //s = dog
      $("#pic").attr("src", "img/dog.jpg");
    } else if (key === "32") {
      var pigSound = document.getElementById("pigSound");
      pigSound.play()
      console.log('space = pig');
      //space = pig
      $("#pic").attr("src", "img/pig.png");
    }

    // if(key === "103") {
    //   //g = chat
    //   $pic.attr('src', 'img/cat.jpg');
    // }

  })

})()
