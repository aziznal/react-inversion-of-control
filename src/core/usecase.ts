export abstract class Usecase<T> {
    abstract execute: () => T;
}
