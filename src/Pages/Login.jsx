import React, { useContext, useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from '@chakra-ui/react';
import { AuthContext } from '../Context/AuthContext/AuthContextProvider';
// 0. axios should be used for making network requests;

// 1. input boxes which takes email and password from the user

// 2. in this page you should get the auth state from auth context and based on auth state;if user is already logged in then user should be redirected to home page

// 3. network request (POST) should be made to api endpoint `https://reqres.in/api/login` with email and password details;

// 4. button should not allow additional click till API call is complete; user should see loading indicator till API call is complete;

// 5. upon successful login, login success action is dispatched with token we get back as response and the authentication status and token is updated in the context API. user then gets redirected to home page;

// 6. Proper Alert should be displayed to user upon unsuccessful API call. the message can be `Something went wrong. please refresh.`

const Login = () => {
  const [input, setInput] = useState('');
  const { state, dispatch } = useContext(AuthContext);
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === '';
  console.log(state);
  function handleClick() {
     dispatch({ type: 'load'})
     setTimeout(()=>{
      dispatch({ type: 'success', token: 'hsjkdhJ' })
     },2000)
     
  }
  return (
    <Box w='25%' m='auto'>
      <FormControl isInvalid={isError}>
        <FormLabel>Email</FormLabel>
        <Input type='email' value={input} onChange={handleInputChange} />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
        <FormLabel>Password</FormLabel>
        <Input type='email' value={input} onChange={handleInputChange} />
        {!isError ? (
          <FormHelperText>
            Enter the password you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Password is required.</FormErrorMessage>
        )}

        <Button
          m='auto'
          isLoading={state.loading}
          loadingText='Submitting'
          colorScheme='teal'
          variant='outline'
          onClick={() => handleClick()}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;
