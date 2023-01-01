let sonar = 0
basic.forever(function () {
    if (sonar > 2 && sonar < 30) {
        cuteBot.motors(0, 0)
        music.playMelody("A F A F A E A E ", 120)
        basic.pause(2000)
        if (randint(1, 10) > 5) {
            cuteBot.motors(randint(-50, -100), 0)
            basic.pause(500)
        } else {
            cuteBot.moveTime(cuteBot.Direction.right, randint(-50, -100), 0.5)
        }
    } else {
        cuteBot.motors(50, 50)
    }
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
})
