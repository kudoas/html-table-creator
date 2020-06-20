import React, { useState } from 'react';
import styled from '@emotion/styled';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

const ContactForm: React.FCX = ({ className }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMassage] = useState('');
  const [isTouched, setTouched] = useState(false);

  const nameHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const emailHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const messageHandler = (e: any) => {
    setMassage(e.target.value);
    setTouched(true);
  };

  return (
    <>
      <Header />
      <main className={className}>
        <h2>Contact Form</h2>
        <form name="contact" method="POST" action="/">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name:{' '}
              <input onChange={(e) => nameHandler(e)} value={name} type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email:{' '}
              <input onChange={(e) => emailHandler(e)} value={email} type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message:{' '}
              <textarea
                name="message"
                onChange={(e) => messageHandler(e)}
                value={message}
              ></textarea>
            </label>
          </p>
          <p>
            <Button type="submit" isOne={!isTouched}>
              Send
            </Button>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
};

const StyledContactForm = styled(ContactForm)`
  text-align: center;
  form {
    margin: 10px;
    p {
      margin: 20px;
      label {
        font-size: 1.2em;
        input,
        textarea {
          border-radius: 5px;
          padding: 5px;
          background-color: #e0e5ec;
          box-shadow: 2px 2px 10px #ffffff, -2px -2px 10px #a3b1c6;
        }
        textarea {
          width: 500px;
          height: 200px;
        }
      }
    }
  }
  button {
    background-color: #b5ddd1;
  }
`;

// #b5ddd1
// #d7e7a9
// #d3c0f9
// #f99a9c
// #fdbccf

export default StyledContactForm;
