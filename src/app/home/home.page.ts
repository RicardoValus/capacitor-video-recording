import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { MediaCapture } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  async captureVideo() {
    try {
      const result = await MediaCapture['captureVideo']({
        duration: 300,
        quality: 'hd',
        sizeLimit: 0
      });

      console.log('Vídeo capturado:', result.file);
    } catch (error) {
      console.error('Erro ao capturar vídeo:', error);
    }
  }
}
