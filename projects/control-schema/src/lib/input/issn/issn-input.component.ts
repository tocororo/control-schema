
import { Component, OnInit } from '@angular/core';

import { IssnType_Abbreviation, IssnValue } from './issn-value';

import { InputControl } from '../input.control';
import { FormControl } from '@angular/forms';

/**
 * Represents a control that allows the writing of an ISSN. 
 * An ISSN (International Standard Serial Number) is an 8-digit code used to identify 
 * newspapers, journals, magazines and periodicals of all kinds and on all media–print 
 * and electronic. For more information follow the link: https://www.issn.org/understanding-the-issn/what-is-an-issn/. 
 */
@Component({
	selector: 'input-issn',
	templateUrl: './issn-input.component.html',
	styleUrls: ['./issn-input.component.scss'],
	host: {
        '[style.minWidth]': 'content.minWidth',
        '[style.width]': 'content.width'
	}
})
export class InputIssnComponent extends InputControl implements OnInit
{
	/* Note: this control works well with a 'width' = '310px' or '285px'. */

    /**
     * Returns a `FormControl` by default. 
     * It is used to initialized the `InputIssnComponent`'s `content.formControl` value by default. 
     */
    public static getFormControlByDefault(): FormControl
    {
		//TODO: Maybe, it will change. 
		const res: FormControl = new FormControl('', [ ]);
		
		return res;
    }

	public constructor()
	{
		super();
	}

	public ngOnInit(): void
	{
        /* Sets the default values. */
		this.init(IssnType_Abbreviation.ISSN, true, true);
	}

	/**
	 * Returns the control's default value. 
	 */
    public get getDefaultValue(): any
    {
		return IssnValue.defaultIssnValue;
    }
}