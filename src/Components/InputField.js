import React from 'react';
import PropTypes from 'prop-types';

function isVowel(char) {
    return /^[aeiou]$/.test(char.toLowerCase());
}

const InputField = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>
                {props.label}
            </label>
            <div>
                <input
                    required
                    onChange={props.inputAction}
                    type={props.type}
                    id={props.id}
                    className="form-control"
                    placeholder={`Please enter ${isVowel(props.label[0]) ? "an" : "a" } ${props.label}`}
                    style={props.style}
                />
            </div>
        </div>
    )
}

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    inputAction: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,

};

export default InputField;