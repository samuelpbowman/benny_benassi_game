var x = 0;

function buttonMessage() {
    var msg;
    switch (x % 4) {
      case 0:
        msg = "Push Me";
        break;
      case 1:
        msg = "And Then Just Touch Me";
        break;
      case 2:
        msg = "Till I Can Get My";
        break;
      case 3:
        msg = "Satisfaction";
    }
    x += 1;
    return msg;
}