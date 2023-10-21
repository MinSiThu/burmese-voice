
class BurmeseVoice{
    constructor(modelURL,metadataURL){
        this.modelURL = modelURL;
        this.metadataURL = metadataURL;
        this.model;
    }

    async load(){
        this.model = await tf.loadLayersModel(this.model);
        this.model.summary();
    }
}

export default BurmeseVoice;