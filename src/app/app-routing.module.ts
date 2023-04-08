import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
        {
            path: "auth",
            loadChildren: () => import("./authentication/authentication.module").then(m => m.AuthenticationModule), //lazyLoading
          },
    //   {
    //     path: 'subscription',
    //     component:SubscriptionComponent
    //   },
    //   {
    //     path: 'subscription-success',
    //     component:SubscriptionSuccessComponent
    //   },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
