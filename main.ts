/**
 * I removed the redundant forever loop
 */
input.onButtonPressed(Button.A, function () {
    // Repeat the animation
    for (let index = 0; index < 4; index++) {
        // Show a happy face :)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        // Wait 0.1 seconds for the next frame 
        basic.pause(100)
        // Show a neutral face :/
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        // Wait 0.1 seconds for the next frame (if there is one)
        basic.pause(100)
    }
    // Reset the screen when animation done
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    // Repeat the animation
    for (let index = 0; index < 4; index++) {
        // Show a sad face :(
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        // Wait 0.1 seconds for the next frame 
        basic.pause(100)
        // Show a neutral face :/
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        // Wait 0.1 seconds for the next frame (if there is one)
        basic.pause(100)
    }
    // Reset the screen when animation done
    basic.clearScreen()
})
// Initialize the screen to blank
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
