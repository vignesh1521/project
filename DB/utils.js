function display_error(err_msg){
    let con =document.getElementById("error-box")
    let err_msg_temp = `<div class="error-message">
    <p>${err_msg}</p>
      <a class="error-close icon-cross" onclick="this.parentElement.style.display='none'">
        <svg fill="#947c00" height="512px" width="512px" viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="expanded">
            <g>
                <path d="M267.314,256l80.894-80.894c3.124-3.124,3.124-8.189,0-11.313c-3.125-3.124-8.189-3.124-11.314,0L256,244.686    
                l-80.894-80.894c-3.124-3.124-8.189-3.124-11.313,0c-3.125,3.124-3.125,8.189,0,11.313L244.686,256l-80.894,80.894    
                c-3.125,3.125-3.125,8.189,0,11.314c1.562,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343L256,267.314l80.894,80.894    
                c1.563,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343c3.124-3.125,3.124-8.189,0-11.314L267.314,256z"
                stroke="#947c00" stroke-width="25" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

                <path d="M256,59c26.602,0,52.399,5.207,76.677,15.475c23.456,9.921,44.526,24.128,62.623,42.225    
                c18.098,18.098,32.304,39.167,42.226,62.624C447.794,203.601,453,229.398,453,256c0,26.602-5.206,52.399-15.475,76.677    
                c-9.922,23.456-24.128,44.526-42.226,62.623c-18.097,18.098-39.167,32.304-62.623,42.226C308.399,447.794,282.602,453,256,453    
                c-26.602,0-52.399-5.206-76.676-15.475c-23.457-9.922-44.526-24.128-62.624-42.226c-18.097-18.097-32.304-39.167-42.225-62.623    
                C64.207,308.399,59,282.602,59,256c0-26.602,5.207-52.399,15.475-76.676c9.921-23.457,24.128-44.526,42.225-62.624    
                c18.098-18.097,39.167-32.304,62.624-42.225C203.601,64.207,229.398,59,256,59 M256,43C138.363,43,43,138.363,43,256    
                s95.363,213,213,213s213-95.363,213-213S373.637,43,256,43L256,43z"
                stroke="#947c00" stroke-width="25" fill="none"/>
            </g>
        </g>
    </svg>
    </a>
    </div>`
    con.innerHTML+=err_msg_temp

}


function timeLeft(targetDateTime) {
    const now = new Date();
    const targetDate = new Date(targetDateTime);
    if (targetDate < now) {
        return "On going";
    }
    const diffMs = targetDate - now;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    return (`${diffHours}h ${diffMinutes}m Left`);
}

async function brotliCompress(text) {
    const encoder = new TextEncoder();
    const stream = new Blob([encoder.encode(text)]).stream().pipeThrough(new CompressionStream("brotli"));
    const compressedBlob = await new Response(stream).blob();
    return compressedBlob; // Returns a Blob
}

function data_stream_EC(data) {
    return btoa(data)
}

function data_stream_DC(data){
    return atob(data)

}
