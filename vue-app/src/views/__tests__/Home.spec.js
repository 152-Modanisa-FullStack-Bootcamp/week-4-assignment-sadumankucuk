import {shallowMount} from "@vue/test-utils";
import Home from "@/views/Home";
import VideoList from "@/components/VideoList";

describe("HomePage.vue", () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(Home)
    })

    test("should component exists", () => {
        expect(wrapper.exists()).toBeTruthy()
    })

    test("video list exists", () => {
        const videoList = wrapper.findComponent(VideoList)
        expect(videoList.exists()).toBeTruthy()
    })
})