
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

async function main(){
    const burmeseVoice = new BurmeseVoice("http://localhost:8000/models/model.json");
    console.log(burmeseVoice);
    const model = await burmeseVoice.load();
}

main();