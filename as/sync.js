var fs = require('fs');

for (var i = 1; i <= 5; i++) {
  var file = "sync" + i + ".markdown";
  var out = fs.writeFileSync(file, "###Sync");
  console.log(out);
}