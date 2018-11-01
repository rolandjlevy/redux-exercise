import { connect } from 'react-redux';
import ItemSearch from '../components/ItemSearch';
import { setItemString, fetchItem } from '../actions';

const mapStateToProps = state => {
    return {
        itemString: state.itemInput,
        category: state.categorySelector
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleChange: itemString => dispatch(setItemString(itemString)),
        submitSearch: (category, itemString) => dispatch(fetchItem(category, itemString))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemSearch);