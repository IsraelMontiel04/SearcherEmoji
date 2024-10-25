import { useState } from "react"

interface Props{
    title:string
    emoji:string
    darkMode: boolean;
}

const Item:React.FC<Props> = ({title, emoji,darkMode}) => {

    const [copy, setCopy] = useState(false)

    const handleCopy = () =>{
        setCopy(true)
        navigator.clipboard.writeText(emoji);
        setTimeout(() => setCopy(false), 1000);
    }

  return (
    <article className={`card-emoji ${darkMode?"dark-mode":""}`}>
      <p 
      onClick={handleCopy}
      className="emoji-icon"
      >{emoji}</p>
      <h4>{title} </h4>
      {copy && <p className="copied">Copied!</p>}
    </article>
  )
}

export default Item
