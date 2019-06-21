// Simple oscillator - base case for bitString prototype
// written in instance mode

function sketch(parent) { // we pass the sketch data from the parent
    return function( p ) {
        
      // create new osc
      var osc = new p5.Oscillator();
      
      p.setup = function() {
        let canvas = p.createCanvas(400, 400);
        canvas.parent(parent.$el); // links child to parent
        osc.setType('sine');
        osc.freq(400);
        osc.amp(0);  
      };
  
      p.draw = function() {
        p.background(p.map(parent.baseFreq, 200, 2000, 0, 255)); // color changes based on freq
        if (p.canvas.mouseOver(osc.start()));
        osc.amp(parent.amp);
        osc.freq(parent.baseFreq);
      };
    };
  }
  console.log("p5 sketch loaded");

