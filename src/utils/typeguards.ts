// src/utils/typeguards.ts
import type { Service } from '@data/services';
import type { Location } from '@data/locations';

export function isService(item: Service | Location): item is Service {
  return (item as Service).shortDescription !== undefined;
}

export function isLocation(item: Service | Location): item is Location {
  return (item as Location).county !== undefined;
}
