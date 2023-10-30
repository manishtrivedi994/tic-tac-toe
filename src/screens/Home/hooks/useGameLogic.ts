import { useEffect, useState } from 'react';
import { winConditions } from '../constants';

const GAME_SIZE = 9;

export const useGameLogic = () => {
  const [gameBoard, setGameBoard] = useState(Array(GAME_SIZE).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState<string | null>(null);

  const checkWinner = () => {
    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (
        gameBoard[a] !== '' &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        setWinner(gameBoard[a]);
        return;
      }
    }
    if (!gameBoard.includes('')) {
      setWinner('Tie');
    }
  };

  useEffect(() => {
    checkWinner();
  }, [gameBoard]);

  const handlePress = (index: number) => {
    if (!winner && gameBoard[index] === '') {
      let updatedBoard = [...gameBoard];
      updatedBoard[index] = currentPlayer;
      setGameBoard(updatedBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setGameBoard(Array(9).fill(''));
    setWinner(null);
    setCurrentPlayer('X');
  };
  return {
    gameBoard,
    handlePress,
    resetGame,
    winner,
    checkWinner,
    currentPlayer,
  };
};
