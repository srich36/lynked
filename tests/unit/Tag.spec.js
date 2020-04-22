import { shallowMount, createLocalVue, mount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

import Tag from "src/components/Tag";

const propsData = {
  color: "purple",
  icon: "md-icon",
  count: 2
};

describe("Tag.vue", () => {
  it("Renders default props correctly", () => {
    const wrapper = shallowMount(Tag);
    expect(wrapper.props().color).toBeDefined();
    expect(wrapper.props().count).toBeUndefined();
    expect(wrapper.props().icon).toBeUndefined();
  });

  it("Renders proper color", () => {
    const wrapper = shallowMount(Tag, {
      props: {
        color: "purple"
      }
    });
    expect(wrapper.attributes()).toHaveProperty("close", "true");
    expect(wrapper.attributes()).toHaveProperty("ripple", "true");
  });

  it("Passes props correctly", () => {
    const wrapper = shallowMount(Tag, {
      propsData
    });
    expect(wrapper.props().color).toBe(propsData.color);
    expect(wrapper.props().icon).toBe(propsData.icon);
    expect(wrapper.props().count).toBe(propsData.count);
  });
});
