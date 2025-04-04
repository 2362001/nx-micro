import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '@testnx/shared';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
export interface Menu {
  key: number;
  title: string;
  icon: string;
  children?: Menu[];
  url?: string;
  isLeaf?: boolean;
  name?: string;
}

@Component({
  selector: 'app-leftnav',
  imports: [CommonModule, SharedModule,],
  templateUrl: './app.component.html',
  styleUrl: "./app.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent  {
  constructor(private messageService: NzMessageService) {}

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.messageService.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.messageService.error(`${info.file.name} file upload failed.`);
    }
  }
}
