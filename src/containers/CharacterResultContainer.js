import { connect } from 'react-redux';
import CharacterResult from '../components/CharacterResult';

const mapStateToProps = state => {
    return {
        character: state.characterResult
    };
};

export default connect(
    mapStateToProps
)(CharacterResult);