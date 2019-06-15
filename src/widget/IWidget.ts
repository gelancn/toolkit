export interface IWidget {
    addWidget(value: new () => unknown): void;
    removeWidget(value: new () => unknown): void;
    getWidget(value: new () => unknown): unknown;
}
