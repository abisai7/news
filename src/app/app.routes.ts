import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'news', component: NewsComponent },
    { path: 'news/:id', component: NewsDetailComponent },
    { path: '**', redirectTo: '/login' }
];
