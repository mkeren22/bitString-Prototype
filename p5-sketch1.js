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
        p.background(100); // arbitrary color
        osc.amp(parent.data.amp);
        osc.freq(parent.data.baseFreq);
      };
    };
  }
