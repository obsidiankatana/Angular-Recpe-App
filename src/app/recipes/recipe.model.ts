export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  // When using/calling this constructer we want to make sure that these variables are entered to be considered a valid recipe item
  constructor(name: string, desc: string, imgPath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imgPath;
  }
}
