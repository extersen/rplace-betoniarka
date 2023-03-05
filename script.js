document.body.append(document.createElement('iframe'))
WebSocket = window.frames[0].WebSocket

function essa(startx,starty) {
var ws = new WebSocket('wss://server.rplace.tk/')
var y1 = 0
ws.onopen = function() {
        setInterval(() => {
            let pixelView = new DataView(new Uint8Array(6).buffer)
            pixelView.setUint8(0, 4)
            pixelView.setUint32(1, Math.floor(startx) + Math.floor(starty) * 2000)
            pixelView.setUint8(5, 6) // 27 - czarny 6-zielonyciemny 8-zielonyjasny
            ws.send(pixelView)
            startx += 4 // tu zmienic w ktora strone ma leciec
        }, 650)//cooldown
    }
}