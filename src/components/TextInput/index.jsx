import { Form } from 'react-bootstrap';
import PropTypes from "prop-types";

function TextInput({ name, value, type, onChange, placeholder }) {
    return (
        <Form.Control
            type={type}
            name={name}
            value={value} // state
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}
TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.isRequired,
    placeholder: PropTypes.string
};

export default TextInput;