import { connect } from 'react-redux';
import ItemResult from '../components/ItemResult';

const mapStateToProps = state => {
    return {
        item: state.itemResult
    };
};

export default connect(
    mapStateToProps
)(ItemResult);