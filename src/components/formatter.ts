import {commonCacheFormat} from './commonCache';
import {jsx} from '@emotion/react';

export interface formatter {
  loadFromCache(cache: commonCacheFormat): void;

  cacheState(): commonCacheFormat;

  getFormattedText(): string;

  getUIElements(): jsx.JSX.Element;
}
