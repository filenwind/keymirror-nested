# keymirror-nested
relate with https://github.com/STRML/keyMirror and make it nestable


## usage

```json

keyMirrorNested = require('keymirror-nested');

var constants = keyMirrorNested({
    USER:{
        FAVORITES:{
            MUSICS:{
                ADD: null
            },
            GAMES:{
                DELETE: null
            }
        },
        PROFILE:{
            EDIT_NAME: null
        }
    }
});



where constants will look like:

USER:{
    FAVORITES:{
        MUSICS:{
            ADD: "USER-FAVORITES-MUSICS-ADD"
        },
        GAMES:{
            DELETE: "USER-FAVORITES-GAMES-DELETE"
        }
    },
    PROFILE:{
        EDIT_NAME: "USER-PROFILE-EDIT_NAME"
    }
}


```


## You also can custom glue and prefix:

```json

obj = {
    USER:{
        FAVORITES:{
            MUSICS:{
                ADD: null
            },
            GAMES:{
                DELETE: null
            }
        },
        PROFILE:{
            EDIT_NAME: null
        }
    }
};

var glue = '+';
var prefix = 'FOO';


var constants = keyMirrorNested(obj, glue, prefix);


where constants will look like:


USER:{
    FAVORITES:{
        MUSICS:{
            ADD: "FOO+USER+FAVORITES+MUSICS+ADD"
        },
        GAMES:{
            DELETE: "FOO+USER+FAVORITES+GAMES+DELETE"
        }
    },
    PROFILE:{
        EDIT_NAME: "FOO+USER+PROFILE+EDIT_NAME"
    }
}


```