<template>
  <div class="video-list-container">
    <VideoListItem
        v-for="video in videos"
        :key="video.id"
        :video="video"
        :data-id="video.id"
    />
  </div>
</template>

<script>
import VideoListItem from "@/components/VideoListItem";
import API from "@/api";

export default {
  name: "VideoList",
  components: {VideoListItem},
  data() {
    return {
      videos: [],
    }
  },
  async created() {
    try {
      this.videos = await API.getVideoList()
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style scoped>
.video-list-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
</style>