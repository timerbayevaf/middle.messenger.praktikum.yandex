import { AIcreateElement } from 'core';
import { EventBus } from 'utils/event-bus';
import { reconcile } from './reconcile';
import { BlockProps } from './types';

class Block<P extends {}, S extends {}> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  public eventBus: () => EventBus;
  protected props: P;
  protected state: S = {} as S;
  private _element: HTMLElement | null = null;
  private rootInstance: JSX.Instance | null = null;

  get element() {
    return this._element;
  }

  constructor(props: P) {
    const eventBus = new EventBus();

    this.props = this._makePropsProxy(props);
    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  _componentDidUpdate(oldProps: BlockProps, newProps: BlockProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: BlockProps, newProps: BlockProps) {
    return oldProps !== newProps;
  }

  setProps(nextProps: P) {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  }

  _createResources() {
    this._element = this._createDocumentElement();
  }

  private _init() {
    this._createResources();
    this.init();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  init() {}

  _render() {
    const block = this.render();
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    const prevInstance = this.rootInstance;
    const nextInstance = reconcile(this.element!, prevInstance, block);
    this.rootInstance = nextInstance;
  }

  render(): JSX.Element {
    return AIcreateElement('template', this.props);
  }

  getContent() {
    return this.rootInstance;
  }

  componentdidUnmount() {}

  _createDocumentElement(type = 'div') {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(type);
  }

  private _makePropsProxy(props: P): P {
    return new Proxy(props, {
      get: (target, prop: string) => {
        const value = target[prop as keyof P];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, prop: string, value) => {
        const oldTarget = { ...target };
        target[prop as keyof P] = value;
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Отказано в доступе');
      },
    });
  }

  setState(state: S): S {
    return new Proxy(state, {
      get: (target, prop: string) => {
        const value = target[prop as keyof S];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, key: string, value) => {
        const oldTarget = { ...target };
        target[key as keyof S] = value;
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Отказано в доступе');
      },
    });
  }
}

export { Block };
