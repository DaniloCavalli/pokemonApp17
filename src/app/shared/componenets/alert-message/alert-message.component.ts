import { Component, inject } from '@angular/core';
import { PokemonStore } from '../../../store/pokemon.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-message.component.html',
  styleUrl: './alert-message.component.scss'
})
export class AlertMessageComponent {

  store = inject(PokemonStore);

  alertMessage = this.store.alertMessage;

}
