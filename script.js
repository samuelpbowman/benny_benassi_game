var theCount = 0;

function buttonMessage() {
    var msg;
    switch (theCount % 4) {
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
        break;
    }
    theCount += 1;
    return msg;
}