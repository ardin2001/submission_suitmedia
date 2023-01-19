import React from 'react';
import PropTypes from 'prop-types';
function UseInput(defaultValue) {
    const [value, setValue] = React.useState(defaultValue);
    const handleValueChange = (event) => setValue(event.target.value);
    return [value, handleValueChange];
}
UseInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
};
export default UseInput;  