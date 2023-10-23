# burmese-voice

A speech command ai library for Burmese language


## Using BurmeseVoice Model

```js
  let burmeseVoice;

       async function main(){
        const URL = "http://localhost:8000/models/";
        burmeseVoice = new BurmeseVoice(URL)
        await burmeseVoice.load();
        console.log(burmeseVoice.getLabels());
       }

       function init(){
        burmeseVoice.listen((result)=>{
            console.log(result);
            const voice = burmeseVoice.getBestResult(result.scores);
            console.log(voice);
        });
       }

       function stop(){
        burmeseVoice.stopListening();
       }

       main();
```