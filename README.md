# sneaky-stalin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Camera not working?
From [Stack Overflow](https://stackoverflow.com/questions/34165614/navigator-mediadevices-getusermedia-is-not-working-and-neither-does-webkitgetuse):

As per new chrome update (From Google Chrome 47), getUserMedia() is no longer supported in chrome browser over http:// (Unsecure Origin) , It will work on https:// (Secure Origin)

For development purpose,

1.localhost is treated as a secure origin over HTTP, so if you're able to run your server from localhost, you should be able to test the feature on that server.

2.You can run chrome with the --unsafely-treat-insecure-origin-as-secure="http://example.com" flag (replacing "example.com" with the origin you actually want to test), which will treat that origin as secure for this session. Note that you also need to include the --user-data-dir=/test/only/profile/dir to create a fresh testing profile for the flag to work.
