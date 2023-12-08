import { Component } from '@angular/core'; // for Angular to know the Component decorator

@Component({
	selector:'app-server', // make sure to choose a unique selector!
	templateUrl:'./server.component.html' // the path to the template
})

export class ServerComponent { // component must be exported to be used by app.component

}