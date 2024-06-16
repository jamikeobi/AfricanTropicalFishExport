import { Component , ElementRef, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit{
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    const video = this.videoElement.nativeElement;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play().catch(error => {
            console.error('Video playback failed:', error);
            // Show a play button or other UI to request user interaction
            this.showPlayButton();
          });
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(video);
  }

  showPlayButton() {
    const button = document.createElement('button');
    button.textContent = 'Play Video';
    button.style.position = 'absolute';
    button.style.top = '50%';
    button.style.left = '50%';
    button.style.transform = 'translate(-50%, -50%)';
    button.style.padding = '10px 20px';
    button.style.zIndex = '10';
    button.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.onclick = () => {
      const video = this.videoElement.nativeElement;
      video.muted = false; // Unmute the video if desired
      video.play().then(() => {
        button.remove();
      }).catch(error => {
        console.error('Video playback failed:', error);
      });
    };
    document.body.appendChild(button);
  }
}
