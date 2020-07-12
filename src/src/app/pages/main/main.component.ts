import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  constructor(private http: HttpClient){

    
  }

  contactUsForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  onSubmit() {
    const chatId = -1001223983245;
    const botId = '1393160245:AAE2XHT_apqu5xGlkZ3vWx-QZwgN1zCQBzE';

        this.http.post('https://api.telegram.org/bot' + botId + '/sendMessage?chat_id=' + chatId + '&parse_mode=html&text=' + encodeURI(JSON.stringify(this.contactUsForm.value)), this.contactUsForm.value)
          .subscribe((data: any) => { 
            console.warn(data); 
          },
                      error => console.log(error)
        );
  }
}
