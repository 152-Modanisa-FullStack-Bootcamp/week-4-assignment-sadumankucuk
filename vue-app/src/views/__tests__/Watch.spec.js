import {createLocalVue, shallowMount} from "@vue/test-utils";
import Watch from "@/views/Watch";
import router from "@/router";

describe("WatchPage.vue", () => {
    let wrapper
    beforeEach(() => {
        const localVue = createLocalVue()
        localVue.use(router)
        wrapper = shallowMount(Watch, {
            router
        })
    })
    test("should component exists", () => {
        expect(wrapper.exists()).toBeTruthy()
    })

})