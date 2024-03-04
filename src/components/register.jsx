import React, { useState,useRef } from 'react';
import styles from './register.module.css';
import { Box, FormControl, Button, FormLabel } from '@chakra-ui/react';

export default function Control() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });
  const formRef = useRef(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', formData);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <>
    <div className={styles.box}>
    <div className={styles.container}>
        <form action="/register" className={styles.frm} onSubmit={handleSubmit}>
          <h1>Registration Form</h1>
          <FormControl isRequired mb="20px" mt="40px">
            <FormLabel>Name</FormLabel>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl isRequired mb="20px">
            <FormLabel>Email</FormLabel>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl isRequired mb="20px">
            <FormLabel>Mobile No</FormLabel>
            <input
              type="number"
              placeholder="Enter Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl isRequired mb="15px">
            <FormLabel>Password</FormLabel>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </FormControl>

          <Button colorScheme="twitter" type="submit" margin-left={'100px'}>
            Submit
          </Button>
        </form>
      </div>

    </div>
     
    </>
  );
}
