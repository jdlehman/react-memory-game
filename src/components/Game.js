import React, {Component} from 'react';
import Card from 'components/Card';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
    this.checkMatch = this.checkMatch.bind(this);

    this.state = {
      cards: [
        {value: 2, matched: false, flipped: false},
        {value: 4, matched: false, flipped: false},
        {value: 1, matched: false, flipped: false},
        {value: 1, matched: false, flipped: false},
        {value: 3, matched: false, flipped: false},
        {value: 4, matched: false, flipped: false},
        {value: 2, matched: false, flipped: false},
        {value: 3, matched: false, flipped: false}
      ],
      lastCard: null,
      locked: false
    };
  }

  checkMatch(value, id) {
    if (this.state.locked) {
      return;
    }

    var cards = this.state.cards;
    cards[id].flipped = true;
    this.setState({cards, locked: true});
    if (this.state.lastCard) {
      if (value === this.state.lastCard.value) {
        cards[id].matched = true;
        cards[this.state.lastCard.id].matched = true;
        this.setState({cards, lastCard: null, locked: false});
      } else {
        setTimeout(() => {
          cards[id].flipped = false;
          cards[this.state.lastCard.id].flipped = false;
          this.setState({cards, lastCard: null, locked: false});
        }, 1000);
      }
    } else {
      this.setState({
        lastCard: {id, value},
        locked: false
      });
    }
  }

  renderCards(cards) {
    return cards.map((card, index) => {
      return (
        <Card
          key={index}
          value={card.value}
          id={index}
          matched={card.matched}
          flipped={card.flipped}
          checkMatch={this.checkMatch} />
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
