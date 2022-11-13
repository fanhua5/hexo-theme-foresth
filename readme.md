# 关于插件

## hexo-prism-plugin

代码高亮由此插件实现，需要在hexo站点目录下安装此插件

```shell
pnpm add hexo-prism-plugin
```

再修改_config.yml文件

```yaml
# 修改原有配置
highlight:
  enable: false

# 新增 hexo-prism-plugin 插件配置
prism_plugin:
  mode: 'preprocess'    # realtime/preprocess
  theme: 'tomorrow'
  line_number: false    # default false
  custom_css:
```

