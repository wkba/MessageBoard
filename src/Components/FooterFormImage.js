import React from 'react';
import PropTypes from 'prop-types';

const FooterFormImage = ({area, onDelete, hasData, onEdit}) => (
    <div>
        <div>
            <div
                contentEditable="true"
                onInput={(input) => onEdit(area.id, input.target.innerHTML)}
            >{area.name}</div>
        </div>
        <div>
            {!hasData && <button onClick={() => onDelete(area.id)}>Delete</button>}
        </div>
    </div>
);

FooterFormImage.propTypes = {
    area: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    hasData: PropTypes.bool,
};

export default FooterFormImage;