export interface ILoader {
    reset(): void;
    load(value: { url: string }): void;
}
