import * as React from 'react';
import './Example.css';

/*!
 * interface Props - forms the table propTypes, component Example
 * the formation takes place according to the rules of topeskript, for example, here the "value" has:
 *
 * prpType: ' ' | 'X' | 'O'; required: false; default: ''; descroption: Value to display, either empty (' ') or 'X' / 'O'.
 * position: { x: number; y: number }; required: true; descroption: Cell position on game board.
 * onClick: (x: number, y: number) => void; required: false; Called when an empty cell is clicked.
 *
 */

interface Props {
  /**
   * Value to display, either empty (' ') or 'X' / 'O'.
   *
   * @default ' '
   **/
  value?: ' ' | 'X' | 'O';

  /** Cell position on game board. */
  position: { x: number; y: number };

  /** Called when an empty cell is clicked. */
  onClick?: (x: number, y: number) => void;
}

/*!
 * The comment before the component forms the description of the component.
 */

/**
 * Example game cell. Displays a clickable button when the value is ' ',
 * otherwise displays 'X' or 'O'.
 */
export class Example extends React.Component<Props> {
  handleClick = () => {
    const {
      position: { x, y },
      onClick,
    } = this.props;
    if (!onClick) return;

    onClick(x, y);
  }

  render() {
    const { value = ' ' } = this.props;
    const disabled = value !== ' ';
    const classes = `button ${disabled ? 'disabled' : ''}`;

    return (
      <button
        className={classes}
        disabled={disabled}
        onClick={this.handleClick}
      >
        {value}
      </button>
    );
  }
}
