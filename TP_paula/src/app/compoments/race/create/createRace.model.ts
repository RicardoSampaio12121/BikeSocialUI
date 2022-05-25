export interface CreateRace {
    id?: number
    nome:string
    dataInicio: Date
    distanca: number
    tempoPre: number
    federacao: string
    estado: string

}

export interface Localidade{
    cidade? : string
    localidade? : string
    lugar? : string
}