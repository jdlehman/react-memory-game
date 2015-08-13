import React, {Component} from 'react';
import classnames from 'classnames';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      flipped: false,
      matched: false
    };
  }

  handleClick(e) {
    var flipped = this.state.flipped;
    this.setState({flipped: !flipped});
  }

  render() {
    var classes = classnames(
      'Card',
      {'Card--flipped': this.state.flipped},
      {'Card--matched': this.state.matched}
    );
    var cardValue = this.state.flipped ? this.props.value : '';
    return (
      <div className={classes} onClick={this.handleClick}>
        {cardValue}
      </div>
    );
  }
}
