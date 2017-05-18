import React, { Component, PropTypes } from 'react';
import './StatusLine.less';
import Button from 'opuscapita-react-ui-buttons/lib/Button';

import gridOnSVG from '!!raw-loader!opuscapita-ui-svg-icons/lib/border_inner.svg';
import gridOffSVG from '!!raw-loader!opuscapita-ui-svg-icons/lib/border_clear.svg';

const propTypes = {
  mousePositionX: PropTypes.number,
  mousePositionY: PropTypes.number,
  viewportScale: PropTypes.number,
  onZoomClick: PropTypes.func,
  isShowGrid: PropTypes.bool,
  onGridButtonClick: PropTypes.func
};

const defaultProps = {
  onZoomClick: () => {},
  onGridButtonClick: () => {}
};

const maxValueLength = 6;

export default
class StatusLine extends Component {
  handleZoomClick(e) {
    this.props.onZoomClick(e);
  }

  handleGridButtonClick(e) {
    this.props.onGridButtonClick(e);
  }

  render() {
    const {
      mousePositionX,
      mousePositionY,
      viewportScale,
      isShowGrid
    } = this.props;

    return (
      <div className="fsm--status-line">
        <div
          className="fsm--status-line__scale fsm--status-line__action"
          title="Reset"
          onClick={this.handleZoomClick.bind(this)}
        >
          <div className="fsm--status-line__label">
            Zoom:
          </div>
          <div className="fsm--status-line__value fsm--status-line__value--zoom">
            {Math.floor(viewportScale * 100)}%
          </div>
        </div>

        <div className="fsm--status-line__controls-right">
          <Button
            svg={isShowGrid ? gridOffSVG : gridOnSVG}
            title={isShowGrid ? 'Hide grid' : 'Show grid'}
            color="#333"
            onClick={this.handleGridButtonClick.bind(this)}
          />
        </div>

        <div className="fsm--status-line__mouse-position">
          <div className="fsm--status-line__label">
            X:
          </div>
          <div className="fsm--status-line__value">
            {typeof mousePositionX === 'number' ? mousePositionX.toString().slice(0, maxValueLength) : '―'}
          </div>
          <div className="fsm--status-line__label">
            Y:
          </div>
          <div className="fsm--status-line__value">
            {typeof mousePositionY === 'number' ? mousePositionY.toString().slice(0, maxValueLength) : '―'}
          </div>
        </div>
      </div>
    );
  }
}

StatusLine.propTypes = propTypes;