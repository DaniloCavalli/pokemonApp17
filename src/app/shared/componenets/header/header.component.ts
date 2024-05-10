import { AuthService } from './../../../features/auth/auth.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PokemonStore } from '../../../store/pokemon.store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink, 
    RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  store = inject(PokemonStore);
  authService = inject(AuthService);

  onLogOut(){
    this.authService.logout()
  }

}
