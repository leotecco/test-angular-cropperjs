import { Component, ViewChild, OnInit } from '@angular/core';
import { AngularCropperjsComponent } from 'angular-cropperjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('angularCropper') private angularCropper: AngularCropperjsComponent;
  private configCropperjs: Object = { aspectRatio: 1 };
  private styleImage: Object = { width: '300px', height: 'auto' };
  public imageUrl: String = '';
  public croppedImage: String = '';

  ngOnInit() { }

  changeImage($event) {
    try {
      const file: File = $event.target.files[0];
      const fileReader: FileReader = new FileReader();

      fileReader.onload = ($eventFileReader: any) => {
        this.imageUrl = '';
        setTimeout(() => { this.imageUrl = $eventFileReader.target.result; }, 0);
      };

      fileReader.readAsDataURL(file);
    } catch (error) {
      this.imageUrl = '';
    }
  }

  onCrop() {
    const base64Image: String = this.angularCropper.cropper.getCroppedCanvas().toDataURL();
    this.croppedImage = base64Image;
  }
}
