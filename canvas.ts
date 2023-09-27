import * as sound from "./sound.js";
import * as draw from "./draw.js";
import * as graph from "./graph.js";

function main() {
    let canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 500;
    document.body.appendChild(canvas);

    let ctx = canvas.getContext('2d');
    let dctx = new draw.Context(ctx, 'white', 'black');

    new draw.Rect(new draw.Pt(0, 0), new draw.Pt(1, 1)).draw(dctx);

    let s40 = new sound.Sine(40);
    let s10 = new sound.Sine(10);
    let s20 = new sound.Sine(20);
    let s30 = new sound.Sine(30);
    //    console.log("First 3 samples are: " + a440.sample(0.0) + ", " + a440.sample(0.01) + ", " + a440.sample(0.02));

    //    new draw.Line(new draw.Pt(0.2, 0.1), new draw.Pt(0.7, 0.5)).draw(dctx);
    //    new draw.Rect(new draw.Pt(0.2, 0.2), new draw.Pt(0.8, 0.6)).draw(dctx);

    let ssA = new draw.SubScreen(dctx, new draw.Rect(new draw.Pt(0.1, 0.1), new draw.Pt(0.4, 0.4)));
    let ssB = new draw.SubScreen(dctx, new draw.Rect(new draw.Pt(0.6, 0.1), new draw.Pt(0.9, 0.4)));
    let ssC = new draw.SubScreen(dctx, new draw.Rect(new draw.Pt(0.1, 0.6), new draw.Pt(0.4, 0.9)));
    let ssD = new draw.SubScreen(dctx, new draw.Rect(new draw.Pt(0.6, 0.6), new draw.Pt(0.9, 0.9)));

    let rect = new draw.Rect(new draw.Pt(0, 0), new draw.Pt(1, 1));
    rect.draw(ssA);
    rect.draw(ssB);
    rect.draw(ssC);
    rect.draw(ssD);
    //    new draw.Line(new draw.Pt(0.2, 0.1), new draw.Pt(0.7, 0.5)).draw(ss);
    //    new draw.Rect(new draw.Pt(0.2, 0.2), new draw.Pt(0.8, 0.6)).draw(ss);

    //    let ssRight = new draw.SubScreen(dctx, new draw.Rect(new draw.Pt(0.6, 0.1), new draw.Pt(0.9, 0.9)));
    let g = new graph.Graph(0, 0.1, -1, +1);

    g.plot(ssA, (x) => s40.sample(x));
    g.plot(ssB, (x) => s20.sample(x));
    g.plot(ssC, (x) => s30.sample(x));
    g.plot(ssD, (x) => s10.sample(x));
}

main();

