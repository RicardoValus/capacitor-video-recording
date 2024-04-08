import { WebPlugin } from '@capacitor/core';
export class MediaCaptureWeb extends WebPlugin {
    captureVideo(options) {
        console.log('captureVideo', options);
        throw this.unimplemented('Not implemented on web.');
    }
}
//# sourceMappingURL=web.js.map