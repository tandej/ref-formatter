export class CommonData {
  public asString(): string {
    throw new Error('Lol you thought I would actually proactively implement');
  }

  public static fromString(plainText: string): CommonData {
    throw new Error('Again');
  }
}
