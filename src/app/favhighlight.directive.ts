import { Directive,ElementRef, Input} from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appFavhighlight]'
})
export class FavhighlightDirective {
  quotes: Quote;
  @Input()defaultcolor: string;
  @Input('myHighlight')highlightcolor: string;

  
  constructor(private elem:ElementRef){ 
    this.highlight(this.highlightcolor || this.defaultcolor || 'yellow')
  }
 
  private highlight(color:string){
    this.elem.nativeElement.style.backgroundColor = color;
  }

}
