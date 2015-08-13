import React, {Component} from 'react';
import Card from 'components/Card';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
  }

  renderCards(cardVals) {
    return cardVals.map((cardVal, index) => {
      return (
        <Card key={index} value={cardVal} />
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
