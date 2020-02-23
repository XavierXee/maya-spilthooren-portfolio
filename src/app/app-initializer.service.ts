import { Inject, Injectable } from '@angular/core';
import { ContentService } from './services/content.service';
// import { InitializrItemModel, InitializrModel } from './models/initializr.model';

@Injectable()
export class AppInitializerService {
  private contentData: any;

  constructor(
    private contentService: ContentService
  ) {}

  initApplication(): Promise<any> {
    return new Promise(
      async (resolve: any, reject: any): Promise<any> => {
        try {
          this.contentService.getContentData().subscribe((data: any) => {
            this.contentData = data;
            resolve(data);
          });
        } catch (error) {
          reject(error);
        }
      }
    );
  }

  getData(): any {
    return this.contentData;
  }
}
