import { isPlatformBrowser } from "@angular/common";
import { PLATFORM_ID, inject } from "@angular/core";

export const KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_ID: 'user_id'
}

export const storageLength = (): any => {
  if (isPlatformBrowser(inject(PLATFORM_ID))) {
  return localStorage.length;
}
};

// get all items from local storage
export const storageGetAll = (): any => {
  if (isPlatformBrowser(inject(PLATFORM_ID))) {
  let items: any = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i) as string;
    items[key] = localStorage.getItem(key);
  }
  return items;
}
};

// set item
export const storageSetItem = (
  key: string,
  value: string
): any => {
  if (isPlatformBrowser(inject(PLATFORM_ID))) {
  localStorage.setItem(key, value);
  return { key, value };
  }
};

// set multiple items at once 
export const storageSetItems = (
  items: any
): any => {
  if (isPlatformBrowser(inject(PLATFORM_ID))) {
  for (let key in items) {
    localStorage.setItem(key, JSON.stringify(items[key]));
  }
  return Object.keys(items);
}
};

// get item
export const storageGetItem = (key: string): any => {
  if (isPlatformBrowser(inject(PLATFORM_ID))) {
  return localStorage.getItem(key) as string
  }
};

export const storageRemoveItem = (key: string) => {

  if (isPlatformBrowser(inject(PLATFORM_ID))) {
  localStorage.removeItem(key);
  }
};

export const storageRemoveAccessToken = () => {
  if (isPlatformBrowser(inject(PLATFORM_ID))) {
  localStorage.removeItem(KEYS.ACCESS_TOKEN);
  }
};

export const storageRemoveRefreshToken = () => {
  if (isPlatformBrowser(inject(PLATFORM_ID))) {
  localStorage.removeItem(KEYS.REFRESH_TOKEN);
  }
};