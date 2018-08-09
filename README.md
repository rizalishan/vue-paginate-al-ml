## Install via NPM
```js
    npm install --save vue-paginate-ml
```

#### Register as Plugin
```js
    import Vue from 'vue'
    import VuePaginateMl from 'vue-paginate-ml'

    Vue.component('vue-paginate-ml', VuePaginateMl)
```

#### Usage
```vue
    <template>
        <div>
            // example 1
            <vue-paginate-ml :totalPage="10" @btnClick="goToFunction"></vue-paginate-ml>

            // example 2 => with background color
            <vue-paginate-ml :totalPage="15" activeBGColor="success" :withNextPrev="false"></vue-paginate-ml>

            // example 3 => with single data
            <vue-paginate-ml :totalPage="20" :myData="'myname'" @btnClick="goToFuncWithData"></vue-paginate-ml>

            // example 4 => with multiple data
            <vue-paginate-ml :totalPage="20" :myData="['myname', 'myemail']" @btnClick="goToFuncWithMultipleData"></vue-paginate-ml>
        </div>
    </template>

    <script>
        import VuePaginateMl from 'vue-paginate-ml'

        export default {
            name: 'App',
            components: {
                VuePaginateMl
            },
            methods : {
                goToFunction : function(n)
                {
                    console.log(n);
                },

                goToFuncWithData : function(n, data)
                {
                    console.log(n, data);
                },

                goToFuncWithMultipleData : function(n, data)
                {
                    console.log(n, data[0], data[1]);
                }
            }
        }
    </script>
```    
#### Props
|Props|Description|Type|Required|Example|
|-----|-----------|----|--------|-------|
|totalPage|Total paginate|Number|true|10|
|currentPage|Current page|Number|false|2|
|myData|For callback data without process|String|false|'myname'|
|withNextPrev|To show or hide button next/prev|Boolean|false|true|
|nextText|Text for button Next|String|false|'Next'|
|prevText|Text for button Prev|String|false|'Prev'|
|activeBGColor|Background color|String|false|'primary'|
|customActiveBGColor|Background color custom|String|false|'#bb06a9'|
