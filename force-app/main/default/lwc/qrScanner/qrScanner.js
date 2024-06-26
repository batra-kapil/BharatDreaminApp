import { LightningElement, track } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
//import instascanResource from '@salesforce/resourceUrl/instascan';
export default class QrScanner  extends LightningElement {
    // @track scannedData = '';
    // instascanLoaded = false;

    // connectedCallback() {
    //     this.loadInstascan();
    // }

    // loadInstascan() {
    //     if (this.instascanLoaded) {
    //         return;
    //     }
    //     loadScript(this, instascanResource + '/instascan.min.js')
    //         .then(() => {
    //             this.instascanLoaded = true;
    //             console.log('Instascan library loaded.');
    //         })
    //         .catch(error => {
    //             console.error('Error loading Instascan:', error);
    //         });
    // }

    // startScanning() {
    //     if (!this.instascanLoaded) {
    //         console.error('Instascan library not loaded.');
    //         return;
    //     }

    //     const scanner = new Instascan.Scanner({ video: this.template.querySelector('#qr-video') });

    //     scanner.addListener('scan', content => {
    //         this.scannedData = content;
    //     });

    //     Instascan.Camera.getCameras()
    //         .then(cameras => {
    //             if (cameras.length > 0) {
    //                 scanner.start(cameras[0]).catch(error => {
    //                     console.error('Error starting scanner:', error);
    //                 });
    //             } else {
    //                 console.error('No cameras found.');
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error accessing cameras:', error);
    //         });
    // }
}
