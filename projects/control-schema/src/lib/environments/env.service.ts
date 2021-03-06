/*
 *   Copyright (c) 2020 Universidad de Pinar del Río "Hermanos Saíz Montes de Oca"
 *   All rights reserved.
 */

import { Injectable } from '@angular/core';

import { Params } from '../utils/helpers';

@Injectable({
    providedIn: 'root'
})
export class EnvService
{
    /**
     * A collection of key/value elements, where the keys are cachable URLs,
     * and the values are maximum cache ages in milliseconds.
     */
    public cachableUrls: Params<number>;

    public constructor()
    { }
}
