import {
    Component,
    Input,
    OnInit
} from '@angular/core';
import {
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

import { DynamicQuestion } from './dynamic-question.model';

@Component({
    selector: 'dynamic-form',
    template: require('./dynamic-form.component.html')
})
export class DynamicFormComponent implements OnInit {
    @Input() questions:Array<DynamicQuestion>;

    formGroup: FormGroup;
    payload: string;

    ngOnInit() {
        this.formGroup = this.generateForm(this.questions || []);
        this.payload = '';
    }

    private generateForm(questions: Array<DynamicQuestion>): FormGroup {
        const formControls = questions.reduce(this.generateControl, {});

        return new FormGroup(formControls);
    }

    private generateControl(controls: any, question: DynamicQuestion) {
        if (question.required) {
            controls[question.id] = new FormControl(question.value || '', Validators.required);
        } else {
            controls[question.id] = new FormControl(question.value || '');
        }

        return controls;
    }

    submit() {
        this.payload = JSON.stringify(this.formGroup.value, null, 4);
    }
}