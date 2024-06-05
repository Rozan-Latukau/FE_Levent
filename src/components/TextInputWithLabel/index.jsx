import { Form } from 'react-bootstrap';
import TextInput from '@/components/TextInput';
import PropTypes from 'prop-types';

function TextInputWithLabel({
    label,
    name,
    value, // state
    type,
    onChange,
    placeholder,
}) {
    return (
        <Form.Group className='mb-2'>
            <Form.Label>{label}</Form.Label>
            <TextInput
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </Form.Group>
    );
}

TextInputWithLabel.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.isRequired,
    placeholder: PropTypes.string,
};

export default TextInputWithLabel;