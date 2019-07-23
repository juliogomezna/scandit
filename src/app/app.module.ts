// tslint:disable:missing-jsdoc

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ScanditSdkModule } from "scandit-sdk-angular";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// tslint:disable-next-line:max-line-length
const licenseKey: string = "AXHdWT/TIjwNBK0augbn5FMHc/IuLx5lpxOma4Ejo88KbBt7rnspnpVtNFmHTanz5jGY92FpeXo/fPKmMkEnTkRWbX/PfYTphEZzYcYL0ry5aoCerUtMa+Ij44YCD+vysUAhbLhCCBKzC50b+flnUmnt6nqZU1+lHO6nx5HPwd+hd8s8FJLarX2IojJWpqfMnQtk3FMlWE9mzKrX8FUka3h0/3Ya5Sb1t9yya1BC5NY5C85RbQD9xTzkywSuKVHXfjSF9nGP4//vmEYftt+nKSe6hHiTClYMoiRZ6GMnitNxCb/p+AB84GqARc5WSBcRthNaB8H8Aph68Vo8+Vmo/nzzCNHbjsmznZbCU9vP0gKmubOrNykCMqPalLKp8KnsczweXlFS6/kU3SIZ5pzSi9BpadH8RJ8bpKicR9N0Cfl8P3TujmB8QfCseijsC9Lw98PAz8ybpBwz3iZJcUGXQSPpYEu26t60ob3+z06kcN9SiQPsvh4MHcQIHQs4M+1qPkB6TURt1Sy895qkgn+O+oNa3s6qA0k6F2xLpXlRnA6ZpK7pYXILSTaky3Hme3/VxR6dCR0sqsKillAlmBe+0C0ZjHofrBdEVukWct477hzRbxDw2nf5dVOYjUomn+ghb6HEPKUAc/SFi19bMZ3cPORXj+NAZ/S1liSob1yubhHtIHfB6PTLAA3yzp2gAC5sTnaB97RHT+RH+TiyhMZObfTAZqKWlQ2gM1Fo9QMq0nKhBZwYqQlchIiKBhNv9/weOnh0N8ForauMQj1jxAhl7NiKf+AHPtsp0u4EDQuBHvQvyQsT+TUNOh8=";
const engineLocation: string = "https://cdn.jsdelivr.net/npm/scandit-sdk@4.x/build"; // could also be e.g. "build"

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ScanditSdkModule.forRoot(licenseKey, engineLocation), ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  bootstrap: [AppComponent]
})
// tslint:disable-next-line:no-unnecessary-class
export class AppModule {}
