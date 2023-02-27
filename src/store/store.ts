import { AppState } from 'types';
import { EventBus } from 'utils/event-bus';
import { StoreEvents } from 'constants';
import { defaultStore } from './default-store';

class Store extends EventBus {
  private _state: AppState = {} as AppState;

  constructor(state: AppState) {
    super();
    this._state = state;
  }

  public getState(): AppState {
    return this._state;
  }

  clearError() {
    this.setState({ errorMessage: '' });
  }

  public setState(state: Partial<AppState>) {
    const nextState = { ...this._state, ...state };
    const prevState = this._state;

    this._state = { ...nextState };

    this.emit(StoreEvents.Updated, prevState, nextState);
  }
}

export default new Store(defaultStore);

export { Store };
