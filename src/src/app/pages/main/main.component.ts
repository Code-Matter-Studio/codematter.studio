import { Component } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { ToastrService } from 'ngx-toastr'

// Environments
import { environment } from '@env/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public reCAPTCHASiteKey = environment.reCAPTCHASiteKey;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  contactUsForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
    reCaptcha: new FormControl(''),
  })

  myStyle: object = {}
  myParams: object = {}

  ngOnInit() {
    this.myStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      opacity: 0.2,
      'z-index': 1,
      'pointer-events': 'none',
    }

    this.myParams = {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#ffffff',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000',
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
          },
          onclick: {
            enable: true,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
        background_color: '#b61924',
        background_image: '',
        background_position: '50% 50%',
        background_repeat: 'no-repeat',
        background_size: 'cover',
      },
    }
  }

  reCaptchaResolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  onSubmit() {
    const chatId = -1001223983245
    const botId = '1393160245:AAE2XHT_apqu5xGlkZ3vWx-QZwgN1zCQBzE'

    this.http
      .post(
        'https://api.telegram.org/bot' +
          botId +
          '/sendMessage?chat_id=' +
          chatId +
          '&parse_mode=html&text=' +
          encodeURI(JSON.stringify({ Name:  this.contactUsForm.value.name,
                                     Email:  this.contactUsForm.value.email,
                                     Message: this.contactUsForm.value.message })),
        this.contactUsForm.value
      )
      .subscribe(
        () => {
          this.toastr.success('The message has been sent')
        },
        () => {
          this.toastr.error(
            'The message has not been sent',
            'Something went wrong'
          )
        }
      )
  }
}
