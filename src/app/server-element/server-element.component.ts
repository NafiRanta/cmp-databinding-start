import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{
  //
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  constructor() {
    console.log("constructor called!")
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges called!")
    console.log(changes)
  }

  // called at initialisation
  ngOnInit() {
    console.log("ngOnInit called!")
  }

  // gets called whenever angular detects any changes
  ngDoCheck() {
    console.log("ngDoCheck called!")
  }

  // the part in server-element where there is ngContent
  ngAfterContentInit() {
    console.log("ngAfterContentInit called!")
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called!")
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!")
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!")
  }
}
