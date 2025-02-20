import { afterNextRender, afterRender, Component, ContentChild, ElementRef, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  }
})
export class ControlComponent {
  label = input.required<string>();
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  constructor(){
    afterRender(() => {
      console.log('AFTER RENDER')
    });
    afterNextRender(() => {
      console.log('AFTER NEXT RENDER')
    });
  }

  onClick(){
    console.log(this.control);
  }
}
