import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { OverlayComponent } from './features/overlay/overlay.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './shared/services/loader.service';
import { ResponsiveListener } from './shared/services/responsive-listener.service';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { TitleService } from './core/title.service';
import { PlanComponent } from './features/plan/plan.component';
import { WorkoutsComponent } from './features/workouts/workouts.component';
import { ExercisesComponent } from './features/exercises/exercises.component';
import { AccountComponent } from './features/account/account.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PlanModule } from './features/plan/plan.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, OverlayComponent, LoaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),

    SharedModule,
    CoreModule,
    PlanModule
  ],
  exports: [LoaderComponent],
  bootstrap: [AppComponent],
  providers: [LoaderService, ResponsiveListener, AuthGuard, TitleService],
})
export class AppModule {}
