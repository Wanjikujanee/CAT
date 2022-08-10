var user={
    class:"HopperLab",
    subject:"Javascript",
    date:"24th December 2014",
    func:function(){
        var self=this;
        console.log("outer function:this.class="+this.class);
        console.log("outer function:self.class="+self.class);
        (function() {
            console.log("inner function:  this.class = " + this.class);
            console.log("inner function:  self.class = " + self.class);
        }());
      
        console.log("outer function:this.subject="+this.subject);
        console.log("outer function:self.subject="+self.subject);
        (function() {
            console.log("inner function:  this.subject = " + this.subject);
            console.log("inner function:  self.subject = " + self.subject);
        }());

        console.log("outer function:this.date="+this.date);
        console.log("outer function:self.date="+self.date);
        (function() {
            console.log("inner function:  this.date = " + this.date);
            console.log("inner function:  self.date = " + self.date);
        }());
    }
}
const quiz = document.getElementById('quiz');
const answer = document.getElementById('answer');
const submitButton = document.getElementById('submit');
function buildQuiz(){

}
buildQuiz();
let Questions = [
    {
      question: "difference between javascript and java?",
      answers: {
        a: "Js is simple ",
        b: "js is a server side application",
        c: "java is a client side apllication",
        d:"java can be used in web appllication",
      },
      correctAnswer: "a"
    },
    {
      question: "types of variable in js?",
      answers: {
        a: "local",
        b: "global",
        c: "inner",
        d:"outer",
      },
      correctAnswer: "b"
    },
  ];
  function showAnswer(){} 
submitButton.addEventListener('click', showAnswer);

function answer(submit, callback) {
    console.log("Answer: " + submit);

    if (callback == "answer"){
        callback();
    }
}


var hopperLab = {
    name: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};

hopperLab.func();
