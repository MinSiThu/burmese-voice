---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **Burmese Voice in less than 5 minutes**.

## Getting Started

First, install burmese-voice in browser with the following script tag.
```html
<script src="https://www.unpkg.com/burmese-voice"></script>
```

### Download the model package.

Download the model package [here](/).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Burmese Voice ai</title>
  </head>
  <body>
      <h1>Burmese Voice</h1>
      <button type="button" onclick="init()">Start</button>
      <button type="button" onclick="stop()">Stop</button>
      <div id="label-container"></div>
      <script src="https://www.unpkg.com/burmese-voice"></script>
      <script>
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

      </script>
  </body>
</html>
```