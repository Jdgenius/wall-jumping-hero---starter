controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    player.setImage(leftFacingImg)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    player.setImage(rightFacingImg)
})
let player: Sprite = null
let leftFacingImg: Image = null
let rightFacingImg: Image = null
let rightSwordOutImg = img`
    . . . . . . . f f . . . . . . . 
    . . . . f f f f 2 f f . . . . . 
    . . f f e e e e f 2 f f . . . . 
    . f f e e e e e f 2 2 f f . . . 
    . f e e e e f f e e e e f . . . 
    . f f f f f e e 2 2 2 2 e f . . 
    f f f e 2 2 2 f f f f e 2 f . . 
    f f f f f f f f e e e f f f . . 
    f e f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 b f d d e f . . . 
    . . f e e e 4 d d d e e . c . . 
    . . . f 2 2 2 2 e e d d e c c c 
    . . . f 4 4 4 e 4 4 d d e c d d 
    . . . f f f f f e e e e . c c c 
    . . f f f f f f f f . . . c . . 
    . . f f f . . f f . . . . . . . 
    `
let leftSwordOutImg = img`
    . . . . . . . f f . . . . . . . 
    . . . . . f f 2 f f f f . . . . 
    . . . . f f 2 f e e e e f f . . 
    . . . f f 2 2 f e e e e e f f . 
    . . . f e e e e f f e e e e f . 
    . . f e 2 2 2 2 e e f f f f f . 
    . . f 2 e f f f f 2 2 2 e f f f 
    . . f f f e e e f f f f f f f f 
    . . f e e 4 4 f b e 4 4 e f e f 
    . . . f e d d f b 4 d 4 e e f . 
    . . c . e e d d d 4 e e e f . . 
    c c c e d d e e 2 2 2 2 f . . . 
    d d c e d d 4 4 e 4 4 4 f . . . 
    c c c . e e e e f f f f f . . . 
    . . c . . . f f f f f f f f . . 
    . . . . . . . f f . . f f f . . 
    `
rightFacingImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f . . . 
    . . f e e e e e d d d f . . . . 
    . . . . f 4 d d e 4 e f . . . . 
    . . . . f e d d e 2 2 f . . . . 
    . . . f f f e e f 5 5 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `
leftFacingImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f 2 f e e e e f f . . . 
    . . . f 2 2 2 f e e e e f f . . 
    . . . f e e e e f f e e e f . . 
    . . f e 2 2 2 2 e e f f f f . . 
    . . f 2 e f f f f 2 2 2 e f . . 
    . . f f f e e e f f f f f f f . 
    . . f e e 4 4 f b e 4 4 e f f . 
    . . . f e d d f 1 4 d 4 e e f . 
    . . . . f d d d e e e e e f . . 
    . . . . f e 4 e d d 4 f . . . . 
    . . . . f 2 2 e d d e f . . . . 
    . . . f f 5 5 f e e f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f f . . . f f . . . . 
    `
player = sprites.create(rightFacingImg, SpriteKind.Player)
controller.moveSprite(player, 75, 0)
tiles.setTilemap(tiles.createTilemap(hex`100020000808080805080808080808080804080808080808050808080808080808040803080808080508080802020202020202020808080808080808080808080808080808080508080805080808080808040404080805080808050808080808080408060808080508080508080505050505050508080805080808080808080808080808050505080808080805080808080808080708050808080808050808080505080805050505050508080808080805050809080808080808080808080808050505050808050508080808080808080505080808080505080808080805080805050808080805080808080808080508050508080808050808050808080505080808080808080808080508080805050808080808080808080505080808050508080508080805080805050808080505080805080808050808050508080808080808050808080508080808080805080808080508080805080808080805050808080805080808080808080808050508080808050808080808080508080505080808080808080808080805080805050808080808080808080808050808080808080508080808080808080508080808080805080808080808080805050808080805050808080801080808080808080808080808080801010808080808080808080808080808010108080808080808080808080808080101010101010101010101010101010101`, img`
    ....2........2..
    ....2........2..
    ....2...22222222
    ................
    ..2...2......222
    ..2...2......2..
    ...2..2..2222222
    ...2............
    222.....2.......
    ..2.....2...22..
    222222......22..
    ............22..
    ..22........22..
    ..22.....2..22..
    ..2.......2.22..
    ..2..2...22.....
    .....2...22.....
    ....22...22..2..
    .2..22...22..2..
    .2..22.......2..
    .2......2....2..
    .2.....22....2..
    .......22....2..
    ....2..22.......
    ....2..22.......
    ....2......2....
    ....2......2....
    ....22....22....
    2..............2
    2..............2
    2..............2
    2222222222222222
    `, [myTiles.transparency16,sprites.dungeon.floorLight2,sprites.dungeon.floorLight3,sprites.dungeon.chestClosed,sprites.dungeon.floorLight0,sprites.dungeon.floorLightMoss,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleInsignia], TileScale.Sixteen))
tiles.placeOnTile(player, tiles.getTileLocation(8, 30))
scene.cameraFollowSprite(player)
