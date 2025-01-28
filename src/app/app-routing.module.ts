import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'crear-cuenta',
    loadChildren: () => import('./crear-cuenta/crear-cuenta.module').then( m => m.CrearCuentaPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'xbox',
    loadChildren: () => import('./xbox/xbox.module').then( m => m.XboxPageModule)
  },
  {
    path: 'xboxone',
    loadChildren: () => import('./xboxone/xboxone.module').then( m => m.XboxonePageModule)
  },
  {
    path: 'xboxse',
    loadChildren: () => import('./xboxse/xboxse.module').then( m => m.XboxsePageModule)
  },
  {
    path: 'ps2',
    loadChildren: () => import('./ps2/ps2.module').then( m => m.Ps2PageModule)
  },
  {
    path: 'ps3',
    loadChildren: () => import('./ps3/ps3.module').then( m => m.Ps3PageModule)
  },
  {
    path: 'ps4',
    loadChildren: () => import('./ps4/ps4.module').then( m => m.Ps4PageModule)
  },
  {
    path: 'gba',
    loadChildren: () => import('./gba/gba.module').then( m => m.GbaPageModule)
  },
  {
    path: 'nintendosw',
    loadChildren: () => import('./nintendosw/nintendosw.module').then( m => m.NintendoswPageModule)
  },
  {
    path: 'nintendods',
    loadChildren: () => import('./nintendods/nintendods.module').then( m => m.NintendodsPageModule)
  },
  {
    path: 'wii',
    loadChildren: () => import('./wii/wii.module').then( m => m.WiiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
