import {formatter} from './formatter';
import {commonCacheFormat} from './commonCache';
import {jsx} from '@emotion/react';

export class MLA implements formatter {
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
