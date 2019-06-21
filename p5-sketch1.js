// Simple oscillator - base case for bitString prototype
// written in instance mode

function sketch(parent) { // we pass the sketch data from the parent
    return function( p ) {
      p.setup = function() {
        let canvas = p.createCanvas(400, 400);
        canvas.parent(parent.$el); // links child to parent
        // create new osc
        let osc = new p.p5.Oscillator();
        p.osc.setType('sine');
        p.osc.freq(400);
        p.osc.amp(0);
        p.osc.start();
  
      };
  
      p.draw = function() {
        p.background(100); // arbitrary color
        p.osc.amp(parent.data.amp);
        p.osc.freq(parent.data.baseFreq);
      };
    };
  }