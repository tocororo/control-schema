
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ValidationErrors } from '@angular/forms';

import { InputControl } from '../input.control';
import { IdentifierValue } from './identifier-value';

/**
 * Represents a control that allows the writing of a identifier. 
 */
@Component({
    selector: 'input-identifier',
    templateUrl: '../text/text-input.component.html',
    styleUrls: ['../text/text-input.component.scss'],
    host: {
        '[style.minWidth]': 'content.minWidth',
        '[style.width]': 'content.width'
    }
})
export class InputIdentifierComponent extends InputControl implements OnInit
{
    /**
     * Returns a `FormControl` by default. 
     * It is used to initialized the `InputIdentifierComponent`'s `content.formControl` value by default. 
     */
    public static getFormControlByDefault(): FormControl
    {
        let res: FormControl = new FormControl('', [
            Validators.pattern('^[a-zA-Z\-\_]*$')
            //Validators.pattern(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/i)
        ]);

        return res;
    }

    public constructor()
    {
        super();
    }

    public ngOnInit(): void
    {
        /* Sets the default values. */
        this.init(IdentifierValue.identifier_Label, false, true);
    }

    /**
     * Returns an error string if the control is in an error state; otherwise, empty string. 
     */
    public getErrorMessage(): string
    {
        let validationErrors: ValidationErrors = this.content.formControl.errors;

        /* Shows the identifier errors. */
        if (validationErrors)
        {
            if (validationErrors[Validators.required.name])
            {
                return this.validationError_required;
            }
            else
            {
                /* It is `validationErrors[Validators.pattern.name]`. */
                return 'The identifier is wrong.';
            }
        }

        return '';
    }
}
