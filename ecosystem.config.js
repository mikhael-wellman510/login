module.exports = {
  apps : [
    {
      name   : "api-v1-master",
      script : "./app.js",
      exec_mode: "cluster",
      instances : "1",
    },
    {
      name   : "api-v1-replica",
      script : "./app.js",
      exec_mode: "cluster",
      instances : "1",
    }
  ]
}