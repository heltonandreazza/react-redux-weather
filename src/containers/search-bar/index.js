import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from './search-bar.actions';

import SearchBar from './search-bar.component'

const mapStateToProps = ({ weather }) => ({ weather })
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(null, mapDispatchToProps)(SearchBar);