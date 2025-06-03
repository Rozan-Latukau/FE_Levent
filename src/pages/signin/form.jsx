import React from 'react'
import TextInputWithLabel from "@/components/TextInputWithLabel";
import SButton from '@/components/Button';
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";


const SForm = ({ form, handleChange, handleSubmit, isLoading }) => {
    return (
        <Form>
            <TextInputWithLabel
                label="Email Address"
                name="email"
                value={form.email}
                type="email"
                placeholder="Masukkan email"
                onChange={handleChange}
            />
            <TextInputWithLabel
                label="Password"
                name="password" type="password" placeholder="Masukkan Password" onChange={handleChange} value={form.password}
            />
            <SButton loading={isLoading} disabled={isLoading} action={handleSubmit} variant="primary" >
                Submit
            </SButton>
        </Form>
    )
}

export default SForm;