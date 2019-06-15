import { connect } from 'react-redux';
import FormToggle from '../components/FormToggle';

const mapStateToProps = (state) => {
	return {
		showAddForm: state.ui.showAddForm
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleFormOpen: () => dispatch({type: 'TOGGLE_ADD_FORM'})
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FormToggle);
