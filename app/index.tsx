import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

function Homecreen(): React.JSX.Element {
  return (
    <View>
      <Text>Home page</Text>
      <Link href="/test">Test</Link>
    </View>
  );
}

export default Homecreen;
