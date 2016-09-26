import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { DynamicFormComponent, DynamicQuestionComponent } from "./dynamic-form";

@NgModule({
	bootstrap: [
		AppComponent
	],
	declarations: [
		AppComponent, 
		DynamicFormComponent, 
		DynamicQuestionComponent
	],
	imports: [
		BrowserModule, 
		ReactiveFormsModule
	]
})
export class AppModule { }
