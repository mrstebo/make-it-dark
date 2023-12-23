const app = new PIXI.Application({
    background: '#1099bb',
    resizeTo: window,
});

document.body.appendChild(app.view);

const LIGHT_STATES = {
    ON: 0x0a0a0a,
    OFF: 0x4d2597,
};
const HANDHELD_STATE = [
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
];

// Create the handheld device that we will use as the backdrop for the light buttons
const device = new PIXI.Graphics()
    .beginFill(0x000000)
    .drawRoundedRect(0, 0, 480, 600, 50)
    .endFill();

// Create a single square light button that we can add to the device
const lightButton = new PIXI.Graphics()
    .beginFill(0xffffff)
    .drawRect(0, 0, 60, 60)
    .endFill();

// Add the buttons in a 5x5 grid
for (let i = 0; i < 25; i++) {
    const button = lightButton.clone();
    button.x = 50 + (i % 5) * 80;
    button.y = 50 + Math.floor(i / 5) * 80;
    button.eventMode = 'dynamic';
    button.buttonMode = true;
    button.on('pointerdown', () => {
        // Change the one pressed
        HANDHELD_STATE[Math.floor(i / 5)][i % 5] = !HANDHELD_STATE[Math.floor(i / 5)][i % 5];

        // Toggle the top, bottom, left and right state
        if (i % 5 > 0) {
            HANDHELD_STATE[Math.floor(i / 5)][i % 5 - 1] = !HANDHELD_STATE[Math.floor(i / 5)][i % 5 - 1];
        }
        if (i % 5 < 4) {
            HANDHELD_STATE[Math.floor(i / 5)][i % 5 + 1] = !HANDHELD_STATE[Math.floor(i / 5)][i % 5 + 1];
        }
        if (Math.floor(i / 5) > 0) {
            HANDHELD_STATE[Math.floor(i / 5) - 1][i % 5] = !HANDHELD_STATE[Math.floor(i / 5) - 1][i % 5];
        }
        if (Math.floor(i / 5) < 4) {
            HANDHELD_STATE[Math.floor(i / 5) + 1][i % 5] = !HANDHELD_STATE[Math.floor(i / 5) + 1][i % 5];
        }
    });
    device.addChild(button);
}

// Add the device to the stage
app.stage.addChild(device);

// Game loop
app.ticker.add((delta) => {
    // Update the state of the lights
    for (let i = 0; i < 25; i++) {
        const button = device.children[i];
        button.tint = HANDHELD_STATE[Math.floor(i / 5)][i % 5] ? LIGHT_STATES.ON : LIGHT_STATES.OFF;
    }
})