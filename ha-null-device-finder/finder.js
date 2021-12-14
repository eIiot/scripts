const fs = require('fs');

const json = JSON.parse(fs.readFileSync('./devices.json','utf8'));

const entities = json.data.entities;

for (let i = 0; i < entities.length; i++) {
    const entity = entities[i];

    if (entity.entity_id == null || entity.entity_id == undefined || !entity.entity_id.includes('.')) {
        console.log(entity);
    };
};