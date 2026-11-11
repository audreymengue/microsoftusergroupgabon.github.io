import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgClass, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'muggaproject';
  rules = [
        { title: 'Respect mutuel', description: 'Chaque membre doit traiter les autres avec respect, quelles que soient leurs opinions, leurs compétences ou leur origine.' },
        { title: 'Environnement inclusif', description: 'La communauté accueille toute personne intéressée par la technologie, sans discrimination ni jugement.' },
        { title: 'Tolérance zéro pour le harcèlement', description: 'Aucun comportement intimidant, insultant, discriminatoire ou agressif n\'est accepté.' },
        { title: 'Communication constructive', description: 'Les échanges doivent rester calmes, courtois et orientés vers la collaboration.' },
        { title: 'Partage responsable', description: 'Les membres sont encouragés à partager des idées et des ressources de manière honnête.' },
        { title: 'Protection de la vie privée', description: 'Les informations personnelles des membres ne doivent pas être diffusées sans consentement.' },
        { title: 'Respect du cadre légal', description: 'Respect des lois en vigueur et des règles des partenaires.' },
        { title: 'Contributions positives', description: 'Chaque membre est encouragé à contribuer à l\'évolution de la communauté.' },
        { title: 'Sécurité avant tout', description: 'Les comportements dangereux ou nuisibles sont interdits.' },
        { title: 'Responsabilité personnelle', description: 'Chaque membre accepte ce code de conduite et se tient responsable de ses actions.' }
    ];

    partners = [
        { name: 'ANINF', logo: '/assets/logo_ANINF.png' },
        { name: 'Gabtrotter', logo: '/assets/gabtrotter3.jpeg' },
        { name: 'GDG Libreville', logo: '/assets/gdglbv.png' },
        { name: 'Angular Libreville', logo: '/assets/angularlbv.jpeg' }
    ];

    jobs = [
        { title: 'Frontend Developer', company: 'Tech Corp', type: 'Remote', description: 'Rejoignez une équipe internationale pour construire des interfaces modernes avec React ou Angular.', contract: 'Full-time', level: '2+ ans expérience', location: 'Remote' },
        { title: 'Data Analyst', company: 'Data Insights', type: 'Hybrid', description: 'Analyse de données, création de dashboards et aide à la prise de décision.', contract: 'Contract', level: 'Junior / Mid', location: 'Afrique' },
        { title: 'Cloud Engineer', company: 'Microsoft Partner', type: 'On-site', description: 'Déploiement et gestion d\'infrastructures cloud sur Azure.', contract: 'Full-time', level: 'Senior', location: 'Libreville' }
    ];

    faqs = [
        { question: '📌 Comment puis-je participer à un événement ?', answer: 'Vous pouvez vous inscrire à un événement en visitant notre site web et en remplissant le formulaire d\'inscription disponible sur la page de l\'événement.' },
        { question: '📌 Quels types d\'événements organisez-vous ?', answer: 'Nous organisons divers événements, y compris des ateliers, des conférences, des hackathons et des meetups pour favoriser l\'innovation et le partage de connaissances.' },
        { question: '📌 La participation aux événements est-elle gratuite ?', answer: 'Certains événements sont gratuits, tandis que d\'autres nécessitent une inscription payante. Consultez les détails de chaque événement pour plus d\'informations.' },
        { question: '📌 Comment puis-je devenir bénévole pour vos événements ?', answer: 'Si vous souhaitez devenir bénévole, vous pouvez remplir notre formulaire de candidature sur notre site web ou nous contacter directement.' }
    ];
}

