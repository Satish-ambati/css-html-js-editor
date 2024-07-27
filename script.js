let input=document.querySelector('.input');
let output=document.querySelector('.output');
let bton=document.getElementsByTagName('button');
function execute()
{
    let code=input.value;
    output.contentDocument.open();
            output.contentDocument.write(code);
            output.contentDocument.close();
}