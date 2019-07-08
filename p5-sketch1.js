// Simple oscillator - base case for bitString prototype
// written in instance mode

function sketch(parent) { // we pass the sketch data from the parent
    return function( p ) {

      // create new osc
      let osc;
      let amp = 0.5, freq = 440;

      p.setup = function() {
        let canvas = p.createCanvas(400, 400);
        canvas.parent(parent.$el); // links child to parent
        p.background(p.map(freq, 200, 2000, 0, 255)); // color changes based on freq

        osc = new p5.Oscillator();
        osc.setType('sine');
        osc.freq(freq);
        osc.amp(amp);
        osc.start();
      };

      p.draw = function() {
        if (amp !== parent.data.amp || freq !== parent.data.baseFreq){
          amp = parent.data.amp;
          freq = parent.data.baseFreq;
            console.log(amp);
            console.log(freq);

          p.background(p.map(freq, 200, 2000, 0, 255)); // color changes based on freq

          // for some reason osc.freq() and osc.amp() aren't working
          // so instead i'm updating these values directly for now..
          osc.freqNode.value = freq;
          osc.output.gain.value = amp;
        }

      };
    };
  }
console.log("loaded");
