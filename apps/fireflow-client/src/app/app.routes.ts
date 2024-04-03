import { Route } from '@angular/router';
import { SqlGeneratorComponent } from './sql-generator/sql-generator.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: SqlGeneratorComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
