import {commonCacheFormat} from './commonCache';
import {formatter} from './formatter';
import {jsx} from '@emotion/react';

export class bibTeX implements formatter {
  public loadFromCache(cache: commonCacheFormat): void {
    throw new Error('Method not implemented.');
  }

  public cacheState(): commonCacheFormat {
    throw new Error('Method not implemented.');
  }

  public getFormattedText(): string {
    throw new Error('Method not implemented.');
  }

  public getUIElements(): jsx.JSX.Element {
    throw new Error('Method not implemented.');
  }
}
