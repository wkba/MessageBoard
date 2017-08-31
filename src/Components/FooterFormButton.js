import React from 'react';


const FooterFormButton = (props) => {
    // this.props.submitLabel は不可
    // props.submitLabel は可

    // FooterFormButtonのstateにpropsを入れてる
    const {submitLabel, otherLabel, goToLink, history} = props;

    return (

        <div>
            <button type="submit" color="primary">{submitLabel}</button>
            <button color="default" onClick={() => {
                history.push(goToLink);
            }}>
                {otherLabel}
            </button>
        </div>
    )
}

// FooterFormButton.propTypes = {
//     classes: PropTypes.object.isRequired,
// };


export default FooterFormButton;