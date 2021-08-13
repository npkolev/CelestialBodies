type Planet = {
    name: string;
    img: string;
    age: number;
    mass: string;
};

export interface Bodies {
    bodies: Array<Planet>;
    count: number;
    loading: boolean;
}

export interface ListData {
    data: Bodies;
}
