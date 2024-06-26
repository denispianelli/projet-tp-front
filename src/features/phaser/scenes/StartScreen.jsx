import { Scene } from 'phaser';
import AudioManager from '../utils/AudioManager';

/**
 * La scène de démarrage du jeu, affichée au lancement du jeu.
 * Permet au joueur de commencer une nouvelle partie.
 */
export default class StartScreen extends Scene {
  constructor() {
    super('StartScreen');

    // Initialise le gestionnaire audio pour la scène
    this.audioManager = new AudioManager(this);
  }

  /**
   * Méthode appelée automatiquement lors de la création de la scène.
   * Affiche les éléments visuels de l'écran de démarrage et configure les interactions utilisateur.
   */
  create() {
    const { width, height } = this.scale;

    // Crée un effet sonore au démarrage de la scène
    this.audioManager.createStartSoundEffect();

    // Ajoute une image de fond et le logo du jeu à la scène
    this.add.image(width / 2, height / 2, 'background');
    this.add.image(width / 2, 200, 'logo-text').setScale(1.5);

    // Crée un texte pour inviter le joueur à démarrer le jeu
    const mainMenuText = this.add
      .text(width / 2, height / 2 + 50, 'APPUYEZ POUR DÉMARRER', {
        fontFamily: 'PressStart2P',
        fontSize: 20,
        align: 'center',
      })
      .setOrigin(0.5);

    // Définir une fonction pour faire clignoter le texte
    function blinkText() {
      mainMenuText.visible = !mainMenuText.visible;
    }

    // Fait clignoter le texte toutes les 500 millisecondes
    this.time.addEvent({
      delay: 500,
      callback: blinkText,
      callbackScope: this,
      loop: true,
    });

    // Attend l'événement du clic de la souris/toucher de l'écran pour démarrer la prochaine scène
    this.input.once('pointerdown', () => {
      // Joue un effet sonore de démarrage
      this.sound.play('press-start-sound');

      // Démarre la scène du menu principal et transmet les données du joueur
      this.scene.start('MainMenu', {
        audioManager: this.audioManager,
      });
    });
  }
}
