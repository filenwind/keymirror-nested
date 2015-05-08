
var keyMirrorNested = function(obj, glue, prefix) {
    var ret = {};
    var key;
    var key_join;
  
    
    prefix = typeof prefix === 'undefined' ? '':prefix;
    glue = typeof glue === 'undefined' ? '_':glue;
    
    if (!(obj instanceof Object && !Array.isArray(obj))) {
        throw new Error('keyMirror(...): Argument must be an object.');
    }
    for(key in obj){
        
        
        key_prefix = prefix === '' ? key:prefix+glue+key;
        
        if (obj.hasOwnProperty(key)) {
            if (obj[key] instanceof Object){
                ret[key] = keyMirrorNested(obj[key], glue, key_prefix);
            }else{
                ret[key] = key_prefix;
            }
        } 
    }
    return ret;
};

module.exports = keyMirrorNested;