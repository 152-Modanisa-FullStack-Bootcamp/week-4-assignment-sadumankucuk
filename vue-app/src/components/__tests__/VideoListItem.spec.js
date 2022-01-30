import {shallowMount} from "@vue/test-utils";
import VideoListItem from "@/components/VideoListItem";

describe("VideoListItem.vue", () => {
    describe("exists check", () => {
        let wrapper
        beforeEach(() => {
            wrapper = shallowMount(VideoListItem, {
                propsData: {
                    video: {}
                }
            })
        })
        test("should component exists", () => {
            expect(wrapper.exists()).toBeTruthy()
        })

        test("should render video img", () => {
            const img = wrapper.find('#video-image')
            expect(img.exists()).toBeTruthy()
        })

        test("should render video title", () => {
            const title = wrapper.find(".video-title")
            expect(title.exists()).toBeTruthy()
        })

        test("should render owner img title", () => {
            const summary = wrapper.find("#video-owner-image")
            expect(summary.exists()).toBeTruthy()
        })

        test("should render owner name title", () => {
            const summary = wrapper.find(".video-subTitle")
            expect(summary.exists()).toBeTruthy()
        })
    })

    describe("check video image change", () => {
        const video = {
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
        }
        let wrapper
        beforeEach(() => {

            wrapper = shallowMount(VideoListItem, {
                propsData: {
                    video,
                    hover : false,
                }
            })
        })

        test("should change when the video image is hovered", async () => {
            const img = wrapper.find("#video-image")
            await img.trigger("mouseover")
            expect(img.attributes().src).toEqual(video.hoverImage)
        })

        test("should change when the video image is mouse leave", async () => {
            const img = wrapper.find("#video-image")
            await img.trigger("mouseleave")
            expect(img.attributes().src).toEqual(video.coverImage)
        })

    })
})