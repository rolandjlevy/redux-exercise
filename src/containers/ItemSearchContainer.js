import { connect } from 'react-redux';
import ItemSearch from '../components/ItemSearch';
import { setItemString, fetchItem } from '../actions';

const mapStateToProps = state => {
    return {
        itemString: state.itemInput
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleChange: itemString => dispatch(setItemString(itemString)),
        submitSearch: itemString => dispatch(fetchItem(itemString))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemSearch);