import { Component, Inject, OnInit } from '@angular/core';
import { Mod1Service } from './mod1.service';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
  providers: [{provide: 'mod1', useClass: Mod1Service}, {provide: 'mod2', useClass: Mod1Service}]
})
export class Mod1Component implements OnInit {

  constructor(@Inject('mod1') public mod1: Mod1Service, @Inject('mod2') public mod2: Mod1Service) { }
//private если мы хотим использовать в рамках класса
//public если 
  ngOnInit(): void {
  }

}
