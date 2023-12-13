import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Base64ToBlobService {
  base64ToBlob(base64String: string, contentType: string = ''): Blob {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
  }
}
