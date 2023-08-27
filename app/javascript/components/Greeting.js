import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../features/greeting/greetingSlice';

const Greeting = () => {
  const { greeting } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  if (!greeting) return null;

  return <p>{greeting.text}</p>;
};

export default Greeting;
