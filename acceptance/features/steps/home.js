const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl");
const checkElementExists = require("../support/check/checkElementExists");
const checkIsEmpty = require("../support/check/checkIsEmpty");
const checkUrlContains = require("../support/check/checkUrlContains");
const assert = require('assert').strict;

Given(/^that User goes to Video Site Project's HomePage$/, async function () {
    await openUrl.call(this, "/");
    await checkElementExists.call(this, ".video-list-container", false)
});

When(/^page is loaded$/, async function () {
    const selector = '.video-list-container'
    await checkIsEmpty.call(this, selector, true)

});

Then(/^User can see some of videos' title like$/, async function (arr) {
    const selector = '.card-container'

    for (let [ videoTitle ] of arr.rawTable) {
        let videos = await this.page.$$eval(
            selector,
            async (items, videoTitle) => {
                const video = items
                    .find(item => item.querySelector(".video-title").textContent.includes(videoTitle))
                return !!video
            },
            videoTitle
        )
        assert.strictEqual(videos, true)
    }
});

Given(/^that User is on Video Site Project's HomePage$/, async function () {
    await openUrl.call(this, "/");
    await checkUrlContains.call(this, false, "/")
    await checkElementExists.call(this, ".video-list-container", false)
});

When(/^User clicks "([^"]*)" video$/, async function (videoTitle) {
    const selector = '.card-container'
    this.videoSlug = await this.page.$$eval(
        selector,
        async (items, videoTitle) => {
            const video = items
                .find(item => item.querySelector(".video-title").textContent === videoTitle)
            const img = video.querySelector("#video-image")
            const {slug} = video.dataset
            console.log(video.dataset)
            await img.click()
            return slug
        },
        videoTitle
    )
});

Then(/^User should see watch url correctly$/, async function () {
    await this.page.waitForNavigation({waitUntil:"load"}).catch(error => {
        // handler code here
    });
    await checkUrlContains.call(this, false, `/watch?slug=${this.videoSlug}`)
});

When(/^User hovers "([^"]*)" video$/, async function (videoTitle) {
    const imageItems = await this.page.$$('.card-container > img');
    let isFindImage = false;
    for (let image of imageItems) {
        const imageTitle = await (await image.getProperty('alt')).jsonValue()
        if(imageTitle === videoTitle) {
            isFindImage = true;
            await image.hover();
        }
    }
    assert.notEqual(isFindImage, false)
});

Then(/^User should see hovered image$/, async function () {
    await this.page.waitForTimeout(3000)
});