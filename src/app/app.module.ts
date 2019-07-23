// tslint:disable:missing-jsdoc

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ScanditSdkModule } from "scandit-sdk-angular";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// tslint:disable-next-line:max-line-length
const licenseKey: string = "AYUd2jrTJzC6JurcbwWiRq08XVOgArB91Ue0GcIaQHX8Sn0p8VGWWmF/EM9Tb29tkBqTcsFCjjfzUXrKI30m/a8BxrSQQPCx80Fy6RoXxVkRD1yeAg/Cs34rHmReMeJmstfv9QOVlIsxoqFx4DLIjQrKNmfKpUTxEo3+cAQJTOvqW9nX+OOHx7jqvgzx2Rv4Z1+2MdOUYdyMFzm81eAIJSPJaR3mNT6jm2qsIjb+KKwkY6bxLz6CJ6hCmvaAPV0ZhkK2G7zoCpMWjq7WLFxmQ7ykaCDgfhMwBWC1/75HjtsJpuZlpVnfgb6o77d78mFxLmnb2lEPs2f3yrq1ElyvfAiyBqfcW0T0CRtw1kgNeDEoAC6aUtbI0dnX+4fIkCj+KTJC9/boVNuBSY9pBBDj040nl0zta7GcE033Klgbr9TwQC/cFwe81QN2/jZPmYniWbC5A+ZM/8xPB+xfjtTOD/mUNlyV1tnPqA5hsJNb3uvb0jD68VQN1uqcq5AtUTq8OxtGDznGvWKqVsC7GxQwYeV1D8FEG8gCtFS8CDPG098LFopnlRIxYyzzHvlumQvXbdc98BRmN6kCdW0SpzukTEvHMpMTd1tIK67a7IZlOjD+tbSd8oNY3ltTfQX0ySif8D4fEHr/gobDzoDzEIa98SJj4DuaeJ9REjkdbLWPtMnL4QmWPHI/ImQpS0VUO+emsPUylN4ET7A9YlEbosto1rHNik6BOHsRgWi3UmEBckBzeaWjuROBgqOq4Vx1Z6uSdzuzK2CPBH5HNj8sezLbz88UyfgMONLqJKUKxrUU";
const engineLocation: string = "https://cdn.jsdelivr.net/npm/scandit-sdk@4.x/build"; // could also be e.g. "build"

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ScanditSdkModule.forRoot(licenseKey, engineLocation), ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  bootstrap: [AppComponent]
})
// tslint:disable-next-line:no-unnecessary-class
export class AppModule {}
