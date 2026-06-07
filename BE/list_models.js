const https = require('https');

https.get('https://generativelanguage.googleapis.com/v1beta/models?key=API_KEY_PLACEHOLDER', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const json = JSON.parse(data);
    const models = json.models || [];
    console.log("Total models:", models.length);
    models.forEach(m => console.log(m.name, m.supportedGenerationMethods));
  });
}).on('error', (err) => console.log(err));
