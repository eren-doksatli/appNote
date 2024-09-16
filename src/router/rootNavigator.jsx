import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notes from '../screens/notes';
import {
  ADDNOTE,
  LOGIN,
  NOTES,
  PROFILE,
  REGISTER,
  UPDATENOTE,
} from '../utils/routes';
import Login from '../screens/login';
import Register from '../screens/register';
import Profile from '../screens/profile';
import AddNote from '../screens/notes/addNote';
import UpdatetNote from '../screens/notes/updateNote';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NOTES} component={Notes} />
      <Stack.Screen name={LOGIN} component={Login} />
      <Stack.Screen name={REGISTER} component={Register} />
      <Stack.Screen name={PROFILE} component={Profile} />
      <Stack.Screen name={ADDNOTE} component={AddNote} />
      <Stack.Screen name={UPDATENOTE} component={UpdatetNote} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
