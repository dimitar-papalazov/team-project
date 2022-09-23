import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app/app.component";
import { CoreModule } from "./core/core.module";
import { AuthGuard } from "./core/guards/auth/auth.guard";
import { OverlayComponent } from "./features/overlay/overlay.component";
import { LoaderComponent } from "./shared/loader/loader.component";
import { LoaderService } from "./shared/services/loader.service";
import { ResponsiveListener } from "./shared/services/responsive-listener.service";
import { SharedModule } from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    OverlayComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    AppRoutingModule,

    SharedModule,
    CoreModule
  ],
  exports: [
    LoaderComponent
  ],
  bootstrap: [AppComponent],
  providers: [LoaderService, ResponsiveListener, AuthGuard]
})
export class AppModule {
}