import { LayoutModule } from "@angular/cdk/layout";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {A11yModule} from '@angular/cdk/a11y';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { OverlayModule } from "@angular/cdk/overlay";
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MatTooltipDefaultOptions, MAT_TOOLTIP_DEFAULT_OPTIONS } from "@angular/material/tooltip";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from "@angular/material/snack-bar";
import { getPaginatorIntlEn } from "./paginator-intl-en";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { JwtInterceptor } from "./interceptors/jwt.interceptor";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateModule } from "@ngx-translate/core";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const tooltipDefaults: MatTooltipDefaultOptions = {
    showDelay: 1000,
    hideDelay: 0,
    touchendHideDelay: 1000,
};

@NgModule({
    imports: [
        CommonModule,
        TranslateModule
    ],
    exports: [

        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        LayoutModule,
        A11yModule,
        CdkAccordionModule,
        ClipboardModule,
        CdkStepperModule,
        CdkTableModule,
        CdkTreeModule,
        DragDropModule,
        OverlayModule,
        PortalModule,
        ScrollingModule,
        HttpClientModule,
        TranslateModule
    ], declarations: [
    ],
    providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptor,
          multi: true
        },
        { provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
          useValue: tooltipDefaults
        },
        { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
          useValue: {
            duration: 5000,
            verticalPosition: 'top',
          }
        },
        { provide: MatPaginatorIntl, useValue: getPaginatorIntlEn() }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {

}