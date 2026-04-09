enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const SelectableCharacter = SpriteKind.create()
    export const Background = SpriteKind.create()
    export const npcs = SpriteKind.create()
    export const ship = SpriteKind.create()
    export const npcs1 = SpriteKind.create()
    export const npcs2 = SpriteKind.create()
    export const npcs3 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite4, location3) {
    level += 1
    runlevel(level)
    tiles.placeOnTile(sprite4, tiles.getTileLocation(0, 3))
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, sprites.jewels.jewel6)) {
        tiles.setTileAt(location, assets.tile`myTile5`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npcs, function (sprite, otherSprite) {
    otherSprite.sayText(textlist2[0])
})
function show_character_picker2 () {
    let gravity: number;
scene.centerCameraAt(80, 60)
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        gravity = 0
        value.ay = gravity
        value.setFlag(SpriteFlag.Invisible, true)
    }
    showCharacterScreen = true
    corni = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 4 b 
        b d d c d 5 5 b 5 4 4 4 4 4 b . 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.SelectableCharacter)
    corni.z = 101
    corni.setPosition(32, 67)
    textSprite = textsprite.create("Choose Your Character:", 15, 1)
    textSprite.z = 101
    textSprite.setPosition(80, 29)
    giuseppe = sprites.create(assets.image`sha5a`, SpriteKind.SelectableCharacter)
    giuseppe.z = 101
    giuseppe.setPosition(73, 67)
    moo = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.SelectableCharacter)
    moo.z = 101
    moo.setPosition(126, 67)
    ourCharacters = [corni, giuseppe, moo]
    current_character_index = 1
    character_selector_box = sprites.create(img`
        ffffffffffffffffffffffffffffffffffff
        fccccccccccccccccccccccccccccccccccf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fc................................cf
        fccccccccccccccccccccccccccccccccccf
        ffffffffffffffffffffffffffffffffffff
        `, SpriteKind.Background)
    character_selector_box.z = 101
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (showCharacterScreen) {
        thePlayer = sprites.create(currently_selected_character.image, SpriteKind.Player)
        thePlayer.setFlag(SpriteFlag.Invisible, false)
        scene.cameraFollowSprite(thePlayer)
        for (let value2 of sprites.allOfKind(SpriteKind.SelectableCharacter)) {
            value2.destroy()
        }
        for (let value3 of sprites.allOfKind(SpriteKind.Background)) {
            value3.destroy()
        }
        for (let value4 of sprites.allOfKind(SpriteKind.Text)) {
            value4.destroy()
        }
        controller.moveSprite(thePlayer, 100, 0)
        thePlayer.ay = 200
        showCharacterScreen = false
    } else if (thePlayer.vy == 0) {
        thePlayer.vy = -120
    }
    if (name == false) {
        game.splash(game.askForString("What's your name?"))
        name = true
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    if (dialog2 == false) {
        story.startCutscene(function () {
            controller.moveSprite(sprite, 0, 0)
            story.printCharacterText("Six stones . One mission . No mistakes", "Cap")
            story.printCharacterText("I've mapped the timelines - we can grab them before things go sideways", "iron man")
            story.printCharacterText("Time travel and stealing cosmic rocks ? I like this", "Thor")
            story.printCharacterText("Just don't mess up the timeline beyond repair ", "Cap")
            story.printCharacterText("Focus. Tony and I take the mind and time stones . Thor you,re on the power stone , and you take the space and mind stones .", "Cap")
            story.printCharacterText("Consider it done (;", "You")
            story.printCharacterText("Finally ,a task worthy of my strength", "Thor")
            story.printCharacterText("Try not to break the universe, point break", "Ironman")
            story.printCharacterText("We regroup once we have them all . No detours", "cap")
            story.printCharacterText("You have my word.", "Thor")
            story.printCharacterText("Bet.", "You")
            story.printCharacterText("That's exactly what I was afraid of.", "Ironman")
            controller.moveSprite(sprite, 100, 0)
        })
        dialog2 = true
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (showCharacterScreen) {
        current_character_index = (current_character_index + (ourCharacters.length - 1)) % ourCharacters.length
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral2, function (sprite, location) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 3))
    game.splash("oops")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npcs1, function (sprite, otherSprite) {
    otherSprite.sayText(textlist2[1])
})
function runlevel (level: number) {
    if (level == 1) {
        effects.starField.startScreenEffect()
        tiles.setCurrentTilemap(tilemap`intro`)
        scene.setBackgroundImage(assets.image`bg1`)
    } else if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level12`)
        scene.setBackgroundImage(assets.image`bg1`)
        npc = sprites.create(list[0], SpriteKind.npcs)
        tiles.placeOnTile(npc, tiles.getTileLocation(5, 7))
        npc = sprites.create(list[1], SpriteKind.npcs1)
        tiles.placeOnTile(npc, tiles.getTileLocation(7, 7))
        npc = sprites.create(list[2], SpriteKind.npcs2)
        tiles.placeOnTile(npc, tiles.getTileLocation(9, 7))
    } else if (level == 3) {
        sprites.destroyAllSpritesOfKind(SpriteKind.npcs2)
        sprites.destroyAllSpritesOfKind(SpriteKind.npcs1)
        sprites.destroyAllSpritesOfKind(SpriteKind.npcs)
        scene.setBackgroundImage(assets.image`bg1`)
        tiles.setCurrentTilemap(tilemap`level1`)
        npc = sprites.create(list[3], SpriteKind.npcs3)
        tiles.placeOnTile(npc, tiles.getTileLocation(29, 5))
    } else if (level == 4) {
        tiles.setCurrentTilemap(tilemap`level13`)
        scene.setBackgroundImage(assets.image`bg1`)
        sprites.destroyAllSpritesOfKind(SpriteKind.npcs)
        sprites.destroyAllSpritesOfKind(SpriteKind.npcs1)
        sprites.destroyAllSpritesOfKind(SpriteKind.npcs2)
        spaceship = sprites.create(img`
            8 8 . . . . . . . . . . . . . . 
            8 8 8 . . . . . . . . . . . . . 
            8 8 8 8 . . . . . . . . . . . . 
            8 8 8 f . . . . . . . . . . . . 
            8 8 8 f 8 . . . . . . . . . . . 
            8 8 a f 8 c . . . . . . . . . . 
            a a a c 3 c 8 8 . . . . . . . . 
            a a 3 c 3 c 3 8 8 f c f c c c c 
            3 3 3 a 3 a 1 1 3 f 3 f b d d d 
            3 3 3 a 1 a a a . . . . . . . . 
            3 3 3 f a a . . . . . . . . . . 
            3 1 1 f a . . . . . . . . . . . 
            1 3 3 a . . . . . . . . . . . . 
            3 3 a a . . . . . . . . . . . . 
            a a a . . . . . . . . . . . . . 
            a a . . . . . . . . . . . . . . 
            `, SpriteKind.ship)
        spaceship.left = 5
        controller.moveSprite(spaceship, 0, 100)
        spaceship.setStayInScreen(true)
    } else if (level == 5) {
        sprites.destroy(asteroeid)
        sprites.destroyAllSpritesOfKind(SpriteKind.ship)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        scene.setBackgroundImage(assets.image`bg1`)
        tiles.setCurrentTilemap(tilemap`level15`)
        tiles.placeOnTile(sprites.allOfKind(SpriteKind.Player)[0], tiles.getTileLocation(2, 4))
        sprites.allOfKind(SpriteKind.Player)[0].setFlag(SpriteFlag.Invisible, false)
        scene.cameraFollowSprite(sprites.allOfKind(SpriteKind.Player)[0])
    } else {
        game.gameOver(true)
    }
}
info.onScore(2, function () {
    level += 1
    runlevel(level)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.npcs2, function (sprite, otherSprite) {
    otherSprite.sayText(textlist2[2])
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite5, location4) {
    if (dialog == false) {
        game.splash("The infinity stones..")
        game.splash("Your mission is to collect ")
        game.splash("them before Thanos does")
        game.splash("Alright , let's begin")
        game.splash("go find the team and ")
        game.splash("come up with a plan")
        dialog = true
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (showCharacterScreen) {
        current_character_index = (current_character_index + 1) % ourCharacters.length
    }
})
spriteutils.createRenderable(100, function (screen2) {
    if (showCharacterScreen) {
        currently_selected_character = ourCharacters[current_character_index]
        character_selector_box.setPosition(currently_selected_character.x, currently_selected_character.y)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardHole, function (sprite, location) {
    level += 1
    runlevel(level)
    tiles.placeOnTile(sprite, tiles.getTileLocation(7, 3))
    sprite.setFlag(SpriteFlag.Invisible, true)
    controller.moveSprite(sprite, 0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite2, location) {
    level += 1
    runlevel(level)
    tiles.placeOnTile(sprite2, tiles.getTileLocation(0, 6))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.ship, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    if (dialog3 == false) {
        story.startCutscene(function () {
            controller.moveSprite(sprite, 0, 0)
            story.printCharacterText("Six stones . One mission . No mistakes", "Cap")
            controller.moveSprite(sprite, 100, 0)
        })
    }
    dialog3 = true
})
let asteroeid: Sprite = null
let spaceship: Sprite = null
let npc: Sprite = null
let name = false
let currently_selected_character: Sprite = null
let thePlayer: Sprite = null
let character_selector_box: Sprite = null
let current_character_index = 0
let ourCharacters: Sprite[] = []
let moo: Sprite = null
let giuseppe: Sprite = null
let textSprite: TextSprite = null
let corni: Sprite = null
let showCharacterScreen = false
let textlist2: string[] = []
let list: Image[] = []
let dialog3 = false
let dialog2 = false
let dialog = false
let level = 0
show_character_picker2()
level = 1
runlevel(level)
dialog = false
dialog2 = false
dialog3 = false
list = [
img`
    . . . . . . . . . . . . . 
    . . 3 3 3 3 3 3 3 . . . . 
    . . f 3 3 3 3 3 3 f . . . 
    . f 3 3 3 3 3 3 3 3 f . . 
    c f f 3 3 3 3 3 3 f f f f 
    c f 3 3 3 3 3 3 3 f f f f 
    c c 3 3 3 3 3 3 3 c c c . 
    f c 3 3 3 3 3 3 f f f f . 
    f 3 3 3 3 3 e f b f f f . 
    f f 4 1 f 4 4 f 1 4 f f . 
    e f e e 4 4 4 4 4 e f . . 
    e 4 4 4 e 7 7 7 b f e f . 
    . e 4 4 e 7 7 7 7 f 4 e . 
    . . e e 6 6 6 6 6 f . . . 
    . . . f f f f f f f . . . 
    . . . . . . . f f f . . . 
    `,
img`
    e e e . . . . e e e . . . . 
    c d d c . . c d 3 c . . . . 
    c b d d f f d 3 3 c . . . . 
    c 3 b d d b 3 3 3 c . . . . 
    f b 3 d d 3 3 3 b f . . . . 
    e d d d 3 3 d d d e . . . . 
    e d f 3 3 d d f d e . b f b 
    f d 3 3 d d f d d f . f d f 
    f 3 d d b b d d 2 f . f d f 
    3 3 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 4 b 
    b d d c d 5 5 b 5 4 4 4 4 4 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `,
img`
    ...........ccccc66666...........
    ........ccc4444444444666........
    ......cc444444444bb4444466......
    .....cb4444bb4444b5b444444b.....
    ....eb4444b5b44444b44444444b....
    ...ebb44444b4444444444b444446...
    ..eb6bb444444444bb444b5b444446..
    ..e6bb5b44444444b5b444b44bb44e..
    .e66b4b4444444444b4444444b5b44e.
    .e6bb444444444444444444444bb44e.
    eb66b44444bb444444444444444444be
    eb66bb444b5b44444444bb44444444be
    fb666b444bb444444444b5b4444444bf
    fcb666b44444444444444bb444444bcf
    .fbb6666b44444444444444444444bf.
    .efbb66666bb4444444444444444bfe.
    .86fcbb66666bbb44444444444bcc688
    8772effcbbbbbbbbbbbbbbbbcfc22778
    87722222cccccccccccccccc22226678
    f866622222222222222222222276686f
    fef866677766667777776667777fffef
    fbff877768f86777777666776fffffbf
    fbeffeefffeff7766688effeeeefeb6f
    f6bfffeffeeeeeeeeeeeeefeeeeebb6e
    f66ddfffffeeeffeffeeeeeffeedb46e
    .c66ddd4effffffeeeeeffff4ddb46e.
    .fc6b4dddddddddddddddddddb444ee.
    ..ff6bb444444444444444444444ee..
    ....ffbbbb4444444444444444ee....
    ......ffebbbbbb44444444eee......
    .........fffffffcccccee.........
    ................................
    `
]
textlist2 = ["Goodluck twin", "Don't mess up!", "Ouch! you stepped on my leg!"]
let Asteroids = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c . . . . . . 
    . . . . . . a b a a . . . . . . 
    . . . . . c b a f c a c . . . . 
    . . . . c b b b f f a c c . . . 
    . . . . b b f a b b a a c . . . 
    . . . . c b f f b a f c a . . . 
    . . . . . c a a c b b a . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . c c c c . . 
    . c c c c c . c c c c c f c c . 
    c c a c c c c c 8 f f c f f c c 
    c a f a a c c a f f c a a f f c 
    c a 8 f a a c a c c c a a a a c 
    c b c f a a a a a c c c c c c c 
    c b b a a c f 8 a c c c 8 c c c 
    . c b b a b c f a a a 8 8 c c . 
    . . . . a a b b b a a 8 a c . . 
    . . . . c b c a a c c b . . . . 
    . . . . b b c c a b b a . . . . 
    . . . . b b a b a 6 a . . . . . 
    . . . . c b b b 6 6 c . . . . . 
    . . . . . c a 6 6 b c . . . . . 
    . . . . . . . c c c . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . c b a c . . . . . . 
    . . . . c c b c f a c . . . . . 
    . . . . a f b b b a c . . . . . 
    . . . . a f f b a f c c . . . . 
    . . . . c b b a f f c . . . . . 
    . . . . . b b a f a . . . . . . 
    . . . . . . c b b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . c c c a c . . . . 
    . . c c b b b a c a a a c . . . 
    . c c a b a c b a a a b c c . . 
    . c a b c f f f b a b b b a . . 
    . c a c f f f 8 a b b b b b a . 
    . c a 8 f f 8 c a b b b b b a . 
    c c c a c c c c a b c f a b c c 
    c c a a a c c c a c f f c b b a 
    c c a b 6 a c c a f f c c b b a 
    c a b c 8 6 c c a a a b b c b c 
    c a c f f a c c a f a c c c b . 
    c a 8 f c c b a f f c b c c c . 
    . c b c c c c b f c a b b a c . 
    . . a b b b b b b b b b b b c . 
    . . . c c c c b b b b b c c . . 
    . . . . . . . . c b b c . . . . 
    `,
img`
    . . . . . . c c c . . . . . . . 
    . . . . . a a a c c c . . . . . 
    . . . c a c f a a a a c . . . . 
    . . c a c f f f a f f a c . . . 
    . c c a c c f a a c f f a c . . 
    . a b a a c 6 a a c c f a c c c 
    . a b b b 6 a b b a a c a f f c 
    . . a b b a f f b b a a c f f c 
    c . a a a c c f c b a a c f a c 
    c c a a a c c a a a b b a c a c 
    a c a b b a a 6 a b b 6 b b c . 
    b a c b b b 6 b c . c c a c . . 
    b a c c a b b a c . . . . . . . 
    b b a c a b a a . . . . . . . . 
    a b 6 b b a c . . . . . . . . . 
    . a a b c . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . c b a c . . . . . . 
    . . . . c c b c f a c . . . . . 
    . . . . a f b b b a c . . . . . 
    . . . . a f f b a f c c . . . . 
    . . . . c b b a f f c . . . . . 
    . . . . . b b a f a . . . . . . 
    . . . . . . c b b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . c c c c . . . . 
    . . . . c c c c c c c c c . . . 
    . . . c f c c a a a a c a c . . 
    . . c c f f f f a a a c a a c . 
    . . c c a f f c a a f f f a a c 
    . . c c a a a a b c f f f a a c 
    . c c c c a c c b a f c a a c c 
    c a f f c c c a b b 6 b b b c c 
    c a f f f f c c c 6 b b b a a c 
    c a a c f f c a 6 6 b b b a a c 
    c c b a a a a b 6 b b a b b a . 
    . c c b b b b b b b a c c b a . 
    . . c c c b c c c b a a b c . . 
    . . . . c b a c c b b b c . . . 
    . . . . c b b a a 6 b c . . . . 
    . . . . . . b 6 6 c c . . . . . 
    `,
img`
    . . . . . . . c c c a c . . . . 
    . . c c b b b a c a a a c . . . 
    . c c a b a c b a a a b c c . . 
    . c a b c f f f b a b b b a . . 
    . c a c f f f 8 a b b b b b a . 
    . c a 8 f f 8 c a b b b b b a . 
    c c c a c c c c a b c f a b c c 
    c c a a a c c c a c f f c b b a 
    c c a b 6 a c c a f f c c b b a 
    c a b c 8 6 c c a a a b b c b c 
    c a c f f a c c a f a c c c b . 
    c a 8 f c c b a f f c b c c c . 
    . c b c c c c b f c a b b a c . 
    . . a b b b b b b b b b b b c . 
    . . . c c c c b b b b b c c . . 
    . . . . . . . . c b b c . . . . 
    `
]
game.onUpdateInterval(1000, function () {
    if (level == 4) {
        asteroeid = sprites.createProjectileFromSide(img`
            . . . . . . . . . c c 8 . . . . 
            . . . . . . 8 c c c f 8 c c . . 
            . . . c c 8 8 f c a f f f c c . 
            . . c c c f f f c a a f f c c c 
            8 c c c f f f f c c a a c 8 c c 
            c c c b f f f 8 a c c a a a c c 
            c a a b b 8 a b c c c c c c c c 
            a f c a a b b a c c c c c f f c 
            a 8 f c a a c c a c a c f f f c 
            c a 8 a a c c c c a a f f f 8 a 
            . a c a a c f f a a b 8 f f c a 
            . . c c b a f f f a b b c c 6 c 
            . . . c b b a f f 6 6 a b 6 c . 
            . . . c c b b b 6 6 a c c c c . 
            . . . . c c a b b c c c . . . . 
            . . . . . c c c c c c . . . . . 
            `, randint(-40, -80), 0)
        asteroeid.y = randint(0, 120)
    }
})
