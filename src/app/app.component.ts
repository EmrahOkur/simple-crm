import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink  } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,MatToolbarModule,MatSidenavModule,MatIconModule, RouterOutlet, RouterLink,MatButtonModule,FormsModule,MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-crm';
}
