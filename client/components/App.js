import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
   return {
      posts: state.posts,
      comments: state.comments
   }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators(actionCreators, dispatch);
}

// "connect" allows us to pass props down to other components without having to
// pass them through each parent component.
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;