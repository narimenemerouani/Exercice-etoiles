import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule],
})

export class AppComponent implements OnInit {
  rating: number = 3; // Note initiale
  maxRating: number = 5; // Nombre maximum d'étoiles
  stars: number[] = [];
  hoverRating: number | null = null;
  
  ngOnInit(): void {
    // Créer un tableau avec le nombre d'étoiles souhaité
    this.stars = Array(this.maxRating).fill(0).map((_, i) => i + 1);
  }
  
  setRating(value: number): void {
    this.rating = value;
    console.log(`La note a été mise à jour: ${this.rating}`);
    // Logique supplémentaire (sauvegarde, etc.) pourrait être ajoutée ici
  }
  
  setHoverRating(value: number | null): void {
    this.hoverRating = value;
  }
  
  getStarClasses(star: number): string {
    const currentRating = this.hoverRating !== null ? this.hoverRating : this.rating;
    const baseClasses = 'text-2xl cursor-pointer transition-transform duration-200 hover:scale-110';
    
    return star <= currentRating 
      ? `${baseClasses} text-yellow-400` // étoile remplie
      : `${baseClasses} text-gray-300`; // étoile vide
  }
}
