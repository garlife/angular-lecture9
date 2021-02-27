import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mod1Component } from './mod1.component';



@NgModule({
  declarations: [Mod1Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [Mod1Component],
})
export class Mod1Module { }
