import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {screenStyle} from '../../styles/screenStyles';
import firestore from '@react-native-firebase/firestore';
import FloatActionButton from '../../components/ui/floatAction';
import NoteItem from '../../components/notes/noteItem';
import {ADDNOTE} from '../../utils/routes';

const Notes = ({navigation}) => {
  const [notes, setNotes] = useState([]);

  const getNotes = () => {
    firestore()
      .collection('Notes')
      .get()
      .then(querySnapShot => {
        let notes = [];
        querySnapShot.forEach(documentSnapshot => {
          notes.push({
            id: documentSnapshot.id,
            title: documentSnapshot.data().title,
            description: documentSnapshot.data().description,
            time: documentSnapshot.data().time,
            date: documentSnapshot.data().date,
          });
        });
        setNotes(notes);
      });
  };
  // useEffect(() => {
  //   getNotes();
  // }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getNotes();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={screenStyle.container}>
      <FlatList
        data={notes}
        renderItem={({item}) => <NoteItem item={item} getNotes={getNotes} />}
      />
      <FloatActionButton
        onPress={() => navigation.navigate(ADDNOTE, {refreshNotes: getNotes})}
      />
    </View>
  );
};

export default Notes;
