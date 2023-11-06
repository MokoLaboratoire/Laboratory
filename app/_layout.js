import React from 'react';
import { Stack } from 'expo-router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/explicit-function-return-type
const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="Home" />
      <Stack.Screen name="test" />
    </Stack>
  );
};
