export class GameStreamItem {
    constructor(
        id,
        category,
        title,
        subtitle,
        description,
        images,
        type,
        tags,
        author,
        replayBundleUrlJson,
        duration,
        isDownloadable,
        isStreamable,
        version
    ){

        this.id = id;
        this.category = category;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.images = images;
        this.type = type;
        this.tags = tags;
        this.author = author;
        this.replayBundleUrlJson = replayBundleUrlJson;
        this.duration = duration;
        this.isDownloadable = isDownloadable;
        this.isStreamable = isStreamable;
        this.version = version;    
    }
}
