import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { OverlayComponent } from './features/overlay/overlay.component';
import { PageNotFoundComponent } from './features/pagenotfound/page-not-found.component';

const routes: Routes = [

  { path: 'auth',
       loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule),
       data: {title: 'Login'}
  },

  { path: '', component: OverlayComponent,
      // canActivate: [AuthGuard],
      children: [

      { path: '',   redirectTo: 'dashboard', pathMatch: 'full' },

      { path: 'dashboard',
       loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
      },

      { path: 'plan',
       loadChildren: () => import('./features/plan/plan.module').then(m => m.PlanModule)
      },

      { path: 'exercises',
       loadChildren: () => import('./features/exercises/exercises.module').then(m => m.ExercisesModule)
      },

      { path: 'workouts',
       loadChildren: () => import('./features/workouts/workouts.module').then(m => m.WorkoutsModule)
      },

      { path: 'account',
       loadChildren: () => import('./features/account/account.module').then(m => m.AccountModule)
      },
    ]
  },
  { path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }