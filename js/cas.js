export default function getExpires()
  {
        const d = new Date();
        d.setTime(d.getTime() + (30 *24*60*60)); //vyprší po 30 dnech  
        let expires = "expires="+ d.toUTCString();
        return expires;
}
  
 
