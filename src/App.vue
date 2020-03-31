<template>
  <v-app>
    sneaky stalin
    <video autoplay></video>
  </v-app>
</template>

<script>
    var constraints = { audio: true, video: { width: 200, height: 200 } };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function(mediaStream) {
        var video = document.querySelector("video");
        video.srcObject = mediaStream;
        video.onloadedmetadata = function(e) {
          video.play();
          console.log(e);
        };
      })
      .catch(function(err) {
        console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.

export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>

<style>
video {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
</style>
