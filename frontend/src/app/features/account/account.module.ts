import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountComponent } from './account.component';
import { AccountService } from './account.service';
import { EditProfileDialogComponent } from './components/edit-profile-dialog/edit-profile-dialog.component';
import { EditProfileDialogService } from './components/edit-profile-dialog/service/edit-profile-dialog.service';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
  },
];

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [RouterModule],
  declarations: [AccountComponent, EditProfileDialogComponent],
  providers: [EditProfileDialogService, AccountService],
})
export class AccountModule {}
