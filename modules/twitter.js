function Twitter() {
  this.type = 'macintosh',
  this.color = 'red';
  this.getInfo = function() {
    return this.color + ' ' + this.type + ' apple';
  }
};

exports.Twitter = Twitter;