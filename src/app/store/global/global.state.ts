export interface Localisation{
  lat: number;
  lng: number;
}

export interface GlobalState {
  isAppLoading: boolean;
  language: string;
  localisation: Localisation;
}
