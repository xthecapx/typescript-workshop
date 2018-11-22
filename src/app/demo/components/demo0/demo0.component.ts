import { Component } from '@angular/core';

@Component({
  selector: 'app-demo0',
  templateUrl: './demo0.component.html',
})
export class Demo0Component {
  person = {
    name: 'Cristian Marquez',
    avatar: 'https://media.licdn.com/dms/image/C4E03AQGE3zMIXvPYyg/profile-displayphoto-shrink_200_200/0?e=1548288000&v=beta&t=o8itYn70eAnjirlQnvCh-8jNhUXzo07LIobq58u-bK8',
    facts: [
      '🧢 thecap',
      '🛫 Living Bogotá since 2006',
      '🤓 Frontend Software Developer',
      '👨‍🏫 Write at https://hackernoon.com',
      '🕶️ Amateur Skateboarder'
    ]
  };
}
