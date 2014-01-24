var fs = require('fs');

for (i = 1; i <= 5; i++) {
  var file = "async" + i + ".markdown";
  fs.writeFile(file, "###Async", function(err, out) {
    console.log(out);
  });
}