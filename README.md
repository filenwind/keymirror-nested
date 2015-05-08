# keymirror-nested
relate with https://github.com/STRML/keyMirror and make it nestable


## usage

```json

keyMirrorNested = require('keymirror-nested');

var constants = keyMirrorNested({
    USER:{
        FAVORITES:{
            MUSIC:{
                ADD: null
            }
        },
        PROFILE:{
            EDIT_NAME: null
        }
    }
});

```


## You also can custom glue and prefix like:

```json

obj = {
    USER:{
        FAVORITES:{
            MUSIC:{
                ADD: null
            },
            GAME:{
                DELETE: null
            }
        },
        PROFILE:{
            EDIT_NAME: null
        }
    }
};

var glue = 'FOO';
var prefix = 'BAR';


var constants = keyMirrorNested(obj, glue, prefix);

```