export interface Step {
    index: number;
    description: string;
  }
  

  interface ImageObject {
    imageSrc: string;
    imageAlt: string;
    type: string;
    size: string;
}

export interface Images {
    headerFigure: {
        sm: ImageObject;
        md: ImageObject;
        xl: ImageObject;
    };
}