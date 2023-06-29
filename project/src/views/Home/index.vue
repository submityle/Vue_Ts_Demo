<template lang="">
  <a-layout style="min-height: 100vh">
    <a-layout-header>
      <div class="logo" />
    </a-layout-header>
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <a-menu
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          mode="inline"
          theme="dark"
          :inline-collapsed="collapsed"
        >
          <template v-for="(item, index) in homeRouter" :key="index">
            <template v-if="!item.children">
              <a-menu-item :key="index">
                <template #icon>
                  <PieChartOutlined />
                </template>
                {{ item.name }}
              </a-menu-item>
            </template>
            <template v-else>
              <sub-menu :key="index" :menu-info="item" />
            </template>
          </template>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-content style="margin: 0 16px">
          <div
            :style="{
              marginTop: '24px',
              padding: ' 0 24px',
              background: '#fff',
              minHeight: '360px',
              height: '95%',
              borderRadius: '45px'
            }"
          >
            <router-view></router-view>
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined
} from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
import { homeRouter } from '../../router/modules/homeRouter'
export default defineComponent({
  components: { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined },
  setup(props, ctx) {
    const data = {
      collapsed: ref<boolean>(false),
      selectedKeys: ref<string[]>(['1']),
      topSelectedKeys: ref<string[]>(['1'])
    }
    return {
      ...data,
      homeRouter
    }
  }
})
</script>
<style>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}
[data-theme='dark'] .site-layout-content {
  background: #141414;
}

#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
