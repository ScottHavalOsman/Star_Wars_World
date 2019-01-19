const PubSub = require('../helpers/pub_sub.js');
const PlanetDetailView = require('./planet_detail_view.js');
const PlanetsButtonView = require('./planets_button_view.js');

const PlanetsListView = function(container){
  this.container = container;
};

PlanetsListView.prototype.bindEvents = function(){
  PubSub.subscribe('PlanetsButtonView:button-selected', (evt) => {
    console.log('list working:', evt.detail);
    this.render(evt.detail)
  });
}

PlanetsListView.prototype.render = function(planets){
  planets.forEach((planet) => {
    const planetDetail = new PlanetDetailView();
    const planetDiv = planetDetail.createPlanetDetail(planet);
    this.container.appendChild(planetDiv);
  });
}


module.exports = PlanetsListView;