export default function truncateText(text, maxlength = 100){
    if(!text) return "";
    return text.length > maxlength ? text.slice(0, maxlength) + "..." : text;
}