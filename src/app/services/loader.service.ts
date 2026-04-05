import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loadingState: boolean = false;
  public set setloadingState(state: boolean) {
    this.loadingState = state;
  }

  public get getLoadingState(): boolean {
    return this.loadingState;
  }

  constructor() {}
}
