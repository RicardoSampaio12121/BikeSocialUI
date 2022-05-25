export interface CreateRace {
    id?: number
    nome:string
    dataInicio: Date
    distancia: number
    tempoPre: number
    federacao: string
    estado: string

}

export interface Localidade{
    cidade : string
    localidade : string
    lugar : string
}