var should = require('should');
var fs = require('fs');
var parser = require('../../lib/lifts/parser');
var parse = require('../../lib/resorts/snowshoe');

/*global describe, it */
describe('parse snnowshoe', function() {

  it('should return lift status', function(done) {
    var stream = fs.createReadStream(__dirname + '/example/snowshoe.html');
    stream.on('error', done);
    stream.pipe(parser(parse, function(err, status) {
      var expected = {
       'Flying Eagle': 'closed',
       'Cascade': 'open',
       'Mountaineer': 'open',
       'Cubb Run': 'open',
       'Magic Carpet': 'open',
       'Tow Rope': 'closed',
       'Ballhooter': 'open',
       'Grabhammer': 'closed',
       'Skidder': 'open',
       'Powder Monkey': 'open',
       'Powderidge': 'open',
       'Soaring Eagle Express': 'closed',
       'Western Express': 'open',
       'Wonder Carpet': 'open'
      };
      should.exist(status);
      status.should.eql(expected);
      done(err);
    }));
  });
});
