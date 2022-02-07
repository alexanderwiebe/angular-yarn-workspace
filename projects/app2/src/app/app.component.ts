import { Component } from '@angular/core';
import * as vo from 'version-outputer-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app2';
  voText = vo.getVersion();
}
