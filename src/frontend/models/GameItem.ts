export enum GameItemStatus {
    Open,
    Close,
}

export class GameItem {
    constructor(
        public id: number,
        public divId: string,
        public image: string,
        public status: GameItemStatus = GameItemStatus.Close,
        public isMatched: boolean = false,
        public imageElement: HTMLImageElement | null = null
    ) {
        this.id = id;
        this.divId = divId;
        this.image = image;
        this.status = status;
        this.isMatched = isMatched;
        this.imageElement = imageElement;
    }
}
