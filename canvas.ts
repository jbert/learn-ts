import * as sound from "./sound.js";
import * as draw from "./draw.js";

function main() {
    let canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 500;
    document.body.appendChild(canvas);

    let ctx = canvas.getContext('2d');
    let dctx = new draw.Context(ctx, 'white', 'black');

    new draw.Rect(new draw.Pt(0, 0), new draw.Pt(1, 1)).draw(dctx);

    let a440 = new sound.Sine(1.0, 440);
    console.log("First 3 samples are: " + a440.sample(0.0) + ", " + a440.sample(0.01) + ", " + a440.sample(0.02));

    new draw.Line(new draw.Pt(0.2, 0.1), new draw.Pt(0.7, 0.5)).draw(dctx);
    new draw.Rect(new draw.Pt(0.2, 0.2), new draw.Pt(0.8, 0.6)).draw(dctx);

    let ss = new draw.SubScreen(dctx, new draw.Rect(new draw.Pt(0.1, 0.1), new draw.Pt(0.5, 0.9)));
    new draw.Rect(new draw.Pt(0, 0), new draw.Pt(1, 1)).draw(ss);
    new draw.Line(new draw.Pt(0.2, 0.1), new draw.Pt(0.7, 0.5)).draw(ss);
    new draw.Rect(new draw.Pt(0.2, 0.2), new draw.Pt(0.8, 0.6)).draw(ss);

    let ssRight = new draw.SubScreen(dctx, new draw.Rect(new draw.Pt(0.6, 0.1), new draw.Pt(0.9, 0.9)));
    new draw.Rect(new draw.Pt(0, 0), new draw.Pt(1, 1)).draw(ssRight);
    new draw.Line(new draw.Pt(0.2, 0.1), new draw.Pt(0.7, 0.5)).draw(ssRight);
    new draw.Rect(new draw.Pt(0.2, 0.2), new draw.Pt(0.8, 0.6)).draw(ssRight);
}

main();

