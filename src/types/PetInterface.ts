interface IImage{
    id: string;
    url: string;
};

export interface IPet {
    description: string;
    id: number | string;
    life_span: string;
    name: string;
    image: IImage;
    origin: string;
    temperament: string;
};