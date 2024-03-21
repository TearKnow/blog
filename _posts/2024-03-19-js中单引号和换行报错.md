---
layout:     post
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Javascript
---

问题1：单引号
"allRegion_json" : eval('(' + '{{allProvince ? allProvince|json_encode()|raw : "{}"}}' + ')'),
"allRegion_json" : {{allProvince ? allProvince|json_encode|raw : "{}"}},

问题2：换行
可以使用``，这是es6的语言
