export default class SpaceRequest {
    id: string;
    isMetatagsQuery: boolean;
    withBirdwatchPivots: boolean;
    withDownvotePerspective: boolean;
    withReactionsMetadata: boolean;
    withReactionsPerspective: boolean;
    withReplays: boolean;
    withScheduledSpaces: boolean;
    withSuperFollowsTweetFields: boolean;
    withSuperFollowsUserFields: boolean;
    constructor(id: string) {
        this.id = id;
        this.isMetatagsQuery = false;
        this.withBirdwatchPivots = false;
        this.withDownvotePerspective = false;
        this.withReactionsMetadata = false;
        this.withReactionsPerspective = false;
        this.withReplays = false;
        this.withScheduledSpaces = false;
        this.withSuperFollowsTweetFields = false;
        this.withSuperFollowsUserFields = false;
    }
}

