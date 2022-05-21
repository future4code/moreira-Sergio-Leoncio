export class Products {
  static getId: string;
  constructor(
    private id: number,
    private name: string,
    private tags: string[]
  ) {}

  public getId(): number {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getTags(): string[] {
    return this.tags;
  }
}
