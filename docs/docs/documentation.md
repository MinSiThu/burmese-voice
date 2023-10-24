---
sidebar_position: 1
---

# Documentation

Burmese Voice latest API can be installed via the script tag.
```html
<script src="https://www.unpkg.com/burmese-voice"></script>
```

## BurmeseVoice constructor

#### BurmeseVoice(URL:string)
returns a BurmeseVoice Object

URL is the url of model directory.
URL must be exact URL, (not relative URL).

For example, if **http://localhost:8000/models/** is the location of model directory,
it must be set as arugment as complete URL.

allow protocol - **https, http, file**

```js
const URL = "http://localhost:8000/models/";
const burmeseVoice = new BurmeseVoice(URL);
```

## load()
returns a Promise

Load the model files, metadata and weights into the bowser.

```js
await burmeseVoice.load();
```

## listen(callback:function)
calls the browser microphone speaker, and listen the audio, and give result scores into the callback function.

```js
burmeseVoice.listen((result)=>{
            console.log(result);
            const voice = burmeseVoice.getBestResult(result.scores);
            console.log(voice);
        });
```

## stopListening()

stop the listen function activity
```js
burmeseVoice.stopListening();
```

## getBestResult(scores:Array)
get best Result from scores in listen callback function with {label, index} object
```js
burmeseVoice.listen((result)=>{
            console.log(result);
            const voice = burmeseVoice.getBestResult(result.scores);
            console.log(voice);
        });
```

## getLabels()
get labels available in the Burmese Voice AI.
```js
console.log(burmeseVoice.getLabels());
```