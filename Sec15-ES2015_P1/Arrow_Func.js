var instructor = {
  first: "Elie",
  sayHi: function() {
    setTimeout(() => {
      console.log("Hello ", this.first);
    }, 500);
  }
};
instructor.sayHi();



var instructor2 = {
  first: "Elie",
  sayHi: () => {
    setTimeout(() => {
      console.log("Hello ", this.first);
    }, 500);
  }
};
instructor2.sayHi();
