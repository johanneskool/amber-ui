import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Square extends Component {
  // todo: implement more themes/colormappings
  @tracked
  squareColorMapping = { dark: 'dark', light: 'light' };

  pieceColorMapping = { dark: 'black', light: 'white' };
  strokeColorMapping = { dark: 'white', light: 'black' };

  get color() {
    return this.squareColorMapping[this.args.square.color?.name];
  }

  get bgColor() {
    return this.args.square.isSelected ? 'bg-primary' : 'bg-' + this.color;
  }

  get pieceName() {
    return this.args.square.piece?.pieceName;
  }

  get pieceIcon() {
    return 'chess-' + this.pieceName;
  }

  get pieceColor() {
    return this.pieceColorMapping[this.args.square.piece?.player?.color?.name];
  }

  get strokeColor() {
    return this.strokeColorMapping[this.color];
  }
  @action
  onClick() {
    this.args.square.toggleSelect();
  }
}
