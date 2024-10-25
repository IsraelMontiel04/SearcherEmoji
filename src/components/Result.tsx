import { searchEmoji } from "../helpers/searchEmoji"
import Item from "./Item";

interface Props{
    valueEmoji:string
    darkMode:boolean
}

const Result:React.FC <Props> = ({valueEmoji, darkMode}) => {
  
    const arrayEmojis = searchEmoji({value:valueEmoji})
    console.log(arrayEmojis);
    
    return (
    <section className='container results'>
        {
            arrayEmojis && arrayEmojis.map(item => (
                <Item
                    key={item.title}
                    title={item.title}
                    emoji={item.symbol}
                    darkMode={darkMode}
                />
            ))
        }
    </section>
  )
}

export default Result
