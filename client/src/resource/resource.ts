export interface IResource {
    name: string;

    load(): Promise<IResource>;
}
