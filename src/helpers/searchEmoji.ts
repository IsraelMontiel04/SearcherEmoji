import emojiList from "./emojiList.json"

interface Props{
    value:string
}

interface Emoji {
    title: string;
    keywords: string;
    symbol: string;
}

export const searchEmoji = ({value} : Props):Emoji[] => {
    const lowerValue = value.toLowerCase();
    const response: Emoji[] = [];
    emojiList.map((item:Emoji) => {
        if (item.keywords.includes(lowerValue)) {
            response.push(item);
        }
    })
    return value === "" ? response : response.slice(0, 24);
}