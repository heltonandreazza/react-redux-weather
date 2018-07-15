import { connect } from 'react-redux';

import WeatherList from './weather-list.component';

const mapStateToProps = ({ weather }) => ({ weather })

export default connect(mapStateToProps)(WeatherList);