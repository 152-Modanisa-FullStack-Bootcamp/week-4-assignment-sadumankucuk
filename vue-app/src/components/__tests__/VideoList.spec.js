import {shallowMount} from "@vue/test-utils";
import VideoList from "@/components/VideoList";
import API from "@/api";
import flushPromises from "flush-promises";
import VideoListItem from "@/components/VideoListItem";

jest.mock('@/api')

describe("VideoList.vue", () => {

    test("should component exists", () => {
        API.getVideoList.mockResolvedValue([])
        const wrapper = shallowMount(VideoList)
        expect(wrapper.exists()).toBeTruthy()
    })

    test("should render video list item components correctly", async () => {
        const mockResponse = [{
            id: 1,
            videoAddress: "https://www.youtube.com/watch?v=FXpIoQ_rT_c",
            coverImage: "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-cover.webp",
            hoverImage: "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-hover.webp",
            title: "Vue.js Course for Beginners [2021 Tutorial]",
            viewCount: 254,
            publishDateInMonth: 4,
            ownerImage: "https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s68-c-k-c0x00ffffff-no-rj",
            ownerName: "freeCodeCamp.org",
            description: "Learn Vue 3 by in this full course. Vue.js is an open-source model–view–view model front end JavaScript framework for building user interfaces and single-page applications.",
        }]
        API.getVideoList.mockResolvedValue(mockResponse)
        const wrapper = shallowMount(VideoList)
        await flushPromises()
        const videoListItem = wrapper.findAllComponents(VideoListItem)
        expect(videoListItem).toHaveLength(mockResponse.length)
    })

})