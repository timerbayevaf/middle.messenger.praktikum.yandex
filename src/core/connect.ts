import { Block } from './block';
import { StoreEvents } from 'constant';
import store from '../store/store';
import { AppState } from 'types';

function connect<T extends {}>(
  Component: new (props: T) => Block<T, {}>,
  mapStateToProps: (state: AppState) => Partial<AppState>
) {
  // используем class expression
  return class extends Component {
    constructor(props: T) {
      // не забываем передать все аргументы конструктора
      super({ ...props, ...mapStateToProps(store.getState()) });

      // подписываемся на событие
      store.on(StoreEvents.Updated, () => {
        // вызываем обновление компонента, передав данные из хранилища
        this.setProps({ ...props, ...mapStateToProps(store.getState()) });
      });
    }
  };
}

export { connect };
