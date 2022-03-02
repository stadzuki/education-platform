import {NgModule} from "@angular/core";
import {LecturesComponent} from "./lectures.component";
import {LecturesRouting} from "./lectures-routing";
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { SplitterModule } from '@syncfusion/ej2-angular-layouts';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LecturesComponent
    ],
    imports: [
        LecturesRouting,
        FormsModule,
        FormsModule,
        ReactiveFormsModule,
        TabModule,
        RichTextEditorAllModule,
        SplitterModule,
        CheckBoxModule,
        DialogModule,
        NumericTextBoxModule,
        ButtonModule,
        SwitchModule,
        RadioButtonModule,
        TextBoxModule,
        DropDownListModule
    ]
})
export class LecturesModule {}
