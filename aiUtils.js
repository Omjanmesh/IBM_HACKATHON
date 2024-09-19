const { PythonShell } = require('python-shell');

function parseResume(resumePath, callback) {
  const options = {
    args: [resumePath]
  };
  PythonShell.run('resume_parser.py', options, (err, results) => {
    if (err) throw err;
    callback(JSON.parse(results[0]));
  });
}

module.exports = { parseResume };
