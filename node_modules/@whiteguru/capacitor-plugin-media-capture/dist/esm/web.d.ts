import { WebPlugin } from '@capacitor/core';
import type { CaptureVideoOptions, MediaCapturePlugin, MediaFileResult } from './definitions';
export declare class MediaCaptureWeb extends WebPlugin implements MediaCapturePlugin {
    captureVideo(options: CaptureVideoOptions): Promise<MediaFileResult>;
}
