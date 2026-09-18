# 念一扬作品集网站

零依赖静态网站，可直接部署到 GitHub Pages。

## 本地预览

```bash
python3 -m http.server 8000 -d .
```

访问 `http://localhost:8000`。网站包含首页、四个创新项目页、交互设计手绘页和平面设计页。

## GitHub Pages

1. 新建仓库并上传本目录全部文件。
2. 在仓库 Settings → Pages 中选择 **Deploy from a branch**。
3. 选择 `main` 分支与 `/ (root)` 目录。

## 发布前需要替换

- 首页联系信息。
- 四个项目的演示视频链接。
- 论文链接与个人简历。
- PDF 截图素材建议逐步替换为原始照片、流程图与高清界面。
