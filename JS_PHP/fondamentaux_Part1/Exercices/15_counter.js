const CounterV1 = {
    count: 0,
    // Une méthode de l'objet Counterv1 elle connait le contexte
    counter: function() {
      console.log(this.count); // affiche 0
      setInterval(function () {
        this.count++;
        console.log(this.count);
      }, 1000);
    },
  };
//   CounterV1.counter();

  const CounterV2 = {
    count: 0,
    // Une méthode de l'objet Counterv1 elle connait le contexte
    counter: function() {
      console.log(this.count); // affiche 0
      let that = this;
      setInterval(function () {
        that.count++;
        console.log(that.count);
      }, 1000);
    },
  };
//   CounterV2.counter();

  const CounterV3 = {
    count: 0,
    // Une méthode de l'objet Counterv1 elle connait le contexte
    counter: function() {
      console.log(this.count); // affiche 0
      setInterval( () => {
        this.count++;
        console.log(this.count);
      }, 1000);
    },
  };
  
  CounterV3.counter();