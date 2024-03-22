import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import {
  Boot,
  CharacterMenu,
  Game,
  GameOver,
  LevelUp,
  MainMenu,
  Pause,
  Preloader,
  StageMenu,
  StartScreen,
} from './phaser/scenes/index';

export default function GameComponent() {
  const gameRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 1024,
      height: 768,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: false,
        },
      },
      parent: 'game-container',
      scene: [
        Boot,
        Preloader,
        MainMenu,
        CharacterMenu,
        StageMenu,
        StartScreen,
        Game,
        Pause,
        LevelUp,
        GameOver,
      ],
    };

    const game = new Phaser.Game(config);
    gameRef.current = game;

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="game-container" />;
}
