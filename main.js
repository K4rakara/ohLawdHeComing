var ohLawd = {
    win: document.defaultView,
    ox: 0,
    oy: 0,
    x: 0,
    y: 0,
    width: 100,
    height: 100
};

function ohLawd_updateCoords() {
    ohLawd.x = ohLawd.ox - (ohLawd.width / 2);
    ohLawd.y = ohLawd.oy - (ohLawd.height / 2);
}

function ohLawd_update() {
    ohLawd.width = ohLawd.width + 0.25;
    ohLawd.height = ohLawd.height + 0.25;
    ohLawd_updateCoords();
    ohLawd.win.resizeTo(ohLawd.width, ohLawd.height);
    ohLawd.win.moveTo(ohLawd.x, ohLawd.y);
    if (ohLawd.width >= screen.availWidth || ohLawd.height >= screen.availHeight) {
        ohLawd.ox = Math.random() * screen.width;
        ohLawd.oy = Math.random() * screen.height;
        ohLawd.width = 100;
        ohLawd.height = 100;
    }
}

ohLawd.ox = Math.random() * screen.width;
ohLawd.oy = Math.random() * screen.height;
ohLawd.win.resizeTo(ohLawd.width, ohLawd.height);
ohLawd.win.moveTo(ohLawd.x, ohLawd.y);
setInterval(ohLawd_update, 10);
