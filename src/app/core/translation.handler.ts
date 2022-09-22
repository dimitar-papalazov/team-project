import { TranslateService } from '@ngx-translate/core'
import { Injectable } from '@angular/core'

// note: this is now a service, since it needs other services as well.
// it is instantiated at the level of app.module to make sure the constructor is called for the translate service

@Injectable({ providedIn: 'root' })
export class TranslationHandler {

    private static _translate: TranslateService

    constructor(translate: TranslateService) {
        TranslationHandler._translate = translate
    }
    public static translate(value: string) {
        return this._translate.instant(value)
    }
}