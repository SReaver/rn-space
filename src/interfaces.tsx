export interface ISpace {
    copyright?: string,
    date: string,
    explanation: string,
    hdurl: string,
    media_type: string,
    service_version: string,
    title: string,
    url: string
}

export interface ISpaceContext {
    space: ISpace,
    setSpace: (space: ISpace) => void
}

export interface ICard {
    item: ISpace,
    style: {
        marginLeft?: number,
        marginRight?: number
    }
}