// servos.P0.setAngle(i * 20)
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    i = i - 1
    if (i < 0) {
        i = 0
    }
    basic.showNumber(i)
})
// servos.P0.setAngle(i * 20)
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    i = i + 1
    if (i > 9) {
        i = 9
    }
    basic.showNumber(i)
})
let i = 0
i = 0
servos.P0.setPulse(1001)
servos.P0.setRange(0, 180)
for (let index = 0; index < 8; index++) {
    servos.P0.setAngle(0)
    basic.pause(500)
    basic.showIcon(IconNames.Heart)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    servos.P0.setAngle(90)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
