import {commonCacheFormat} from './commonCache';
import {formatter} from './formatter';
import {jsx} from '@emotion/react';

export class yaml implements formatter {
  public loadFromCache(cache: commonCacheFormat): void {
    throw new Error('Method not implemented.');
  }

  public cacheState(): commonCacheFormat {
    throw new Error('Method not implemented.');
  }

  public getFormattedText(): string {
    return this.cacheState().asString();
  }

  public getUIElements(): jsx.JSX.Element {
    throw new Error('Method not implemented.');
  }
}
