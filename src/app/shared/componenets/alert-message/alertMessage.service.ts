import { Injectable, inject } from "@angular/core";
import { AlertType, PokemonStore } from "../../../store/pokemon.store";



@Injectable({ providedIn: 'root' })
export class AlertMessageService {
            

    store = inject(PokemonStore);

    showSuccessMessage( message: string, type: AlertType ){
        this.store.setAlertMessage(message, type);
    }


}