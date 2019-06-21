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
        osc.start();
  
      };
  
      p.draw = function() {
        p.background(p.map(parent.data.baseFreq, 200, 2000, 0, 255)); // color changes based on freq
        osc.amp(parent.data.amp);
        osc.freq(parent.data.baseFreq);
      };
    };
  }
