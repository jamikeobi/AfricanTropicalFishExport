import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials = [
    {
      clientName: 'Kim Jung Un',
      clientProfession: 'Aquaculture Specialist',
      stars: 5,
      testimonialText: 'Working with Tropical African FishExport has been instrumental in expanding our market reach. Their dedication to quality and customer satisfaction is unmatched. Thanks to their expertise, our exports have seen significant growth.',
      clientImage: '../../../assets/img/japan.jpg' // Example path to image
    },
    {
      clientName: 'Abdul Azeez',
      clientProfession: 'Marine Products Trader',
      stars: 5,
      testimonialText: 'I have been partnering with Tropical African FishExport for years, and they continue to impress me with their professionalism and commitment to excellence. Their support has been crucial in navigating the complexities of international fish export regulations.',
      clientImage: '../../../assets/img/arab.jpg' // Example path to image
    },
    {
      clientName: 'Christopher Davids',
      clientProfession: 'Fisheries Manager',
      stars: 5,
      testimonialText: 'Tropical African FishExport has been a trusted partner in promoting sustainable aquaculture practices. Their innovative solutions have not only improved our efficiency but also enhanced the quality of our fish exports. I highly recommend their services.',
      clientImage: '../../../assets/img/US.jpg' // Example path to image
    },
    // Add more testimonials as needed
  ];
}
