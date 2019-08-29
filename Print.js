var PrtCol = [ // Change / Add variables to add/change your colors and types
    'i', '#0000FF', // Info
    '+', '#008000', // Added content
    '-', '#FF00FF', // Removed content
    '/', '#FFAA00', // Changed content    
    '!', 'E', // Error   
    '#', 'W' // Warn  
]

print = function(define, message) {
    var time = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds() + '.' + new Date().getMilliseconds();
    var type = define[0]; var about = define.slice(1);
    if ( message == undefined ) { console.log('%c[~] ' + type + about + '%c @ ' + time, 'color:#202040;', 'color:#20204060;') } // Normal debugger message
    else if (PrtCol[PrtCol.indexOf(type)] != undefined) {
        if (PrtCol[PrtCol.indexOf(type)+1][0] == '#') { // Colored output
            console.log('%c[' + type + '] ' + about + ': ' + '%c' + message + '%c  @  ' + time, 'color:'+PrtCol[PrtCol.indexOf(type)+1],'color: #000','color:'+PrtCol[PrtCol.indexOf(type)+1]+'60');
        } else  if (PrtCol[PrtCol.indexOf(type)+1][0] == 'E') { // Error output
            console.error('[' + type + '] ' + about + ': ' + message + '  @  ' + time);
        } else  if (PrtCol[PrtCol.indexOf(type)+1][0] == 'W') { // Warn output
            console.warn('[' + type + '] ' + about + ': ' + message + '  @  ' + time);
        }
    }
}