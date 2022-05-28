export interface IAvailableTrainings{
    trainId: number,
    type: string,
    typeId: number,
    place: string,
    placeId: number,
    dateTime: Date,
    estimatedTime: number,
    distance: number
}

export interface IInviteTraining{
    trainingId: number,
    athleteId: number
}

export interface INeededInfo{
    athleteId: number,
    username: string,
    place: string,
    contact: number,
    clubName: string,
    clubId: number
}