import TextInputWithLabel from "@/components/TextInputWithLabel";
import { useState } from "react";
import SButton from '@/components/Button';
import { Container, Card, Form } from 'react-bootstrap';
import axios from "axios";

function PageSignin() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        try {
            const res = await axios.post('http://localhost:9000/api/v1/cms/auth/signin',
                {
                    email: form.email,
                    password: form.password,
                })
            console.log(res);
        } catch (error) {
            console.log('error');
            console.log(error);
        }

    }

    return (
        <Container md={12}>
            <Card style={{ width: '50%' }} className='m-auto mt-5'>
                <Card.Title className='text-center p-2'>Form Login</Card.Title>
                <Card.Body>
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
                        <SButton action={handleSubmit} variant="primary" >
                            Submit
                        </SButton>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default PageSignin;