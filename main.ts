basic.forever(function () {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() < 45 || input.compassHeading() > 315) {
        music.playMelody("G B A E C5 C F D ", 301)
    } else {
        music.stopMelody(MelodyStopOptions.All)
    }
})
basic.forever(function () {
	
})
