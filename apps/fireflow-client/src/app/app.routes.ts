import { Route } from '@angular/router';
import { SqlGeneratorComponent } from './sql-generator/sql-generator.component';
import { AboutComponent } from './pages/about/about.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: SqlGeneratorComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
