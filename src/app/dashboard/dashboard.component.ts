import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { inject } from '@angular/core';
import { ChartDataset } from 'chart.js';




@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, NgChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private firestore: Firestore = inject(Firestore);

  customersCount = 0;
  projectsCount = 0;
  totalRevenue = 0;

  chartData: ChartDataset<'bar'>[] = []; 
  chartLabels: string[] = [];             
  chartOptions = {                        
    responsive: true,
  };
  ngOnInit() {
    this.loadCustomers();
    this.loadProjects();
  }

  loadCustomers() {
    const customersCollection = collection(this.firestore, 'customers');
    collectionData(customersCollection, { idField: 'id' }).subscribe(customers => {
      this.customersCount = customers.length;

      // Simpler Chart: z.B. zufällige "Neue Kunden pro Monat"-Daten (zum Testen)
      this.chartLabels = ['Jan', 'Feb', 'März', 'April', 'Mai'];
      this.chartData = [{
        data: [5, 10, 8, 15, 7], // später kannst du echte Daten verwenden
        label: 'Neue Kunden'
      }];
    });
  }

  loadProjects() {
    const projectsCollection = collection(this.firestore, 'projects');
    collectionData(projectsCollection, { idField: 'id' }).subscribe(projects => {
      this.projectsCount = projects.length;
      this.totalRevenue = projects.reduce((sum, p: any) => sum + (p.totalValue || 0), 0);
    });
  }
}
