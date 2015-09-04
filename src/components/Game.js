import React, {Component} from 'react';
import Card from 'components/Card';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);

    this.state = {
      cards: [
        {value: 2},
        {value: 4},
        {value: 1},
        {value: 1},
        {value: 3},
        {value: 4},
        {value: 2},
        {value: 3}
      ]
    };
  }

  renderCards(cards) {
    return cards.map((card, index) => {
      return (
        <Card key={index} value={card.value} />
      );
    });
  }

  render() {
    return (
      <div className="Game">
        {this.renderCards(this.state.cards)}
      </div>
    );
  }
}
