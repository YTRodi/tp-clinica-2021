interface IBuilder<T> {
  build(): T;
}

export abstract class BuilderTemplate<T> implements IBuilder<T> {
  protected _model: T;

  constructor() {
    this._model = this.initialize();
  }

  public build(): T {
    return this._model;
  }

  protected abstract initialize(): T;
}
