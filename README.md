# burmese-voice

A speech command ai library for Burmese language

Read the documentation [Here](https://burmese-voice.vercel.app/).

The library currently can classify **4** burmese words by voice and one additional noise.
The voices are
- Go (သွား)
- Stop (ရပ်)
- Left (ဘယ်)
- Right (ညာ)
- On (ဖွင့်)
- Off (ပိတ်)
- Background Noise 


## Using BurmeseVoice Model

```js
  let burmeseVoice;

       async function main(){
        const URL = "http://localhost:8000/models/"; // URL must be absolute URL
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