import React, { useState } from 'react';
import { Alert, FlatList, Text, TextInput, View } from 'react-native';
import styles from './styles';
import Participant from '../../components/Participant';
import Button from '../../components/Button';
import colors from '../../styles/colors';
import Divider from '../../components/Divider';

export default function HomeScreen() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [inputName, setInputName] = useState<string>('');

  function handleParticipantAdd() {
    if (!inputName) {
      return Alert.alert('Precisa informar um nome!');
    }
    if (participants.includes(inputName)) {
      return Alert.alert('Participante já está na lista!');
    }

    setParticipants(prevState => [...prevState, inputName]);
    setInputName('');
  }

  function onRemoveParticipant(name: string) {
    setParticipants(prevState =>
      prevState.filter(participant => participant !== name),
    );
  }

  function showParticipantRemoveAlert(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => onRemoveParticipant(name),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Quinta, 4 de Novembro de 2024.</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor={colors.gray}
          cursorColor="white"
          onChangeText={setInputName}
          style={styles.eventInput}
          value={inputName}
        />
        <Button onPress={handleParticipantAdd}>+</Button>
      </View>
      <Divider verticalSpace={16} />
      <FlatList
        data={participants}
        renderItem={({ item: name }) => (
          <Participant
            name={name}
            onRemove={() => showParticipantRemoveAlert(name)}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyListContainer}>
            <Text style={styles.emptyListText}>
              Ninguém chegou ao evento! =/
            </Text>
          </View>
        }
        contentContainerStyle={styles.emptyListContentContainer}
        keyExtractor={item => item}
      />
    </View>
  );
}
