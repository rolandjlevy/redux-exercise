import { connect } from 'react-redux';
import CharacterSearch from '../components/CharacterSearch';
import { setCharacterString, fetchCharacter } from '../actions';

const mapStateToProps = state => {
    return {
        characterString: state.characterInput
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleChange: characterString => dispatch(setCharacterString(characterString)),
        submitSearch: characterString => dispatch(fetchCharacter(characterString))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterSearch);