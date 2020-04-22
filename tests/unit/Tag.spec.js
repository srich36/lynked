import { shallowMount } from "@vue/test-utils";
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
    expect(wrapper.find(".v-icon-span").exists()).toBe(false);
  });

  it("Renders proper color", () => {
    const wrapper = shallowMount(Tag);
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

  describe("renders props", () => {
    it("Renders color correctly", () => {
      const wrapper = shallowMount(Tag, {
        propsData
      });
      expect(wrapper.find({ name: "VChip" }).props().color).toBe(
        propsData.color
      );
    });

    it("Renders count correctly", () => {
      const wrapper = shallowMount(Tag, {
        propsData
      });
      const vAvatar = wrapper.find({ name: "VAvatar" });
      expect(vAvatar.text()).toBe(String(propsData.count));
      expect(vAvatar.classes()).toContain(propsData.color);
      expect(vAvatar.classes()).toContain("darken-4");
    });

    it("Renders icon correctly", () => {
      const wrapper = shallowMount(Tag, {
        propsData
      });
      const vIcon = wrapper.find(".v-icon-span");

      //Icon v-if renders correctly
      expect(wrapper.find(".v-icon-span").exists()).toBe(true);

      //Icon v-if has the proper text
      expect(vIcon.text()).toBe(propsData.icon);
    });
  });
});
