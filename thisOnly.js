/**
 * @description limit the characters the user can input
 * @author RED
 */
$(document).ready(function(){
    $('[numonly]').each(function(){
        $(this).on('keypress', function(e){
            // get value
            let val = $(this).attr('numOnly');
            // check if case sensitive
            const isSensitive = (val.at(0) === "(" && val.at(-1) === ")");
            val = (isSensitive) ? val : val.toLowerCase();
            // convert value of letOnly attribute to an array
            const esc = val.split("");
            // pressed key
            const key = e.which || e.keyCode;
            let code = String.fromCharCode(key);
            code = (isSensitive) ? code : code.toLowerCase();
            const notNum = (key > 31 && (key < 48 || key > 57));
            const escHasNum = (esc.includes(code) && !notNum)
            // allow non-numeric and custom keys defined
            if( notNum && esc.includes(code) ) return;

            // prevent keypress events of non-numeric or numerical numbers that are defined in the attribute
            if( notNum || escHasNum ) e.preventDefault();
        });
    });
    $('[letonly]').each(function(){
        $(this).on('keypress', function(e){
            // get value
            let val = $(this).attr('letOnly');
            // check if case sensitive
            const isSensitive = (val.at(0) === "(" && val.at(-1) === ")");
            val = (isSensitive) ? val : val.toLowerCase();
            // convert value of letOnly attribute to an array
            const esc = val.split("");
            // pressed key
            const key = e.which || e.keyCode;
            let code = String.fromCharCode(key);
            code = (isSensitive) ? code : code.toLowerCase();
            const notLet = (key > 31 && ( (key < 65 || key > 90) && (key < 97 || key > 122) ) );
            const escHasLet = (esc.includes(code) && !notLet)
            // allow non-latin alphabet and custom keys defined
            if( notLet && esc.includes(code) ) return;

            // prevent keypress events of non-latin or latin alphabets that are defined in the attribute
            if( notLet || escHasLet ) e.preventDefault();
        });
    });
    $('[thisonly]').each(function(){
        $(this).on('keypress', function(e){
            // get value
            let val = $(this).attr('thisOnly');
            // check if case sensitive
            const isSensitive = (val.at(0) === "(" && val.at(-1) === ")");
            val = (isSensitive) ? val : val.toLowerCase();
            // convert value of letOnly attribute to an array
            const esc = val.split("");
            // pressed key
            const key = e.which || e.keyCode;
            let code = String.fromCharCode(key);
            code = (isSensitive) ? code : code.toLowerCase();
            // only allow characters defined
            if( !esc.includes(code) ) e.preventDefault();
        });
    });
    $('[maxlen]').each(function(){
        $(this).on('keypress', function(e){
            const length = $(this).attr('maxLen');
            if( this.value.length >= length ) e.preventDefault();
        });
    });
});