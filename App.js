import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const incrementPlayer1Score = () => {
    setPlayer1Score(player1Score + 1);
  };

  const incrementPlayer2Score = () => {
    setPlayer2Score(player2Score + 1);
  };

  const resetScores = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Placar de KILL Ludo</Text>

      <View style={styles.scoreContainer}>
        <Text style={styles.playerLabel}>Jogador 1:</Text>
        <Text style={styles.count}>{player1Score}</Text>
        <Button title="Incrementar" onPress={incrementPlayer1Score} />
      </View>

      <View style={styles.scoreContainer}>
        <Text style={styles.playerLabel}>Jogador 2:</Text>
        <Text style={styles.count}>{player2Score}</Text>
        <Button title="Incrementar" onPress={incrementPlayer2Score} />
      </View>

      <Button title="Zerar Placar" onPress={resetScores} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  playerLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  count: {
    fontSize: 30,
    marginBottom: 10,
  },
});