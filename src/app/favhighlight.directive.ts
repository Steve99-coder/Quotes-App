import { Directive,ElementRef} from '@angular/core';
@Directive({
  selector: '[appFavhighlight]'
})
export class FavhighlightDirective {

  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.color='Yellow';
  }
}
