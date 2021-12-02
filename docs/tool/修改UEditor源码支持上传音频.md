---
title: 修改UEditor源码支持上传音频
---

UEditor 上传音乐只能从网络上搜索音频，不能上传本地音频。而我们的项目中就涉及到了在富文本在本地上传音频的需求。其实 UEditor 是支持本地上传视频的。

上传视频时是可以选择 MP3 这类的音频文件的，只不过这里上传后会生成 video 标签而不是 audio 标签。这样渲染后得到的是一个视频播放框，能播放音频但是有一个大黑框，不复合我们的要求。

<!-- more -->

有了以上这个前提我们可以修改一下 UEditor 的源码，在生成 video 标签前，用文件的后缀名判断当前上传的文件类型，确定上传的是音频还是视频。根据不同的文件类型决定生成 video 标签还是 audio 标签。

在 ueditor.js 中查找 creatInsertStr 方法,这个方法的作用是将上传文件后利用得到的 url 地址宽高等信息生成 html 字符串返回给调用者。这里我们只关心处理视频上传的部分，因为我们现在上传音频也要通过上传视频这里来实现。

```javascript
case 'video':
    var ext = url.substr(url.lastIndexOf('.') + 1);
    if(ext == 'ogv') ext = 'ogg';
    str = '<video' + (id ? ' id="' + id + '"' : '') + ' class="' + classname + ' video-js" ' + (align ? ' style="float:' + align + '"': '') +
        ' controls preload="none" width="' + width + '" height="' + height + '" src="' + url + '" data-setup="{}">' +
        '<source src="' + url + '" type="video/' + ext + '" /></video>';
    break;
```

现在我们要根据后缀名来判断一下文件类型

```javascript
case 'video':
    //这里修改实现上传MP3文件(2016.5.13---漫卷)
    var ext = url.substr(url.lastIndexOf('.') + 1);
    if (ext == "mp3") {
        str = '<audio controls preload="none" controlsList="nodownload" src="' + url + '">" /></audio>';
    } else {
        if (ext == 'ogv') ext = 'ogg';
        str = '<video' + (id ? ' id="' + id + '"' : '') + (align ? ' style="float:' + align + '"' : '') + 'controls width="' + width + '" height="' + height + '" src="' + url + '" data-setup="{}">' + '<source src="' + url + '" type="video/' + ext + '" /></video>';
    }
    break;
```

如果后缀名是 MP3（当然你也可以是一些其他的音频格式），我们就创建一个 audio 标签的字符串。

这里也可以加一些特殊的样式。比如向右对齐`style="float：right；"`,不显示下载按钮`controlsList="nodownload"`
