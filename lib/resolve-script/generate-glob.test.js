var path = require('path')

module.exports = {
  beforeEach: function () {
    this.subject = require('./generate-glob')
    this.root = path.resolve('test/fixtures/user-scripts')
  },
  fileInADir: function () {
    assert.equal(this.subject(this.root, 'foo:bar'), path.join(this.root, '/foo/bar') + '*')
  },
  nonExistentFile: function () {
    assert.equal(this.subject(this.root, 'fake:stuff'), path.join(this.root, '/fake/stuff') + '*')
  },
  dirWithNoIndex: function () {
    assert.equal(this.subject(this.root, 'baz'), path.join(this.root, '/baz/') + '*')
  },
  dirWithAnIndexFile: function () {
    assert.equal(this.subject(this.root, 'car'), path.join(this.root, '/car/index') + '*')
  },
  dirWithADirNamedIndex: function () {
    assert.equal(this.subject(this.root, 'dog'), path.join(this.root, '/dog/') + '*')
  }
}
