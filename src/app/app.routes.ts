import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";




const APP_ROUTES: Routes = [
    { path: "", component: LoginComponent},
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);