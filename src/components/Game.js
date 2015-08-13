import React, {Component} from 'react';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
  }

  renderCards(cardVals) {
    return cardVals.map((card, index) => {
      return (
        <div key={index} className="Card">
          {card}
        </div>
      );
    });
  }

  render() {
    var cards = [2, 4, 1, 1, 3, 4, 2, 3];
    return (
      <div className="Game">
        {this.renderCards(cards)}
      </div>
    );
  }
}
