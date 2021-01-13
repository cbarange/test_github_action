import Vue from 'vue'
import home from '@/components/home'

describe('home.vue', () => {
  it('home component should render correct contents', () => {
    const Constructor = Vue.extend(home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.home h1').textContent)
      .toEqual('Welcome in Cistercian Number Converter')
  })
})

describe("true is Really true ?", () => {
  it("works", () => {
    expect(true).toBe(true);
  });
});