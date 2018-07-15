import _ from 'lodash';
import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default class Chart extends Component {
  constructor(props) {
    super(props);
  }

  average(data) {
    return _.round(_.sum(data) / data.length);
  }

  render() {
    return (
      <div>
        <Sparklines height={this.props.height} width={this.props.width} data={this.props.data}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type='avg' />
        </Sparklines>
        <div>{this.average(this.props.data)} {this.props.units}</div>
      </div>
    )
  }
}