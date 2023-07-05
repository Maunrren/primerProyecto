import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpositorLibrosComponent } from './expositor-libros/expositor-libros.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CreacionLibroComponent } from './creacion-libro/creacion-libro.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guards';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

import { ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CartaLibroComponent } from './carta-libro/carta-libro.component';
import { LibroService } from './services/libro.service';
@NgModule({
  declarations: [
    AppComponent,
    ExpositorLibrosComponent,
    CreacionLibroComponent,
    LoginComponent,
    CartaLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers: [AuthGuard,LibroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
