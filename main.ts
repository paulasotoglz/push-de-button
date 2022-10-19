controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Randompick == 0) {
        info.changeScoreBy(1)
    }
    generate()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Randompick == 0) {
        info.changeScoreBy(1)
    }
    generate()
})
function generate () {
    Randompick = randint(0, 1)
    if (Randompick == 0) {
        mySprite.sayText("Push A")
    } else {
        mySprite.sayText("Push B")
    }
}
let Randompick = 0
let mySprite: Sprite = null
game.splash("\"Push A or B as directed\"")
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
info.startCountdown(20)
