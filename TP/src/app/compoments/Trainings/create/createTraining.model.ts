
export interface CreateTraining {
    id?: number
    nome:string
    dataInicio: Date
    distancia: number
    tempoPre: number
    estado: string

}



export interface CreateTrainingA {
    name: string,
    dateTime: Date,
    estimatedTime: number,
    distance: number,
    cidade: string, 
    localidade : string
    lugar : string
    trainingTypeId: number

}

export interface Localidade{
    cidade : string
    localidade : string
    lugar : string
}