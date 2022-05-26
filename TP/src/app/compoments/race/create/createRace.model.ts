export interface CreateRace {
    id?: number
    nome:string
    dataInicio: Date
    distancia: number
    tempoPre: number
    estado: string

}

export interface CreateRaceA {
    description: string,
    distance: number,
    estimatedTime: number,
    dateTime: Date,
    FederationId: number, 
    RaceTypeId: number,
    cidade: string, 
    localidade : string
    lugar : string
    state: string
}

export interface Localidade{
    cidade : string
    localidade : string
    lugar : string
}

export interface Federacao{
    id: number
    name: string
}