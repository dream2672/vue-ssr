const app = require("../server/ssr");

const port = process.env.PORT || 3000;

console.log('port', port);
app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
