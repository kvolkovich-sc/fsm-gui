import React, { Component, PropTypes } from 'react';
import Toolbar from '../Toolbar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as viewportActions from '../App/redux/reducer/viewport';
import * as layoutActions from '../App/redux/reducer/layout';

import addSVG from '!!raw-loader!opuscapita-ui-svg-icons/lib/add.svg';
import backSVG from '!!raw-loader!opuscapita-ui-svg-icons/lib/arrow_back.svg';
import forwardSVG from '!!raw-loader!opuscapita-ui-svg-icons/lib/arrow_forward.svg';
import cutSVG from '!!raw-loader!opuscapita-ui-svg-icons/lib/content_cut.svg';
import copySVG from '!!raw-loader!opuscapita-ui-svg-icons/lib/content_copy.svg';
import pasteSVG from '!!raw-loader!opuscapita-ui-svg-icons/lib/content_paste.svg';
import panSVG from '!!raw-loader!opuscapita-ui-svg-icons/lib/open_with.svg';
import selectSVG from '!!raw-loader!opuscapita-ui-svg-icons/lib/touch_app.svg';
import simulateSVG from '!!raw-loader!opuscapita-ui-svg-icons/lib/all_inclusive.svg';
import helpSVG from '!!raw-loader!opuscapita-ui-svg-icons/lib/live_help.svg';
import inspectorSVG from '!!raw-loader!opuscapita-ui-svg-icons/lib/chrome_reader_mode.svg';

@connect(
  state => ({
    cursorPosition: state.viewport.cursorPosition,
    viewportRect: state.viewport.viewportRect,
    viewportScale: state.viewport.viewportScale,
    viewportPanOffset: state.viewport.viewportPanOffset,
    appElementRef: state.layout.appElementRef,
    showInspector: state.layout.showInspector
  }),
  dispatch => ({ actions: bindActionCreators({ ...viewportActions, ...layoutActions } , dispatch) })
)
export default class ToolbarContainer extends Component {
  handleShowInspector() {
    this.props.actions.updateShowInspector(!this.props.showInspector);
  }

  handleShowHelp() {
    this.props.actions.updateShowHelp(true);
  }

  render() {
    const {
      appElementRef,
      showInspector
    } = this.props;

    return (
      <Toolbar
        restrictorNode={appElementRef}
        controlsLeft={[
          {
            action: () => {},
            iconSVG: backSVG,
            title: 'Back',
            label: '',
            active: false,
            disabled: true
          },
          {
            action: () => {},
            iconSVG: forwardSVG,
            title: 'Forward',
            label: '',
            active: false,
            disabled: true
          },
          {
            action: () => {},
            iconSVG: cutSVG,
            title: 'Cut',
            label: '',
            active: false,
            disabled: true
          },
          {
            action: () => {},
            iconSVG: copySVG,
            title: 'Copy',
            label: '',
            active: false,
            disabled: true
          },
          {
            action: () => {},
            iconSVG: pasteSVG,
            title: 'Paste',
            label: '',
            active: false,
            disabled: true
          },
          null,
          {
            action: () => {},
            iconSVG: selectSVG,
            title: 'Select objects',
            label: '',
            active: true,
            disabled: false
          },
          {
            action: () => {},
            iconSVG: panSVG,
            title: 'Pan',
            label: '',
            active: false,
            disabled: false
          },
          null,
          {
            action: () => {},
            iconSVG: addSVG,
            title: 'Add State',
            label: 'State',
            active: false,
            disabled: false
          },
          {
            action: () => {},
            iconSVG: addSVG,
            title: 'Add Transition',
            label: 'Transition',
            active: false,
            disabled: false
          },
          {
            action: () => {},
            iconSVG: simulateSVG,
            title: 'Simulate',
            label: 'Simulate',
            active: false,
            disabled: false
          },
          null,
          {
            action: this.handleShowInspector.bind(this),
            iconSVG: inspectorSVG,
            title: 'Inspector',
            label: '',
            active: showInspector,
            disabled: false
          }
        ]}

        controlsRight={[
          {
            action: () => {},
            iconSVG: null,
            title: 'Cancel',
            label: 'Cancel',
            active: false,
            disabled: false
          },
          {
            action: () => {},
            iconSVG: null,
            title: 'Save',
            label: 'Save',
            active: false,
            disabled: false,
            color: '#fff',
            bgColor: '#0277bd'
          },
          null,
          {
            action: this.handleShowHelp.bind(this),
            iconSVG: helpSVG,
            title: 'Need help?',
            label: '',
            active: false,
            disabled: false
          }
        ]}
      />
    );
  }
}