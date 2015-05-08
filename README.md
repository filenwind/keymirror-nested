# keymirror-nested
relate with https://github.com/STRML/keyMirror and make it nestable


## usage

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


## You also can custom glue and prefix like:


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

var glue = 'BAR';
var prefix = 'FOO';


var constants = keyMirrorNested(obj, glue, prefix);
        