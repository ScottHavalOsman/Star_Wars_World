const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const PlanetsQuiz = function (url) {
  this.planetsQuiz = [];
  this.url = url;
};

PlanetsQuiz.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
  .then((planetsQuizData) => {
    this.planetsQuiz = planetsQuizData.results;
  })
  .then(() => {
    PubSub.publish('PlanetsQuiz:planets-quiz-loaded', this.planetsQuiz);

  });
};

module.exports = PlanetsQuiz;

//
//
// GeneralQuiz.prototype.getData = function(){
//   const request = new Request(this.url);
//   request.get().then((generalQuizData) => {
//     this.generalQuiz = generalQuizData.results;
//   })
//   .then(() => {
//     PubSub.publish('GeneralQuizQuestions:questions-loaded', this.generalQuiz);
//     console.log('General Quiz Questions Data - Incoming');
//   });
// }
//
// module.exports = GeneralQuiz;
