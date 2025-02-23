const express = require('express')
const app = express()
const fs = require('fs');

app.get('/', function (req, res) {

  let words = "";
  try {
    words = fs.readFileSync('src/words.txt', 'utf8');
    console.log(words);
  } catch (err) {
    console.error(err);
    words = `
    ____________   ____        __          __           __
   / ____/_  __/  / __ \____  / /_  ______/ /___  _____/ /__
  / /_    / /    / /_/ / __ \/ / / / / __  / __ \/ ___/ //_/
 / __/   / /    / ____/ /_/ / / /_/ / /_/ / /_/ / /__/ ,<
/_/     /_/    /_/    \____/_/\__, /\__,_/\____/\___/_/|_|
                             /____/
  `;
  }

  let result = []
  result.push(`<br /><pre>`);
  result.push(words);
  result.push(`</pre><br />`);
  res.header('X-LAGOON' , process.env.HOSTNAME )
  res.send(result.join("<br />"))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
