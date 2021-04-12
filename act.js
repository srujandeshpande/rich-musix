const Discord = require('discord-game');

const isRequireDiscord = true;
Discord.create('806224932982882324', isRequireDiscord);

// All property are optional
const activity = {
  details: 'Songs',
  state: 'Albums',
  assets: {
    largeImage: 'applemusic',
    largeText: 'Large',
    samllImage: 'applemusic',
    smallText: 'Small'
  },
  timestamps: {
    startAt: new Date(),
    endAt: new Date()
  },
  secrets: {
    match: 'match',
    join: 'join',
    spectate: 'spectate'
  },
  party: {
    id: 'id',
    currentSize: 1,
    maxSize: 5
  }
}
const start_at = new Date();
Discord.Activity
       .update(activity)
       .then(function() { console.log('Rich Presence updated') });

setInterval(function() {
  Discord.runCallback(); // => true
}, 1000/60)