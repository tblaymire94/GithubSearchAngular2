import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent  {
   name = 'Angular'; 
  }

// We add the moduleId so that we can do easy paths without /