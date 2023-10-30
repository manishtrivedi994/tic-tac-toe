import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useGameLogic } from './hooks/useGameLogic';

const Home = () => {
  const { gameBoard, winner, currentPlayer, handlePress, resetGame } =
    useGameLogic();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {winner ? `Winner: ${winner}` : `Current Player: ${currentPlayer}`}
      </Text>
      <View style={styles.boxContainer}>
        {gameBoard?.map((board, index) => {
          return (
            <Pressable
              onPress={() => handlePress(index)}
              key={index}
              style={styles.cell}
            >
              <Text style={styles.cellText}>{board}</Text>
            </Pressable>
          );
        })}
      </View>
      {winner ? (
        <Pressable style={styles.button} onPress={resetGame}>
          <Text style={styles.buttonText}>Reset Game</Text>
        </Pressable>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cell: {
    width: 100,
    height: 100,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightblue',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  cellText: {
    fontSize: 40,
    textAlign: 'center',
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
});
